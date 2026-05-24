"use client";

import { usePrivy } from "@privy-io/react-auth";
import {
  cloneElement,
  isValidElement,
  type MouseEventHandler,
  type ReactElement,
  type ReactNode
} from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GuardedChildProps = {
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  children?: ReactNode;
};

type AuthGuardProps = {
  children: ReactElement<GuardedChildProps>;
  buttonClassName?: string;
};

export function AuthGuard({ children, buttonClassName }: AuthGuardProps) {
  const { authenticated, login, ready } = usePrivy();

  if (!ready) {
    return (
      <Button className={cn("w-full", buttonClassName)} disabled type="button">
        Connect Wallet
      </Button>
    );
  }

  if (!authenticated) {
    return (
      <Button className={cn("w-full", buttonClassName)} type="button" onClick={login}>
        Connect Wallet
      </Button>
    );
  }

  if (!isValidElement<GuardedChildProps>(children)) {
    return children;
  }

  return cloneElement(children, {
    className: cn(buttonClassName, children.props.className)
  });
}
