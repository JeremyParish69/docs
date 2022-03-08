# Osmosis Zone Front-End

## How to Add an Asset onto the Osmosis Assets Page

### Purpose

Add assets [to the Osmosis frontend repo](https://github.com/osmosis-labs/osmosis-frontend) to have the Asset appear on the [Assets page of osmosis.zone](https://app.osmosis.zone/assets) 
![image](https://user-images.githubusercontent.com/95667791/155814828-64d5f650-f0cf-4dd2-8d81-48353ef4e3cb.png)
![image](https://user-images.githubusercontent.com/95667791/155814848-99785446-c0ef-48d9-9926-20c277d17d6e.png)

### Prerequisites

- Chain and Asset registered onto the Cosmos Chain Registry
    - See: [How to register onto the Cosmos Chain Registry](...)
- Asset registered onto the Osmosis Assetlists Registry
    - See: [How to register an Asset onto the Osmosis Assetlists Registry](...)
- Chain registered onto SLIP173
    - See: [How to Registrer onto SLIP173](...)
- Multiple relayers set up to relay packets between chains
    - See: [How to set up a Relayer](...)
    - Don't want to set up a Relayer? See: [Shop for a Relayer as a Service (RAAS) Provider](...) 
- IBC token transfer has been validated
	- See: [How to validate IBC token transfers](...)
- Chain has a block explorer, either:
	- Mintscan (preferred)
		- See: [How to add a chain to Mintscan](...), or
    - Any other Block explorer, e.g., Big Dipper, Pings, or a chain-dedicated explorer
- Assets listed on CoinGecko (optional)
    - See: [How to enlist assets onto CoinGecko](...)
- An acceptable OSMO pool added to the Osmosis Trade page (co-requisite)
    - See: [How to Add a Pool to the Osmosis Trade Page](...)
- Asset price oracle added to Osmosis Zone (co-requisite)
    - See: [How to Specify Asset Price Oracle on Osmosis Zone (CoinGecko)](...)
    - See: [How to Specify Asset Price Oracle on Osmosis Zone (Liquidity Pool)](...)

### Requirements

- Chain data:
    - chain id
    - RCP and REST APIs
    - Coin type (slip44)
        - e.g., `coinType: 118,`
    - bech32 prefix
    - Cosmos SDK version
    	- Used to determine which 'features' must be specified
    - Gas prices
        - The low, average, and high gas prices so users can either save on fees or expedite transactions using Keplr wallet
- Asset data:
    - Token Logo Image files (both .png and .svg is recommended)
        - Note: Currently, a .png is required to be able to render on info.osmosis.zone
        - Note: image files shall be title exactly with the token Symbol in lowercase. E.g., for 'ATOM', title the files `atom.png` and `atom.svg`
    - coin minimal denomination
        - For CW20 tokens:
            - The minimal denomination is `cw20:<CONTRACT ADDRESS>`
            - Include the ICS20 Contract Address
       - For assets foreign to the registering chain:
                - The minimal denomination is the 'ibc/...' denom on the registering chain
                - Include the entire IBC Transfer Path with the original denomination
    - Designate IBC Connection details:
        - Source channel (Osmosis' channel to the registering chain)
        - Destination channel (Registering chain's channel to Osmosis)
    - Asset Price Oracle (optional), either:
    	- CoinGecko ID (optional, but should be included if and when one exists)
    		- Refer to the latest [CoinGecko Coins List](https://api.coingecko.com/api/v3/coins/list), or
        - `pool:<coin minimal denomination>` (default alternative, if no CoinGecko ID exists yet)
        	- The alternatives should only be used if there is an acceptable pool with the new asset  
- Basic understanding of GitHub, knowing how to fork, create a branch, commit changes, and submit a Pull Request

### Steps

1. Review the [Osmosis Frontend Repo](https://github.com/osmosis-labs/osmosis-frontend) docs:
    1. [README.md](https://github.com/osmosis-labs/osmosis-frontend/blob/master/README.md)
2. Submit a pull request branch with necessary changes to the following:
    - `public/assets/tokens/`:
        - Add token logo images
    - `src/config.ts`:
        - Add Assets to `IBCAssetInfos`
            - See examples below
        - Add Chains to `EmbedChainInfos: ChainInfoWithExplorer`
            - Include the optimal RPC and REST APIs
            - Be sure to include coin type
            - Be sure to include bech32 prefix
            - Be sure to include stake, fee, and other currencies
                - For each currency, be sure to include the Asset Price Oracle as `CoinGeckoID:`
                	- opt for a real CoinGecko ID, if one exists
                	- otherwise, use `pool:<coin minimal denom>`
            - Include features
            		- 'stargate' -- must be specified if using Cosmos SDK v0.40+
    			- 'ibc-transfer' -- must be specified if IBC transfers following the ICS20 standard have been enabled on the chain
    			- 'no-legacy-stdTx' -- must be specified if using Cosmos SDK v0.43+, but still recommended to specify, regardless of Cosmos SDK version
    			- 'ibc-go' -- must be specified if using Cosmos SDK v0.43+, and import the ibc-go repository
    			- E.g., `features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],`
            - Include gas price step
            - Include chain explorer path
                - Opt for Mintscan, if available
                - Note: watch out for and remove any dollar sign ($) in the URL, which may be included in the Explorer URL in the Cosmos Chain Registry
	    - See examples below
3. Validate the deposit and withdrawal of the asset(s) from the generated Cloudflare staging link

### Examples

Examples of config.ts::IBCAssetInfos:
-  ATOM, a native token from Cosmos Hub:
```
    {
        counterpartyChainId: 'cosmoshub-4',
        sourceChannelId: 'channel-0',
        destChannelId: 'channel-141',
        coinMinimalDenom: 'uatom',
    },
```
- NETA, a CW20 token from Juno:
    - Note: channel-42 is Osmosis' channel to Juno for native Juno assets, but channel-169 is Osmosis' channel to this ICS20 contract on Juno, which currently accomodates NETA, and potentially other CW20 tokens in the future 
```
    {
        counterpartyChainId: 'juno-1',
        sourceChannelId: 'channel-169',
        destChannelId: 'channel-47',
        coinMinimalDenom: 'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr',
        ics20ContractAddress: 'juno1v4887y83d6g28puzvt8cl0f3cdhd3y6y9mpysnsp3k8krdm7l6jqgm0rkn',
    },
```
- PSTAKE, an ICS20 token originating from Gravity Bridge chain, transfered through Persistence chain, and finally coming to Osmosis (i.e., not directly to Osmosis from Gravity Bridge):
    - Note: *channel-38* is Persistence chain's channel to Gravity bridge
    - Note: *gravity0xfB5...006* is Gravity Chain's denomination of PSTAKE (originally from Ethereum)
```
    {
        counterpartyChainId: 'core-1',
        sourceChannelId: 'channel-4',
        destChannelId: 'channel-6',
        coinMinimalDenom: 'ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444',
        ibcTransferPathDenom: 'transfer/channel-38/gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
    },
```

Examples of config.ts::EmbedChainInfos: ChainInfoWithExplorer:
```
	{
		rpc: 'https://gravitychain.io:26657',
		rest: 'https://gravitychain.io:1317',
		chainId: 'gravity-bridge-3',
		chainName: 'Gravity Bridge',
		stakeCurrency: {
			coinDenom: 'GRAV',
			coinMinimalDenom: 'ugraviton',
			coinDecimals: 6,
			coinGeckoId: 'pool:ugraviton',
			coinImageUrl: window.location.origin + '/public/assets/tokens/grav.svg',
		},
		bip44: {
			coinType: 118,
		},
		bech32Config: Bech32Address.defaultBech32Config('gravity'),
		currencies: [
			{
				coinDenom: 'GRAV',
				coinMinimalDenom: 'ugraviton',
				coinDecimals: 6,
				coinGeckoId: 'pool:ugraviton',
				coinImageUrl: window.location.origin + '/public/assets/tokens/grav.svg',
			},
			{
				coinDenom: 'PSTAKE',
				coinMinimalDenom: 'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006',
				coinDecimals: 18,
				// coinGeckoId: 'pstake',
				coinImageUrl: window.location.origin + '/public/assets/tokens/pstake.png',
			},
		],
		feeCurrencies: [
			{
				coinDenom: 'GRAV',
				coinMinimalDenom: 'ugraviton',
				coinDecimals: 6,
				coinGeckoId: 'pool:ugraviton',
				coinImageUrl: window.location.origin + '/public/assets/tokens/grav.svg',
			},
		],
		gasPriceStep: {
			low: 0,
			average: 0,
			high: 0.035,
		},
		features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx', 'ibc-go'],
		explorerUrlToTx: 'https://www.mintscan.io/gravity-bridge/txs/{txHash}',
	},
```

### Next Steps

- See also:
	- [How to Add Asset Price to Osmosis Zone](...)
	- [How to Add a Pool to the Osmosis Trade Page](...)


## How to Add a Pool to the Osmosis Trade Page

### Purpose

The Osmosis Zone Trade page router looks at a limited set of pools to choose the 'best' pool based on which pool or route offers the best spot price at $0 trade value. It does not change take slippage or swap fee into account when routing, so it's important to only include pools with a reasonably low swap fee (usually 0.2-0.3%), and high liquiditiy. If the liquidity is low, then high value trades could face extremely high slippage, even though low slippage routes exist.

For example, Pool 562 LUNA/UST has high liquidity, but also incurs 0.535% swap fee. Meanwhile, an alternative multihop route also exists; pools 560 OSMO/UST and 561 OSMO/LUNA also have high liquidity, and both have only 0.2% swap fee. Because the multihop with (0.2% + 0.2% = )0.4% total swap fee incurs a lower swap fee than Pool 562 (at 0.535%), the multihop is preferred. Only in extreme cases would the slippage through the multihop be higher, and so in virtually every case, the multihop will offer thae better deal to the trader. Therefore, we do not include Pool 562 on the Trade page.   

### Prerequisites

- Pool has been created
	- See: [How to create a Liquidity Pool](...)
- Pool is acceptable
	- The criteria for 'acceptable' pools are *roughly* as follows:
		- Contains only 2 tokens
		- Contains a common Base Asset (i.e., OSMO, ATOM, or UST)
		- 50/50 weighting
		- 0% exit fee
		- No future governor (set to blank (""))
		- 0.2-0.3% swap fee
		- Sufficient liquidity (at least USD $1000-worth)
- All assets in pool have been added to the Osmosis Assets page
	- See: [How to Add Assets onto the Osmosis Assets Page](...)
- Basic understanding of GitHub, knowing how to fork, create a branch, commit changes, and submit a Pull Request

### Requirements

- Pool details:
	- Pool number
	- Pool assets
		- Asset minimal denomination
		- Asset IBC transfer path

### Steps

1. Review the [Osmosis Frontend Repo](https://github.com/osmosis-labs/osmosis-frontend) docs:
    1. [README.md](https://github.com/osmosis-labs/osmosis-frontend/blob/master/README.md)
2. Submit a pull request branch with necessary changes to the following:
	1. `src/stores/root.ts`:
		- Add asset pairs to `GammSwapManager`
			- Order doesn't matter
			- Note: for CW20 tokens, the minimal denomination is used. I.E., the original token contract is used, not the CW20-ICS20 contract 
			- Note: for IBC mutlihop tokens, all IBC transfer details are required
			- See examples below

### Examples

- Pool 1:
	- This pool will be considered by the router when trading between OSMO and ATOM
```
{
	poolId: '1',
	currencies: [
		{
			coinMinimalDenom: DenomHelper.ibcDenom([{ portId: 'transfer', channelId: 'channel-0' }], 'uatom'),
			coinDenom: 'ATOM',
			coinDecimals: 6,
		},
		{
			coinMinimalDenom: 'uosmo',
			coinDenom: 'OSMO',
			coinDecimals: 6,
		},
	],
},
```
- Pool 631:
	- This pool will be considered by the router when trading between OSMO and NETA, a foreign CW20 token
```
{
	poolId: '631',
	currencies: [
		{
			coinMinimalDenom: DenomHelper.ibcDenom(
				[{ portId: 'transfer', channelId: 'channel-169' }],
				'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr'
			),
			coinDenom: 'NETA',
			coinDecimals: 6,
		},
		{
			coinMinimalDenom: 'uosmo',
			coinDenom: 'OSMO',
			coinDecimals: 6,
		},
	],
},
```
- Pool 648:
	- This pool will be considered by the router when trading between OSMO and PSTAKE, an IBC-multihop token
```
{
	poolId: '648',
	currencies: [
		{
			coinMinimalDenom: DenomHelper.ibcDenom(
				[
					{ portId: 'transfer', channelId: 'channel-4' },
					{ portId: 'transfer', channelId: 'channel-38' },
				],
				'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
			),
			coinDenom: 'PSTAKE',
			coinDecimals: 18,
		},
		{
			coinMinimalDenom: 'uosmo',
			coinDenom: 'OSMO',
			coinDecimals: 6,
		},
	],
},
```

## How to Specify Asset Price Oracle on Osmosis Zone (Liquidity Pool)

### Purpose

This procedure will set up the default asset pricing mechanism for an asset to show its price throughout Osmosis Zone. If a CoinGecko Price feed exists, opt to use that instead (See: [How to Specify Asset Price Oracle on Osmosis Zone (CoinGecko)](...)). This pricing mechanism works by fetching the current spot price of the asset from a pool with an Asset of a known price. For exampe, we might not know the price of Foo coin directly, but we can assume it's price of, say, $2.oo by seeing that it's trading at 1 FOO per 2 UST in the FOO/UST pool.

### Pre-requisites

- Asset is in a Pool
	- See: [How to create a Liquidity Pool](...)
- Pool containing Asset is acceptable
	- The criteria for 'acceptable' pools are *roughly* as follows:
		- Contains only 2 tokens
		- Contains a common Base Asset (i.e., OSMO, ATOM, or UST)
		- 50/50 weighting
		- 0% exit fee
		- No future governor (set to blank (""))
		- 0.2-0.3% swap fee
		- Sufficient liquidity (at least USD $1000-worth)

### Requirements

- Pool details
	- Number (Pool ID)
	- Assets
		- coin minimal denomination
		- source channel(s) (if Asset is foreign)
- Basic understanding of GitHub, knowing how to fork, create a branch, commit changes, and submit a Pull Request

### Steps

1. Review the [Osmosis Frontend Repo](https://github.com/osmosis-labs/osmosis-frontend) docs:
    1. [README.md](https://github.com/osmosis-labs/osmosis-frontend/blob/master/README.md)
2. Submit a pull request branch with necessary changes to the following:
	- `src/stores/root.ts`
		- Specify pool under `RootStore::constructor::priceStore::queriesStore`
			- `alternativeCoinId: 'pool:<minimal coin denom>'`
			- `poolID: '<pool number>',`
			- `spotPriceSourceDenom: <asset of known price::coin minimal denomination>`
			- `spotPriceDestDenom: <asset of unknown price::coin minimal denomination>`
			- `destCoinId: 'osmosis'`
			- See examples below
	- `src/config.ts`
		- Add the alternative coin Id under each specification of the Asset within `EmbedChainInfos: ChainInfoWithExplorer`
			- E.g., `coinGeckoId: 'pool:ugraviton'`
			- Note that many assets are listed as a staking currency, a fee payment currency, and as a trading currency for a chain; the coin Id should be added to each listing of the asset
			- See example below

### Examples

- Pool 1:
```
{
	alternativeCoinId: 'pool:uosmo',
	poolId: '1',
	spotPriceSourceDenom: 'uosmo',
	spotPriceDestDenom: DenomHelper.ibcDenom([{ portId: 'transfer', channelId: 'channel-0' }], 'uatom'),
	destCoinId: 'cosmos',
},
```
- Pool 631:
	- This pool contains a foreign CW20 token. Note how `cw20:` prefixes the contract address.
```
{
	alternativeCoinId: 'pool:neta',
	poolId: '631',
	spotPriceSourceDenom: DenomHelper.ibcDenom(
		[{ portId: 'transfer', channelId: 'channel-169' }],
		'cw20:juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr'
	),
	spotPriceDestDenom: 'uosmo',
	destCoinId: 'osmosis',
},
```
- Pool 648:
	- This pool contains an IBC-multihop token. Note how all transfer paths are included.
```
{
	alternativeCoinId: 'pool:pstake',
	poolId: '648',
	spotPriceSourceDenom: DenomHelper.ibcDenom(
		[
			{ portId: 'transfer', channelId: 'channel-4' },
			{ portId: 'transfer', channelId: 'channel-38' },
		],
		'gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006'
	),
	spotPriceDestDenom: 'uosmo',
	destCoinId: 'osmosis',
},
```

Example of config.ts::EmbedChainInfos: ChainInfoWithExplorer:
- Umee chain info:
	- Note that `coinGeckoId: 'pool:uumee',` is specified three times, once under each listing of the currency
```
{
	rpc: 'https://rpc.aphrodite.main.network.umee.cc',
	rest: 'https://api.aphrodite.main.network.umee.cc',
	chainId: 'umee-1',
	chainName: 'Umee',
	stakeCurrency: {
		coinDenom: 'UMEE',
		coinMinimalDenom: 'uumee',
		coinDecimals: 6,
		coinGeckoId: 'pool:uumee',
		coinImageUrl: window.location.origin + '/public/assets/tokens/umee.png',
	},
	bip44: {
		coinType: 118,
	},
	bech32Config: Bech32Address.defaultBech32Config('umee'),
	currencies: [
		{
			coinDenom: 'UMEE',
			coinMinimalDenom: 'uumee',
			coinDecimals: 6,
			coinGeckoId: 'pool:uumee',
			coinImageUrl: window.location.origin + '/public/assets/tokens/umee.png',
		},
	],
	feeCurrencies: [
		{
			coinDenom: 'UMEE',
			coinMinimalDenom: 'uumee',
			coinDecimals: 6,
			coinGeckoId: 'pool:uumee',
			coinImageUrl: window.location.origin + '/public/assets/tokens/umee.png',
		},
	],
	features: ['stargate', 'ibc-transfer', 'no-legacy-stdTx'],
	explorerUrlToTx: 'https://www.mintscan.io/umee/txs/{txHash}',
},
```


## How to Specify Asset Price Oracle on Osmosis Zone (CoinGecko)

### Purpose

This procedure will update the price oracle for the asset to instead use it's CoinGecko value for display on Osmosis Zone. This is preferred over the default price oracle mechanism. If there no CoinGecko price feed for the asset, we can still use the alternative method (See: [How to Specify Asset Price Oracle on Osmosis Zone (Liquidity Pool)](...)).





## How to Add External Incentive Gauges onto the Osmosis Pools Page
