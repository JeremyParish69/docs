# Registration

## How to Register onto the Cosmos Chain Registry

### Purpose

The Cosmos Chain Registry is used as a single source of truth and is used to look up chain and asset data

### Prerequisites

- Registered to [SLIP173](https://github.com/satoshilabs/slips/blob/master/slip-0173.md)
    - See: [How to register a bech32 prefix onto SLIP173](...)
- Registered to [SLIP44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md) (if coin type is not like ATOM)
    - Note: Coin Type 118 represents the Cosmos Hub's ATOM token, registered listed in [SLIP44](https://github.com/satoshilabs/slips/blob/master/slip-0044.md); many projects also default to using this coin type, while some have registered their own.
- Assets listed on CoinGecko (optional)
    - See: [How to enlist assets onto CoinGecko](...)
- Chain added to Mintscan (optional)
    - See: [How to add a chain to Mintscan](...)

### Requirements

- Chain data--metadata, locations, network addresses, etc.
- Asset data--metadata, such as name, symbol, minimal denomination, decimal precision, etc.
    - CoinGecko ID
        - Refer to the latest [CoinGecko Coins List](https://api.coingecko.com/api/v3/coins/list)
- Basic understanding of GitHub, knowing how to fork a repository, create a branch, commit changes, and submit a Pull Request

### Steps

1. Review the [Cosmos Chain Registry](https://github.com/cosmos/chain-registry) docs:
    1. [README.md](https://github.com/cosmos/chain-registry/blob/master/README.md)
    2. [chain.schema.json](https://github.com/cosmos/chain-registry/blob/master/chain.schema.json)
    3. [assetlist.schema.json](https://github.com/cosmos/chain-registry/blob/master/assetlist.schema.json)
    - Note: It is recommended to refer to another registration to serve as an example, such as [Osmosis' registration](https://github.com/cosmos/chain-registry/blob/master/osmosis/chain.json)
2. Submit a pull request with necessary changes to the following:
    - `chain.json`:
        - Be sure to include `bech32_prefix`
            - e.g., `"bech32_prefix": "cosmos",`
        - Be sure to include `slip44` (coin type)
            - e.g., `"slip44": 118,`
        - Be sure to include at least one RPC and one REST under `apis`
        - For explorers, opt for Mintscan, if available
    - `assetlists.json`:
        - The `name` of an asset refers to how the asset should be called in persoanl communication, while `symbol` is like a stock ticker, typically in ALL CAPS, and these values may differ.
            - e.g., `"name": graviton, "display": "graviton", "symbol": "GRAV"`
        - Be sure to include the CoinGecko ID for each asset where one exists
            - e.g., `"coingecko_id": "cosmos"`


## How to Register an Asset onto the Osmosis Assetlists Registry

### Purpose

The Osmosis Assetlists Registry is used as a local source of truth for assets displayed on Osmosis' front end.

### Prerequisites

- Registered onto the Cosmos Chain Registry
    - See: [How to register onto the Cosmos Chain Registry](...)
- Opened IBC connection between the source chain and Osmosis
    - Selected a sole desigate IBC connection between the registering chain and Osmosis for this asset
        - All native assets from a chain should go through a single connection, but CW20 tokens can be sent through another connection  
- Assets listed on CoinGecko (optional)
    - See: [How to enlist assets onto CoinGecko](...)

### Requirements

- Designate IBC Connection details:
    - Source channel (Osmosis' channel to the registering chain)
    - Destination channel (Registering chain's channel to Osmosis)
- Asset data:
    - IBC denomination (when the asset is transferred to Osmosis, the base denomination looks like "ibc/...")
        - E.g., For ATOM: `"base": "ibc/27394FB092D2ECCD56123C74F36E4C1F926001CEADA9CA97EA622B25F41E5EB2",`
    - Name, symbol, exponent, etc.
    - CoinGecko ID (optional, but should be included if and when there is one)
        - Refer to the latest [CoinGecko Coins List](https://api.coingecko.com/api/v3/coins/list)
- Token Logo Image files (both .png and .svg is recommended)
    - Note: Currently, a .png is required to be able to render on [info.osmosis.zone](info.osmosis.zone)
- Basic understanding of GitHub, knowing how to fork a respository, create a branch, commit changes, and submit a Pull Request

### Steps

1. Review the [Osmosis Assetlists Registry](https://github.com/osmosis-labs/assetlists) docs:
    1. [README.md](https://github.com/osmosis-labs/assetlists/blob/main/README.md)
    2. [assetlist.schema.json](https://github.com/osmosis-labs/assetlists/blob/main/assetlist.schema.json)
2. Submit a pull request with necessary changes to the following:
    - `osmosis-1/osmosis-1.assetlist.json`:
        - Be sure to include the CoinGecko ID if one exists
    - `images/`
        - Add token logo images


## How to Register a bech32 Prefix onto SLIP173

### Purpose

CosmosSDK Chain addresses can be represented with a chain-specific string preceding a hash, which helps identify to which chain an address belongs. They are registered on [SLIP173](https://github.com/satoshilabs/slips/blob/master/slip-0173.md)

### Prerequisites

- Chain configured to use bech32 prefixes in wallet addresses
    - Note: A bech32 prefix may still be registered, even before the chain is configured to use the prefixes, but only if the configuration will happen soon.

### Requirements

- Chain data:
    - Chain name
    - Chain website
    - bech32 prefix(es)
        - Mainnet
        - Testnet (optional)
        - Regtest (optional)
        - Note: The bech32 prefix must be unique among all registered prefixes. E.g., a new mainnet prefix cannot match a prefix already registered as a testnet prefix.
- Basic understanding of GitHub, knowing how to fork, create a branch, commit changes, and submit a Pull Request

### Steps

1. Review the [SLIP173 Registry](https://github.com/satoshilabs/slips/blob/master/slip-0173.md):
2. Submit a pull request with necessary changes to the following:
    - `slip-0173.md`:
        - Add the chain name (as a link to the website) and prefix(es) into the *Registered human-readable parts* table
