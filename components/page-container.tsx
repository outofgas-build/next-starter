import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function PageContainer({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("container mx-auto flex min-h-screen max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 lg:px-8", className)}
      {...props}
    />
  );
}
