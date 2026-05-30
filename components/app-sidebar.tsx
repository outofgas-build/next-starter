"use client";

import { ChevronsLeft, Network } from "lucide-react";
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
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarRail
} from "@/components/ui/sidebar";
import { VAULT_CONFIGS, useVaultsDashboard } from "@/hooks/use-vaults";
import { VaultIcon } from "@/components/vault-icon";
import { cn } from "@/lib/utils";

export function AppSidebar() {
  const pathname = usePathname();
  const normalizedPathname = pathname.toLowerCase();
  const { data, isLoading } = useVaultsDashboard();
  const vaults = data?.vaults ?? [];

  return (
    <Sidebar collapsible="icon" className="border-r border-white/10 bg-[#020914]">
      <SidebarHeader className="relative px-[22px] pb-7 pt-8">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="h-7 rounded-none px-0 hover:bg-transparent"
              size="lg"
              tooltip="Venzo Admin"
            >
              <Link href="/">
                <Image alt="Venzo" height={22} src="/logo.webp" width={118} style={{ height: "auto", width: "118px" }} />
                <span className="sr-only">Venzo Admin</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <ChevronsLeft className="absolute right-[22px] top-9 size-5 text-white/75" />
      </SidebarHeader>

      <SidebarContent className="gap-0 px-[18px]">
        <SidebarGroup className="px-0">
          <SidebarGroupLabel className="mb-4 h-auto px-1 text-[13px] font-medium uppercase tracking-normal text-white/72">
            Vaults
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2">
              {isLoading ? (
                <>
                  <SidebarMenuSkeleton className="h-[150px] rounded-[10px] border border-white/8 bg-white/[0.025]" showIcon />
                  <SidebarMenuSkeleton className="h-[150px] rounded-[10px] border border-white/8 bg-white/[0.025]" showIcon />
                  <SidebarMenuSkeleton className="h-[150px] rounded-[10px] border border-white/8 bg-white/[0.025]" showIcon />
                </>
              ) : (
                vaults.map((vault, index) => {
                  const isActive =
                    normalizedPathname === `/vaults/${vault.address.toLowerCase()}` || (pathname === "/" && index === 0);

                  return (
                  <SidebarMenuItem key={vault.id}>
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "relative h-20 items-stretch rounded-[10px] border border-white/8 bg-[#07111f]/70 px-3 py-3 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-colors hover:bg-[#0a1729] [&_svg]:size-[30px]",
                        "data-active:border-[#147cff] data-active:bg-[linear-gradient(145deg,rgba(19,124,255,0.18),rgba(10,19,34,0.9)_45%,rgba(10,19,34,0.74))] data-active:text-white data-active:shadow-[inset_2px_0_0_#147cff]"
                      )}
                      isActive={isActive}
                      tooltip={vault.name}
                    >
                      <Link href={`/vaults/${vault.address}`}>
                        <div className="flex min-h-full min-w-0 flex-1 flex-col items-start">
                          <VaultIcon
                            symbol={vault.symbol}
                            name={vault.name}
                            className="mb-3 text-[#b99a69]"
                          />
                          <span className="line-clamp-1 max-w-full text-sm font-semibold leading-[20px] text-white">
                            {vault.name}
                          </span>
                          {/*<VaultSymbolTag symbol={vault.symbol} className="mt-auto" />*/}
                        </div>
                        {isActive ? (
                          <span className="absolute right-[17px] top-[18px] size-4 rounded-full bg-[#147cff] shadow-[0_0_16px_rgba(20,124,255,0.85)]" />
                        ) : null}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  );
                })
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-[22px] pb-[46px] pt-5">
        <SidebarMenu className="gap-3 rounded-[10px] border border-white/10 bg-[#050d19]/85 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          <SidebarMenuItem className="flex h-6 items-center gap-3 text-[15px] font-semibold text-white">
            <span className="size-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.9)]" />
            <span>Connected</span>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-6 rounded-none px-0 text-[15px] text-white hover:bg-transparent hover:text-white" tooltip="Configured chains">
              <Network className="size-4 text-white/80" />
              <span>{new Set(VAULT_CONFIGS.map((vault) => vault.chain.id)).size} chains</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
