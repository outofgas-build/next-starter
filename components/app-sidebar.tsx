"use client";

import { Database, Gauge, RefreshCw, Vault } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarRail,
  SidebarSeparator
} from "@/components/ui/sidebar";
import { useVaultsDashboard } from "@/hooks/use-vaults";
import { formatAddress } from "@/lib/format";

export function AppSidebar() {
  const pathname = usePathname();
  const { data, isLoading } = useVaultsDashboard();
  const vaults = data?.vaults ?? [];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="px-3 py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="h-12 rounded-md px-2 hover:bg-transparent"
              size="lg"
              tooltip="Venzo Admin"
            >
              <Link href="/">
                <Image alt="Venzo" height={20} src="/logo.webp" width={94} />
                <span className="sr-only">Venzo Admin</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="gap-3 px-3">
        <SidebarGroup className="px-0">
          <SidebarGroupLabel className="px-2 text-[11px] font-semibold uppercase tracking-wide text-sidebar-foreground/50">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  className="h-10 rounded-md pr-12 text-sidebar-foreground/80 data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground"
                  isActive={pathname === "/"}
                  tooltip="Vault Registry"
                >
                  <Link href="/">
                    <Gauge />
                    <span>Vault Registry</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuBadge className="right-2 top-2 bg-background/70 text-sidebar-foreground/60 shadow-[inset_0_0_0_1px_var(--sidebar-border)]">
                  {data?.vaultRegistries[0]?.vaultCount ?? vaults.length}
                </SidebarMenuBadge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator className="mx-0" />

        <SidebarGroup className="px-0">
          <SidebarGroupLabel className="px-2 text-[11px] font-semibold uppercase tracking-wide text-sidebar-foreground/50">
            Vaults
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {isLoading ? (
                <>
                  <SidebarMenuSkeleton showIcon />
                  <SidebarMenuSkeleton showIcon />
                  <SidebarMenuSkeleton showIcon />
                </>
              ) : (
                vaults.map((vault) => (
                  <SidebarMenuItem key={vault.id}>
                    <SidebarMenuButton
                      asChild
                      className="h-11 rounded-md px-2.5 text-sidebar-foreground/80 data-active:bg-sidebar-accent data-active:text-sidebar-accent-foreground"
                      isActive={pathname === `/vaults/${vault.address}`}
                      tooltip={vault.name}
                    >
                      <Link href={`/vaults/${vault.address}`}>
                        <Vault className="text-sidebar-foreground/50 group-data-[active=true]/menu-button:text-sidebar-accent-foreground" />
                        <span className="min-w-0 flex-1 truncate font-medium">{vault.name}</span>
                        <span className="ml-auto max-w-14 shrink-0 truncate rounded-sm bg-background/70 px-1.5 py-0.5 text-[11px] font-semibold leading-4 text-sidebar-foreground/60 shadow-[inset_0_0_0_1px_var(--sidebar-border)] group-data-[active=true]/menu-button:text-sidebar-accent-foreground">
                          {vault.symbol}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-3 py-3">
        <SidebarMenu className="gap-1">
          <SidebarMenuItem>
            <SidebarMenuButton className="h-9 rounded-md text-sidebar-foreground/65" tooltip="Subgraph status">
              <RefreshCw />
              <span>Block {data?._meta?.block.number ?? "--"}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-9 rounded-md text-sidebar-foreground/65" tooltip="Registry">
              <Database />
              <span>{formatAddress(data?.vaultRegistries[0]?.address)}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
