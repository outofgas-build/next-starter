import Image from "next/image";
import { cn } from "@/lib/utils";

type VaultIconProps = {
  symbol?: string | null;
  name?: string | null;
  className?: string;
};

const TAG_COLORS: Record<string, string> = {
  MSTAT: "bg-violet-500/20 text-violet-200 ring-violet-400/30",
  vQuant: "bg-blue-500/20 text-blue-100 ring-blue-400/30",
  vUSD: "bg-emerald-500/20 text-emerald-100 ring-emerald-400/30"
};

const STRATEGY_LOGOS: Record<string, { src: string; alt: string; className?: string }> = {
  MSTAT: {
    src: "/providers/monarq.svg",
    alt: "Monarq strategy logo"
  },
  vQuant: {
    src: "/providers/quantassets-dark.svg",
    alt: "QuantAssets strategy logo"
  },
  vUSD: {
    src: "/providers/valos.svg",
    alt: "Valos strategy logo",
    className: "invert"
  }
};

const ASSET_LOGOS: Record<string, string> = {
  AUSD: "/tokens/ausd.svg",
  USDC: "/tokens/usdc.svg",
  USDT: "/tokens/usdt.svg"
};

const ASSET_ACCENTS: Record<string, string> = {
  AUSD: "from-amber-400/20 via-emerald-500/5 to-sky-500/10",
  USDC: "from-sky-500/20 via-sky-500/5 to-emerald-500/10",
  USDT: "from-emerald-500/22 via-emerald-500/5 to-sky-500/10"
};

export function VaultIcon({ symbol, name, className }: VaultIconProps) {
  const label = symbol || name || "Vault";
  const strategyLogo = STRATEGY_LOGOS[symbol ?? ""];

  return (
    <span
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/10 p-2 shadow-[0_0_24px_rgba(57,152,255,0.18)]",
        className
      )}
    >
      {strategyLogo ? (
        <Image
          alt={strategyLogo.alt}
          className={cn("max-h-full max-w-full object-contain", strategyLogo.className)}
          height={48}
          src={strategyLogo.src}
          width={48}
        />
      ) : (
        <span aria-hidden="true" className="text-sm font-semibold text-slate-950">
          {label.slice(0, 2)}
        </span>
      )}
      <span className="sr-only">{label}</span>
    </span>
  );
}

export function VaultAssetBackdrop({ symbol, className }: { symbol?: string | null; className?: string }) {
  const normalizedSymbol = symbol?.toUpperCase() ?? "";
  const logoSrc = ASSET_LOGOS[normalizedSymbol];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_78%_8%,rgba(255,255,255,0.08),transparent_21rem)]",
        "bg-gradient-to-br",
        ASSET_ACCENTS[normalizedSymbol] ?? "from-primary/20 via-white/5 to-emerald-500/10",
        className
      )}
    >
      {logoSrc ? (
        <Image
          alt=""
          className="absolute right-[-1.5rem] top-[-3.5rem] h-72 w-72 rotate-[-10deg] object-contain opacity-80 mix-blend-screen sm:right-[5%] sm:top-[-5.5rem] sm:h-96 sm:w-96"
          height={384}
          src={logoSrc}
          width={384}
        />
      ) : (
        <div className="absolute right-4 top-8 text-[9rem] font-semibold leading-none text-white/10 sm:right-[10%] sm:top-0 sm:text-[15rem]">
          {normalizedSymbol || "VAULT"}
        </div>
      )}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,7,19,0.96)_0%,rgba(2,7,19,0.78)_48%,rgba(2,7,19,0.28)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/70 to-transparent" />
    </div>
  );
}

export function VaultSymbolTag({ symbol, className }: { symbol?: string | null; className?: string }) {
  if (!symbol) return null;

  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-sm px-2 py-0.5 text-[11px] font-medium ring-1",
        TAG_COLORS[symbol] ?? "bg-white/10 text-white/75 ring-white/15",
        className
      )}
    >
      {symbol}
    </span>
  );
}
