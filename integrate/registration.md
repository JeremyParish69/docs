# Registration

## How to register a chain onto Cosmos Chain Registry

### Prerequisites
### Requirements

1. Chain Details
2. Asset Details

### Steps

1. Review the [Cosmos Chain Registry](https://github.com/cosmos/chain-registry) docs
  1. [README.md](https://github.com/cosmos/chain-registry/blob/master/README.md)
  2. [chain.schema.json](https://github.com/cosmos/chain-registry/blob/master/chain.schema.json)
  3. [assetlists.schema.json](https://github.com/cosmos/chain-registry/blob/master/assetlist.schema.json)
2. Draft a new file, or modify a copied template, of chain.json to reflect the information for the joining zone
  - Don't forget slip44 coin type
  - Be sure to include at least one RPC and one REST under `API`
  - For explorers, opt for Mintscan, if available
3. Commit to working branch

## How to register onto Assetlists

### Prerequisites
-registered onto chain registry (How to register onto Cosmos Chain Registry)
-registered to slip173 (How to...)

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
