"use client";

import { ReactNode } from "react";
import { Bell, Wallet } from "lucide-react";
import { usePrivy } from "@privy-io/react-auth";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export function AppShell({ children }: { children: ReactNode }) {
  const { authenticated, login } = usePrivy();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-w-0">
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-border/70 bg-background/75 p-3 backdrop-blur-xl">
          <SidebarTrigger />
          <div className="flex items-center gap-2">
            <Button className="size-9 rounded-lg" size="icon" variant="outline" aria-label="Notifications">
              <Bell className="size-4" />
            </Button>
            <Button className="rounded-lg" size="sm" variant="outline" onClick={login}>
              <Wallet />
              {authenticated ? "Connected" : "Connect"}
            </Button>
            <ThemeSwitcher />
          </div>
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
