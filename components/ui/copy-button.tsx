"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { copyToClipboard } from "@outofgas/utils";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CopyButtonProps = Omit<React.ComponentProps<typeof Button>, "children" | "onClick"> & {
  value: string;
  copyLabel?: string;
  copiedLabel?: string;
  onCopied?: () => void;
};

export function CopyButton({
  value,
  className,
  copyLabel = "Copy to clipboard",
  copiedLabel = "Copied to clipboard",
  onCopied,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }
    };
  }, []);

  const handleCopy = () => {
    copyToClipboard(value, () => {
      if (resetTimerRef.current) {
        clearTimeout(resetTimerRef.current);
      }

      setCopied(true);
      onCopied?.();

      resetTimerRef.current = setTimeout(() => {
        setCopied(false);
        resetTimerRef.current = null;
      }, 2000);
    });
  };

  return (
    <Button
      type="button"
      aria-label={copied ? copiedLabel : copyLabel}
      aria-live="polite"
      className={cn("relative", className)}
      onClick={handleCopy}
      {...props}
    >
      <span className="relative size-4">
        <Copy
          className={cn(
            "absolute inset-0 size-4 transition-all duration-200",
            copied ? "scale-75 opacity-0" : "scale-100 opacity-100"
          )}
        />
        <Check
          className={cn(
            "absolute inset-0 size-4 transition-all duration-200",
            copied ? "scale-100 opacity-100" : "scale-75 opacity-0"
          )}
        />
      </span>
    </Button>
  );
}
