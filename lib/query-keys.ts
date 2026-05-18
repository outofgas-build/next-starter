export const queryKeys = {
  vaults: {
    all: ["vaults"] as const,
    list: () => [...queryKeys.vaults.all, "list"] as const,
    detail: (address: string) => [...queryKeys.vaults.all, "detail", address] as const
  }
};
