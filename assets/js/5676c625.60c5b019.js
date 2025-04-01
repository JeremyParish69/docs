"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[643],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(i),m=o,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return i?n.createElement(h,s(s({ref:t},p),{},{components:i})):n.createElement(h,s({ref:t},p))}));function m(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,s=new Array(a);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var d=2;d<a;d++)s[d]=i[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},63632:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=i(87462),o=(i(67294),i(3905));const a={sidebar_position:3},s="Concentrated Liquidity Integration",r={unversionedId:"integrate/on-chain",id:"integrate/on-chain",title:"Concentrated Liquidity Integration",description:"Concentrated liquidity is a novel Automated Market Maker (AMM) design introduced by Uniswap that allows for more efficient use of capital. The improvement is achieved by providing liquidity in specific price ranges chosen by the user.",source:"@site/docs/overview/integrate/on-chain.md",sourceDirName:"integrate",slug:"/integrate/on-chain",permalink:"/overview/integrate/on-chain",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/overview/integrate/on-chain.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Airdrop Distribution",permalink:"/overview/integrate/airdrops"},next:{title:"Connect with Osmosis",permalink:"/overview/integrate/transfer"}},l={},d=[{value:"JS Client - (OsmoJS)",id:"js-client---osmojs",level:2},{value:"CosmWasm - (<code>osmosis-std</code>)",id:"cosmwasm---osmosis-std",level:2},{value:"Install <code>osmosis-std</code>",id:"install-osmosis-std",level:3},{value:"Usage",id:"usage",level:3},{value:"<code>MsgCreatePosition</code>",id:"msgcreateposition",level:3},{value:"<code>MsgWithdrawPosition</code>",id:"msgwithdrawposition",level:3},{value:"<code>MsgCreatePool</code>",id:"msgcreatepool",level:3},{value:"<code>MsgCollectSpreadRewards</code>",id:"msgcollectspreadrewards",level:3},{value:"<code>MsgFungifyChargedPositions</code>",id:"msgfungifychargedpositions",level:3},{value:"Incentive Creation and Querying",id:"incentive-creation-and-querying",level:2},{value:"Reward Splitting Between Classic and CL pools",id:"reward-splitting-between-classic-and-cl-pools",level:2},{value:"<code>AfterConcentratedPoolCreated</code>",id:"afterconcentratedpoolcreated",level:2},{value:"<code>AfterInitialPoolPositionCreated</code>",id:"afterinitialpoolpositioncreated",level:2},{value:"<code>AfterLastPoolPositionRemoved</code>",id:"afterlastpoolpositionremoved",level:2},{value:"<code>AfterConcentratedPoolSwap</code>",id:"afterconcentratedpoolswap",level:2},{value:"State entries and KV store management",id:"state-entries-and-kv-store-management",level:2},{value:"External Sources",id:"external-sources",level:2}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concentrated-liquidity-integration"},"Concentrated Liquidity Integration"),(0,o.kt)("p",null,"Concentrated liquidity is a novel Automated Market Maker (AMM) design introduced by Uniswap that allows for more efficient use of capital. The improvement is achieved by providing liquidity in specific price ranges chosen by the user."),(0,o.kt)("p",null,"For instance, a pool with stablecoin pairs like USDC/USDT has a spot price that should always be trading near 1. As a result, Liquidity Providers (LPs) can focus their capital in a small range around 1, rather than the full range from 0 to infinity. This approach leads to an average of 200-300x higher capital efficiency. Moreover, traders benefit from lower price impact because the pool incentivizes greater depth around the current price."),(0,o.kt)("p",null,"Concentrated liquidity also opens up new opportunities for providing liquidity rewards to desired strategies. For example, it's possible to incentivize LPs based on their position's proximity to the current price and the time spent within that position. This design also allows for a new \"range order\" type, similar to a limit order with order-books."),(0,o.kt)("p",null,"The following information is meant to provide Vaul Creators with all the information needed to interact and develop concentrated liquidity vaults. "),(0,o.kt)("h1",{id:"index"},"Index"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#On-chain-Vault-Creators"},"Concentrated liquidity for On-chain Vault Creators")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#clients"},"Clients"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#js-client---osmojs"},"JS Client - (OsmoJS)"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#install-osmojs"},"Install OsmoJS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#start-client"},"Start Client")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#CosmWasm---osmosis-std"},"CosmWasm - (",(0,o.kt)("inlineCode",{parentName:"a"},"osmosis-std"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#hummingbot-client"},"Hummingbot client")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#concentrated-liquidity-module-messages"},"Concentrated Liquidity Module Messages"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#msgcreateposition"},"MsgCreatePosition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#msgwithdrawposition"},"MsgWithdrawPosition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#msgcreatepool"},"MsgCreatePool")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#msgcollectspreadrewards"},"MsgCollectSpreadRewards")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#msgfungifychargedpositions"},"MsgFungifyChargedPositions")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#incentives"},"Incentives"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#incentive-creation-and-querying"},"Incentive Creation and Querying")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#reward-splitting-between-classic-and-cl-pools"},"Reward Splitting Between Classic and CL Pools")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#parameters"},"Parameters")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#listeners"},"Listeners"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#afterconcentratedpoolcreated"},"AfterConcentratedPoolCreated")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#afterinitialpoolpositioncreated"},"AfterInitialPoolPositionCreated")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#afterlastpoolpositionremoved"},"AfterLastPoolPositionRemoved")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#afterconcentratedpoolswap"},"AfterConcentratedPoolSwap")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#state-entries-and-kv-store-management"},"State Entries and KV Store Management")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#terminology"},"Terminology")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#twap-integration"},"TWAP Integration")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#external-sources"},"External Sources"))),(0,o.kt)("h1",{id:"clients"},"Clients"),(0,o.kt)("p",null,"The following clients are available to interact with the Concentrated liquidity modules in Osmosis."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#js-client---osmojs"},"JS Client - (OsmoJS)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#osmosis-rust-client-cosmwasm"},"Osmosis-rust Client (Cosmwasm)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#hummingbot-client"},"Hummingbot client"))),(0,o.kt)("h2",{id:"js-client---osmojs"},"JS Client - (OsmoJS)"),(0,o.kt)("p",null,"Concentrated liquidity is available on the OsmoJS package. For more information please visit: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmojs"},"https://github.com/osmosis-labs/osmojs")),(0,o.kt)("h2",{id:"cosmwasm---osmosis-std"},"CosmWasm - (",(0,o.kt)("inlineCode",{parentName:"h2"},"osmosis-std"),")"),(0,o.kt)("p",null,"Concentrated liquidity types and querier are available on ",(0,o.kt)("a",{parentName:"p",href:"https://crates.io/crates/osmosis-std/"},(0,o.kt)("inlineCode",{parentName:"a"},"osmosis-std")," create.")),(0,o.kt)("h3",{id:"install-osmosis-std"},"Install ",(0,o.kt)("inlineCode",{parentName:"h3"},"osmosis-std")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo add osmosis-std\n")),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("p",null,"The following is an example of how you might use types and querier in your CosmWasm contract, for more info, see the crate's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/osmosis-std/latest/osmosis_std/types/osmosis/concentratedliquidity/index.html"},"doc.rs"),"."),(0,o.kt)("p",null,"Note that queries are only available if they are ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis/blob/main/wasmbinding/stargate_whitelist.go"},"whitelisted here"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rs"},'use osmosis_std::types::osmosis::concentratedliquidity::v1beta1 as cl;\n\n\n/// Create a copied position where owner of the position is this contract\n/// and as desired amount might not be met, token_min_amount0 and token_min_amount1 are required\nfn copy_position(\n    deps: DepsMut,\n    env: Env,\n    position_id: u64,\n    token_min_amount0: Uint128,\n    token_min_amount1: Uint128,\n) -> Result<Response, ContractError> {\n    // construct concentrated liquidity querier\n    let cl_querier = cl::ConcentratedliquidityQuerier::new(&deps.querier);\n\n    // query position by id\n    let cl::QueryPositionByIdResponse { position } = cl_querier.position_by_id(position_id)?;\n    let position_with_breakdown =\n        position.ok_or_else(|| StdError::not_found("Position with breakdown"))?;\n\n    let position = position_with_breakdown\n        .position\n        .ok_or_else(|| StdError::not_found("Position"))?;\n\n    // create position with the same parameters\n    let msg_create_position = cl::MsgCreatePosition {\n        pool_id: position.pool_id,\n        sender: env.contract.address.to_string(),\n        lower_tick: position.lower_tick,\n        upper_tick: position.upper_tick,\n        token_desired0: position_with_breakdown.asset0,\n        token_desired1: position_with_breakdown.asset1,\n        token_min_amount0: token_min_amount0.to_string(),\n        token_min_amount1: token_min_amount1.to_string(),\n    };\n\n    Ok(Response::new()\n        .add_message(msg_create_position)\n        .add_attribute("method", "copy_position")\n        .add_attribute("position_id", position_id.to_string())\n        .add_attribute("token_min_amount0", token_min_amount0.to_string())\n        .add_attribute("token_min_amount1", token_min_amount1.to_string()))\n}\n')),(0,o.kt)("h1",{id:"concentrated-liquidity-module-messages"},"Concentrated Liquidity Module Messages"),(0,o.kt)("h3",{id:"msgcreateposition"},(0,o.kt)("inlineCode",{parentName:"h3"},"MsgCreatePosition")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Request"))),(0,o.kt)("p",null,"This message allows LPs to provide liquidity between ",(0,o.kt)("inlineCode",{parentName:"p"},"LowerTick")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"UpperTick"),"\nin a given ",(0,o.kt)("inlineCode",{parentName:"p"},"PoolId"),". The user provides the amount of each token desired. Since\nLPs are only allowed to provide liquidity proportional to the existing reserves,\nthe actual amount of tokens used might differ from requested. As a result, LPs\nmay also provide the minimum amount of each token to be used so that the system fails\nto create position if the desired amounts cannot be satisfied."),(0,o.kt)("p",null,"Three KV stores are initialized when a position is created:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Position ID -> Position")," - This is a mapping from a unique position ID to a\nposition object. The position ID is a monotonically increasing integer that is\nincremented every time a new position is created."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Owner | Pool ID | Position ID -> Position ID")," - This is a mapping from a\ncomposite key of the owner address, pool ID, and position ID to the position ID.\nThis is used to keep track of all positions owned by a given owner in a given pool."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Pool ID -> Position ID")," - This is a mapping from a pool ID to a position ID.\nThis is used to keep track of all positions in a given pool.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type MsgCreatePosition struct {\n PoolId          uint64\n Sender          string\n LowerTick       int64\n UpperTick       int64\n TokenDesired0   types.Coin\n TokenDesired1   types.Coin\n TokenMinAmount0 github_com_cosmos_cosmos_sdk_types.Int\n TokenMinAmount1 github_com_cosmos_cosmos_sdk_types.Int\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Response"))),(0,o.kt)("p",null,"On successful response, we receive the actual amounts of each token used to\ncreate the liquidityCreated number of shares in the given range."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type MsgCreatePositionResponse struct {\n PositionId  uint64\n Amount0 github_com_cosmos_cosmos_sdk_types.Int\n Amount1 github_com_cosmos_cosmos_sdk_types.Int\n JoinTime google.protobuf.Timestamp\n LiquidityCreated github_com_cosmos_cosmos_sdk_types.Dec\n\n}\n")),(0,o.kt)("p",null,"This message should call the ",(0,o.kt)("inlineCode",{parentName:"p"},"createPosition")," keeper method that is introduced\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},'"Liquidity Provision"')," section of this document."),(0,o.kt)("h3",{id:"msgwithdrawposition"},(0,o.kt)("inlineCode",{parentName:"h3"},"MsgWithdrawPosition")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Request"))),(0,o.kt)("p",null,"This message allows LPs to withdraw their position via their position ID,\npotentially in partial amount of liquidity. It should fail if the position ID\ndoes not exist or if attempting to withdraw an amount higher than originally\nprovided. If an LP withdraws all of their liquidity from a position, then the\nposition is deleted from state along with the three KV stores that were\ninitialized in the ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgCreatePosition")," section. However, the spread factor accumulators\nassociated with the position are still retained until a user claims them manually."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type MsgWithdrawPosition struct {\n PositionId      uint64\n Sender          string\n LiquidityAmount github_com_cosmos_cosmos_sdk_types.Dec\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Response"))),(0,o.kt)("p",null,"On successful response, we receive the amounts of each token withdrawn\nfor the provided share liquidity amount."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type MsgWithdrawPositionResponse struct {\n Amount0 github_com_cosmos_cosmos_sdk_types.Int\n Amount1 github_com_cosmos_cosmos_sdk_types.Int\n}\n")),(0,o.kt)("p",null,"This message should call the ",(0,o.kt)("inlineCode",{parentName:"p"},"withdrawPosition")," keeper method that is introduced\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},'"Liquidity Provision"')," section of this document."),(0,o.kt)("h3",{id:"msgcreatepool"},(0,o.kt)("inlineCode",{parentName:"h3"},"MsgCreatePool")),(0,o.kt)("p",null,"This message is responsible for creating a concentrated-liquidity pool.\nIt propagates the execution flow to the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/poolmanager")," module for pool id\nmanagement and for routing swaps."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type MsgCreateConcentratedPool struct {\n Sender                    string\n Denom0                    string\n Denom1                    string\n TickSpacing               uint64\n SpreadFactor                   github_com_cosmos_cosmos_sdk_types.Dec\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Response"))),(0,o.kt)("p",null,"On successful response, the pool id is returned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type MsgCreateConcentratedPoolResponse struct {\n PoolID uint64\n}\n")),(0,o.kt)("h3",{id:"msgcollectspreadrewards"},(0,o.kt)("inlineCode",{parentName:"h3"},"MsgCollectSpreadRewards")),(0,o.kt)("p",null,"This message allows collecting rewards from spreads for multiple position IDs from a\nsingle owner."),(0,o.kt)("p",null,'The spread factor collection is discussed in more detail in the "Spread Rewards" section of this document.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type MsgCollectSpreadRewards struct {\n PositionIds    []uint64\n Sender         string\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Response"))),(0,o.kt)("p",null,"On successful response, the collected tokens are returned.\nThe sender should also see their balance increase by the returned\namounts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type MsgCollectSpreadRewardsResponse struct {\n CollectedSpreadRewards []types.Coin\n}\n")),(0,o.kt)("h3",{id:"msgfungifychargedpositions"},(0,o.kt)("inlineCode",{parentName:"h3"},"MsgFungifyChargedPositions")),(0,o.kt)("p",null,"This message allows fungifying the fully charged unlocked positions belonging to the same owner\nand located in the same tick range.\nMsgFungifyChargedPosition takes in a list of positionIds and combines them into a single position.\nIt validates that all positions belong to the same owner, are in the same ticks and are fully charged.\nFails if not. Otherwise, it creates a completely new position P. P's liquidity equals to the sum of all\nliquidities of positions given by positionIds. The uptime of the join time of the new position equals\nto current block time - max authorized uptime duration (to signify that it is fully charged).\nThe previous positions are deleted from state. Prior to deleting, the rewards are claimed.\nThe old position's unclaimed rewards are transferred to the new position.\nThe new position ID is returned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type MsgFungifyChargedPositions struct {\n PositionIds    []uint64\n Sender         string\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Response"))),(0,o.kt)("p",null,"On successful response, the new position id is returned."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"type MsgFungifyChargedPositionsResponse struct {\n NewPositionId uint64\n}\n")),(0,o.kt)("h1",{id:"incentives"},"Incentives"),(0,o.kt)("p",null,"At launch, Osmosis's CL incentives will primarily be in the format described ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis/blob/main/x/concentrated-liquidity/README.md"},"here"),' while we iron out a mechanism that achieves the remaining two properties predictably and effectively. As a piece of foreshadowing, the primary problem space we will be tackling is the following: status quo incentives advantage LPs who keep their liquidity off the books until a trade happens, ultimately pushing liquidity off of the DEX and creating ambiguity around the "real" liquidity depth. This forces traders to make uninformed decisions about where to trade their assets (or worse, accept worse execution on an inferior venue).'),(0,o.kt)("p",null,"In other words, instead of having incentives go towards bootstrapping healthy liquidity pools, they risk going towards adversely pushing volume to other exchanges at the cost of the DEX, active LPs, and ultimately traders."),(0,o.kt)("p",null,"Note on supported and authorized uptimes\nIf you dig through our incentives logic, you might find code dealing with notions of Supported Uptimes and Authorized Uptimes. These are for an uptime incentivization mechanism we are keeping off at launch while we refine a more sophisticated version. We leave the state-related parts in core logic to ensure that if we do decide to turn the feature on (even if just to experiment), it could be done by a simple governance proposal (to add more supported uptimes to the list of authorized uptimes) and not require a state migration for pools. At launch, only the 1ns uptime will be authorized, which is roughly equivalent to status quo CL incentives with the small difference that positions that are created and closed in the same block are not eligible for any incentives."),(0,o.kt)("p",null,"For the sake of clarity, this mechanism functions very similarly to status quo incentives, but it has a separate accumulator for each supported uptime and ensures that only liquidity that has been in the pool for the required amount of time qualifies for claiming incentives."),(0,o.kt)("h2",{id:"incentive-creation-and-querying"},"Incentive Creation and Querying"),(0,o.kt)("p",null,"While it is technically possible for Osmosis to enable the creation of incentive records directly in the CL module, incentive creation is currently funneled through existing gauge infrastructure in the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/incentives")," module. This simplifies UX drastically for frontends, external incentive creators, and governance, while making CL incentives fully backwards-compatible with incentive creation and querying flows that everyone is already used to. As of the initial version of Osmosis's CL, all incentive creation and querying logic will be handled by respective gauge functions (e.g. the ",(0,o.kt)("inlineCode",{parentName:"p"},"IncentivizedPools")," query in the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/incentives")," module will include CL pools that have internal incentives on them)."),(0,o.kt)("p",null,"To create a gauge dedicated to the concentrated liquidity pool, run a ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgCreateGauge")," message in the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/incentives")," module with the following parameter constraints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PoolId"),": The ID of the CL pool to create a gauge for."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DistrTo.LockQueryType")," must be set to ",(0,o.kt)("inlineCode",{parentName:"li"},"locktypes.LockQueryType.NoLock")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DistrTo.Denom")," must be an empty string.")),(0,o.kt)("p",null,"The rest of the parameters can be set according to the desired configuration of the gauge. Please read the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/incentives")," module documentation for more information on how to configure gauges."),(0,o.kt)("p",null,"Note, that the created gauge will start emitting at the first epoch after the given ",(0,o.kt)("inlineCode",{parentName:"p"},"StartTime"),". During the epoch, a ",(0,o.kt)("inlineCode",{parentName:"p"},"x/concentrated-liquidity"),"\nmodule ",(0,o.kt)("inlineCode",{parentName:"p"},"IncentiveRecord")," will be created for every denom in the gauge. This incentive record will be configured to emit all given incentives\nover the period of an epoch. If the gauge is non-perpetual (emits over several epochs), the distribution will be split evenly between the epochs.\nand a new ",(0,o.kt)("inlineCode",{parentName:"p"},"IncentiveRecord")," will be created for each denom every epoch with the emission rate and token set to finish emitting at the end of the epoch."),(0,o.kt)("h2",{id:"reward-splitting-between-classic-and-cl-pools"},"Reward Splitting Between Classic and CL pools"),(0,o.kt)("p",null,"While we want to nudge Classic pool LPs to transition to CL pools, we also want to ensure that we do not have a hard cutoff for incentives where past a certain point it is no longer worth it to provide liquidity to Classic pools. This is because we want to ensure that we have a healthy transition period where liquidity is not split between Classic and CL pools, but rather that liquidity is added to CL pools while Classic pools are slowly drained of liquidity."),(0,o.kt)("p",null,"To achieve this in a way that is difficult to game and efficient for the chain to process, we will be using a ",(0,o.kt)("strong",{parentName:"p"},"reward-splitting")," mechanism that treats ",(0,o.kt)("em",{parentName:"p"},"bonded")," liquidity in a Classic pool that is paired by governance to a CL pool (e.g. for the purpose of migration) as a single full-range position on the CL pool for the purpose of calculating incentives. Note that this ",(0,o.kt)("em",{parentName:"p"},"does not affect spread reward distribution")," and only applies to the flow of incentives through a CL pool."),(0,o.kt)("p",null,"One implication of this mechanism is that it moves the incentivization process to a higher level of abstraction (incentivizing ",(0,o.kt)("em",{parentName:"p"},"pairs")," instead of ",(0,o.kt)("em",{parentName:"p"},"pools"),"). For internal incentives (which are governance managed), this is in line with the goal of continuing to push governance to require less frequent actions, which this change ultimately does."),(0,o.kt)("p",null,"To keep a small but meaningful incentive for LPs to still migrate their positions, we have added a ",(0,o.kt)("strong",{parentName:"p"},"discount rate")," to incentives that are redirected to Classic pools. This is initialized to 5% by default but is a governance-upgradable parameter that can be increased in the future. A discount rate of 100% is functionally equivalent to all the incentives staying in the CL pool."),(0,o.kt)("h1",{id:"parameters"},"Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AuthorizedQuoteDenoms")," []string")),(0,o.kt)("p",null,"This is a list of quote denoms that can be used as token1 when creating a pool.\nWe limit the quote assets to a small set for the purposes of having convenient\nprice increments stemming from tick to price conversion. These increments are\nin a human readable magnitude only for token1 as a quote. For limit orders in\nthe future, this will be a desirable property in terms of UX as to allow users\nto set limit orders at prices in terms of token1 (quote asset) that are easy\nto reason about."),(0,o.kt)("p",null,"This goes in-hand with centralized exchanges that limit the quote asset set\nto only a few denoms."),(0,o.kt)("p",null,"Our list at launch is expected to consist of OSMO, DAI and USDC. These are set\nin the v16 upgrade handler."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"IsPermisionlessPoolCreationEnabled")," bool")),(0,o.kt)("p",null,"The flag indicating whether permissionless pool creation is enabled or not. For\nlaunch, we have decided to disable permissionless pool creation. It will still\nbe enabled via governance. This is because we want to limit the number of pools\nfor risk management and want to avoid fragmenting liquidity for major denom\npairs with configurations of tick spacing that are not ideal."),(0,o.kt)("h1",{id:"listeners"},"Listeners"),(0,o.kt)("h2",{id:"afterconcentratedpoolcreated"},(0,o.kt)("inlineCode",{parentName:"h2"},"AfterConcentratedPoolCreated")),(0,o.kt)("p",null,"This listener executes after the pool is created."),(0,o.kt)("p",null,"At the time of this writing, it is only utilized by the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/twap")," module.\nThe twap module is expected to create twap records where the last error time\nis set to the block time of when the pool was created. This is because there\nis no liquidity in the pool at creation time."),(0,o.kt)("h2",{id:"afterinitialpoolpositioncreated"},(0,o.kt)("inlineCode",{parentName:"h2"},"AfterInitialPoolPositionCreated")),(0,o.kt)("p",null,"This listener executes after the first position is created in a concentrated\nliquidity pool."),(0,o.kt)("p",null,"At the time of this writing, it is only utilized by the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/twap")," module."),(0,o.kt)("h2",{id:"afterlastpoolpositionremoved"},(0,o.kt)("inlineCode",{parentName:"h2"},"AfterLastPoolPositionRemoved")),(0,o.kt)("p",null,"This listener executes after the last position is removed in a concentrated\nliquidity pool."),(0,o.kt)("p",null,"At the time of this writing, it is only utilized by the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/twap")," module."),(0,o.kt)("h2",{id:"afterconcentratedpoolswap"},(0,o.kt)("inlineCode",{parentName:"h2"},"AfterConcentratedPoolSwap")),(0,o.kt)("p",null,"This listener executes after a swap in a concentrated liquidity pool."),(0,o.kt)("p",null,"At the time of this writing, it is only utilized by the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/twap")," module."),(0,o.kt)("h2",{id:"state-entries-and-kv-store-management"},"State entries and KV store management"),(0,o.kt)("p",null,"The following are the state entries (key and value pairs) stored for the concentrated liquidity module. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"structs",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"TickPrefix + pool ID + tickIndex \u279d Tick Info struct"),(0,o.kt)("li",{parentName:"ul"},"PoolPrefix + pool id \u279d pool struct"),(0,o.kt)("li",{parentName:"ul"},"IncentivePrefix | pool id | min uptime index | denom | addr \u279d Incentive Record body struct"))),(0,o.kt)("li",{parentName:"ul"},"links",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"positionToLockPrefix | position id \u279d lock id"),(0,o.kt)("li",{parentName:"ul"},"lockToPositionPrefix | lock id \u279d position id"),(0,o.kt)("li",{parentName:"ul"},"PositionPrefix | addr bytes | pool id | position id \u279d boolean"),(0,o.kt)("li",{parentName:"ul"},"PoolPositionPrefix | pool id | position id \u279d boolean")))),(0,o.kt)("p",null,"Note that for storing ticks, we use 9 bytes instead of directly using uint64, first byte being reserved for the Negative / Positive prefix, and the remaining 8 bytes being reserved for the tick itself, which is of uint64. Although we directly store signed integers as values, we use the first byte to indicate and re-arrange tick indexes from negative to positive."),(0,o.kt)("h1",{id:"terminology"},"Terminology"),(0,o.kt)("p",null,"We will use the following terms throughout the document and our codebase:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Tick")," - a unit that has a 1:1 mapping with price")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Bucket")," - an area between two initialized ticks.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Tick Range")," - a general term to describe a concept with lower and upper bound."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Position is defined on a tick range."),(0,o.kt)("li",{parentName:"ul"},"Bucket is defined on a tick range."),(0,o.kt)("li",{parentName:"ul"},"A trader performs a swap over a tick range."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Tick Spacing")," - the distance between two ticks that can be initialized. This is\nwhat defines the minimum bucket size."))),(0,o.kt)("p",null,"Note that ticks are defined inside buckets. Assume tick spacing is 100. A liquidity provider\ncreates a position with amounts such that the current tick is 155 between ticks 100 and 200."),(0,o.kt)("p",null,"Note, that the current tick of 155 is defined inside the bucket over a range of 100 to 200."),(0,o.kt)("h1",{id:"liquidity-depths-calculation"},"Liquidity Depths Calculation"),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis/pull/5673"},"https://github.com/osmosis-labs/osmosis/pull/5673")," for liquidity depths calculation for CL Pools. (This is just a place holder, will link correct link for doc once merged to main)"),(0,o.kt)("h1",{id:"twap-integration"},"TWAP Integration"),(0,o.kt)("p",null,"In the context of twap, concentrated liquidity pools function differently from\nCFMM pools."),(0,o.kt)("p",null,"There are 2 major differences that stem from how the liquidity is added and\nremoved in concentrated-liquidity."),(0,o.kt)("p",null,"The first one is given by the fact that a user does not provide liquidity at\npool creation time. Instead, they have to issue a separate message post-pool\ncreation. As a result, there can be a time where there is no valid spot price\ninitialized for a concentrated liquidity pool. When a concentrated liquidity pool\nis created, the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/twap"),' module still initializes the twap records. However, these\nrecords are invalidated by setting the "last error time" field to the block time\nat pool creation. Only adding liquidity to the pool will initialize the spot price\nand twap records correctly. One technical detail to note is that adding liquidity\nin the same block as pool creation will still set the "last error time" field to\nthe block time despite spot price already being initialized. Although we fix an\nerror within that block, it still occurs. As a result, this is deemed acceptable.\nHowever, this is a technical trade-off for implementation simplicity and not an\nintentional design decision.'),(0,o.kt)("p",null,"The second difference from balancer pools is focused around the fact that\nliquidity can be completely removed from a concentrated liquidity pool,\nmaking its spot price be invalid."),(0,o.kt)("p",null,"To recap the basic LP functionality in concentrated liquidity, a user adds\nliqudity by creating a position. To remove liquidity, they withdraw their\nposition. Contrary to CFMM pools, adding or removing liquidity does not affect\nthe price in 99% of the cases in concentrated liquidity. The only two exceptions\nto this rule are:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Creating the first position in the pool.")),(0,o.kt)("p",null,"In this case, we transition from invalid state where there is no liqudity, and\nthe spot price is uninitialized to the state where there is some liqudity, and\nas a result a valid spot price."),(0,o.kt)("p",null,"Note, that if there is a pool where liqudiity is completely drained and re-added,\nthe TWAP's last error time will be pointing at the time when the liquidity was drained.\nThis is different from how twap functions in CFMM pool where liquidity cannot\nbe removed in-full."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Removing the last position in the pool.")),(0,o.kt)("p",null,"In this case, we transition from a valid state with liquidity and spot price to\nan invalid state where there is no liquidity and, as a result, no valid spot\nprice anymore. The last spot price error will be set to the block time of when\nthe last position was removed."),(0,o.kt)("p",null,"To reiterate, the above two exceptions are the only cases where twap is updated\ndue to adding or removing liquidity."),(0,o.kt)("p",null,"The major source of updates with respect to twap is the swap logic. It functions\nsimilarly to CFMM pools where upon the completion of a swap, a listener ",(0,o.kt)("inlineCode",{parentName:"p"},"AfterConcentratedPoolSwap"),"\npropagates the execution to the twap module for the purposes of tracking state updates\nnecessary to retrieve the spot price and update the twap accumulators\n(more details in x/twap module)."),(0,o.kt)("p",null,'Lastly, see the "Listeners" section for more details on how twap is enabled by\nthe use of these hooks.'),(0,o.kt)("h2",{id:"external-sources"},"External Sources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://uniswap.org/whitepaper-v3.pdf"},"Uniswap V3 Whitepaper")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://atiselsts.github.io/pdfs/uniswap-v3-liquidity-math.pdf"},"Technical Note on Liquidity Math"))))}c.isMDXComponent=!0}}]);