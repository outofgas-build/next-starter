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
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild size="lg" tooltip="Venzo Admin">
              <Link href="/">
                <Image alt="Venzo" height={20} src="/logo.webp" width={94} />
                <span className="sr-only">Venzo Admin</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/"} tooltip="Vault Registry">
                  <Link href="/">
                    <Gauge />
                    <span>Vault Registry</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuBadge>{data?.vaultRegistries[0]?.vaultCount ?? vaults.length}</SidebarMenuBadge>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Vaults</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
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
                      isActive={pathname === `/vaults/${vault.address}`}
                      tooltip={vault.name}
                    >
                      <Link href={`/vaults/${vault.address}`}>
                        <Vault />
                        <span>{vault.name}</span>
                      </Link>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>{vault.symbol}</SidebarMenuBadge>
                  </SidebarMenuItem>
                ))
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Subgraph status">
              <RefreshCw />
              <span>Block {data?._meta?.block.number ?? "--"}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Registry">
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
