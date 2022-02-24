# Registration

## How to register onto the Cosmos Chain Registry

### Prerequisites

- Registered to [SLIP173](https://github.com/satoshilabs/slips/blob/master/slip-0173.md)
  - See: [How to register a bech32 prefix onto SLIP173](...)

### Requirements

1. Key Chain data--metadata, locations, network addresses, etc.
2. Key asset data--metadata, such as name, symbol, minimal denomination, decimal precision, etc.

### Steps

1. Review the [Cosmos Chain Registry](https://github.com/cosmos/chain-registry) docs
    1. [README.md](https://github.com/cosmos/chain-registry/blob/master/README.md)
    2. [chain.schema.json](https://github.com/cosmos/chain-registry/blob/master/chain.schema.json)
    3. [assetlists.schema.json](https://github.com/cosmos/chain-registry/blob/master/assetlist.schema.json)
2. You may refer to another registration to serve as an example, such as [Osmosis' registration](https://github.com/cosmos/chain-registry/blob/master/osmosis/chain.json)
3. If the chain has not yet been registered, draft a `chain.json` and `assetlists.json` file following the corresponding schemas, and provide the requested data
4. When modifying, the `chain.json` file:
    - Be sure to include `bech32_prefix`
      - Note: CosmosSDK Chain addresses can be represented with a chain-specific string preceding a hash, which helps identify to which chain an address belongs. They are registered on [SLIP173](https://github.com/satoshilabs/slips/blob/master/slip-0173.md)
      - e.g., `"bech32_prefix": "cosmos",`
      - See: [How to register a bech32 prefix onto SLIP173](...)
    - Be sure to include `slip44` (coin type)
      - Note: 118 represents the Cosmos Hub's ATOM token, registered listed in [SLIP44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md); many porjects also default to this coin type when they haven't registered their own.
      - e.g., `"slip44": 118,`
    - Be sure to include at least one RPC and one REST under `apis`
    - For explorers, opt for Mintscan, if available
5. When modifying, the `assetlists.json` file:
    - The `name` of an asset refers to how the asset should be called in persoanl communication, while `symbol` is like a stock ticker, typically in ALL CAPS, and these values may differ.
      - e.g., `"name": graviton, "display": "graviton", "symbol": "GRAV"`
    - Be sure to include the CoinGecko ID for each asset where one exists
      - Refer to the latest [CoinGecko Coins List](https://api.coingecko.com/api/v3/coins/list)
      - See: [How to enlist assets onto CoinGecko](...)


## How to register onto Assetlists

### Prerequisites
- Registered onto chain registry [How to register onto the Cosmos Chain Registry](...)
- Registered to slip173 (How to...)

### Requirements

- gas prices
- bech32 prefix
- coin type (slip44 -- can use 118 (Cosmos coin type))
- Token Image files (.png and .svg)
  - Currently, at .png is required to be able to render on info.osmosis.zone, but provide only an .svg can suffice

### Steps

- add images
- update file following schema
- Submit PR
