"use client";

import { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div className="sticky top-0 z-20 flex items-center justify-between border-b bg-background/90 p-3 backdrop-blur">
          <SidebarTrigger />
          <ThemeSwitcher />
        </div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
