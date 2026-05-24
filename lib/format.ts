import { shortenId } from "@outofgas/utils";

function parseDecimalToScaledBigInt(value: string, outputDecimals: number) {
  const trimmedValue = value.trim();
  const match = trimmedValue.match(/^(-?)(\d+)(?:\.(\d+))?$/);
  if (!match) return null;

  const [, sign, wholeText, fractionText = ""] = match;
  const outputScale = BigInt(10) ** BigInt(outputDecimals);
  const normalizedFraction = fractionText.padEnd(outputDecimals, "0").slice(0, outputDecimals);
  const fraction = normalizedFraction ? BigInt(normalizedFraction) : BigInt(0);
  const scaledValue = BigInt(wholeText) * outputScale + fraction;

  return sign ? -scaledValue : scaledValue;
}

export function formatAddress(address?: string | null) {
  return shortenId(address, 6, 4) || "--";
}

export function formatDate(timestamp?: string | number | null) {
  if (timestamp === undefined || timestamp === null) return "--";
  const date = new Date(Number(timestamp) * 1000);
  if (Number.isNaN(date.getTime())) return "--";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);
}

export function formatInteger(value?: string | number | null) {
  if (value === undefined || value === null) return "--";
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return String(value);

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0
  }).format(numericValue);
}

export function formatTokenAmount(
  value?: string | number | null,
  decimals?: number | null,
  maximumFractionDigits = 4
) {
  if (value === undefined || value === null) return "--";

  const valueText = String(value);
  if (valueText.includes(".")) {
    const numericValue = Number(valueText);
    if (!Number.isFinite(numericValue)) return valueText;

    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits
    }).format(numericValue);
  }

  const raw = BigInt(valueText);
  const tokenDecimals = decimals ?? 18;
  const divisor = BigInt(10) ** BigInt(tokenDecimals);
  const whole = raw / divisor;
  const fraction = raw % divisor;

  if (fraction === BigInt(0)) return formatInteger(whole.toString());

  const fractionText = fraction
    .toString()
    .padStart(tokenDecimals, "0")
    .slice(0, maximumFractionDigits)
    .replace(/0+$/, "");

  return `${formatInteger(whole.toString())}${fractionText ? `.${fractionText}` : ""}`;
}

export function sumTokenAmounts(
  values: Array<{ value?: string | number | null; decimals?: number | null }>,
  outputDecimals = 18
) {
  const outputScale = BigInt(10) ** BigInt(outputDecimals);
  const total = values.reduce((sum, item) => {
    if (item.value === undefined || item.value === null) return sum;

    const valueText = String(item.value);
    if (valueText.includes(".")) {
      return sum + (parseDecimalToScaledBigInt(valueText, outputDecimals) ?? BigInt(0));
    }

    const itemDecimals = item.decimals ?? 18;
    const itemScale = BigInt(10) ** BigInt(itemDecimals);
    return sum + (BigInt(valueText) * outputScale) / itemScale;
  }, BigInt(0));

  return total.toString();
}

export function formatBps(value?: string | number | null) {
  if (value === undefined || value === null) return "--";
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) return String(value);

  return `${(numericValue / 100).toLocaleString("en-US", {
    maximumFractionDigits: 2
  })}%`;
}

export function formatSharePrice(
  value?: string | number | null,
  assetDecimals?: number | null,
  options: {
    totalAssets?: string | number | null;
    totalSupply?: string | number | null;
    scale?: "asset" | "oracle" | "auto";
  } = {}
) {
  const sharePriceDecimals = 18;

  if (value === undefined || value === null) {
    return formatDerivedSharePrice(options.totalAssets, options.totalSupply, assetDecimals);
  }

  return formatTokenAmount(value, sharePriceDecimals, 6);
}

export function formatDerivedSharePrice(
  totalAssets?: string | number | null,
  totalSupply?: string | number | null,
  assetDecimals?: number | null
) {
  if (totalAssets === undefined || totalAssets === null) return "--";

  const supply = BigInt(String(totalSupply ?? 0));
  if (supply === BigInt(0)) return "--";

  const sharePriceDecimals = 18;
  const assetUnit = BigInt(10) ** BigInt(assetDecimals ?? 18);
  const shareUnit = BigInt(10) ** BigInt(sharePriceDecimals);
  const derivedSharePrice =
    (BigInt(String(totalAssets)) * shareUnit * shareUnit) / (assetUnit * supply);

  return formatTokenAmount(derivedSharePrice.toString(), sharePriceDecimals, 6);
}
