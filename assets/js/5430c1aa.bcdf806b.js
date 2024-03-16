"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[7703],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(l,".").concat(d)]||c[d]||u[d]||s;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},11620:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={sidebar_position:3},i="Connect with Osmosis",o={unversionedId:"integrate/transfer",id:"integrate/transfer",title:"Connect with Osmosis",description:"Osmosis is a automated market maker blockchain. This means any IBC-enabled zone can add its token as an asset to be traded on Osmosis AMM completely permissionlessly. Because Osmosis is fundamentally designed as an IBC-native AMM that trades IBC tokens, rather than tokens issued on the Osmosis zone, there are additional nuances to understand and steps to be taken in order to ensure your asset is supported by Osmosis.",source:"@site/docs/overview/integrate/transfer.md",sourceDirName:"integrate",slug:"/integrate/transfer",permalink:"/overview/integrate/transfer",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/overview/integrate/transfer.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Concentrated Liquidity Integration",permalink:"/overview/integrate/on-chain"},next:{title:"Register your Asset",permalink:"/overview/integrate/registration"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enabling IBC transfers",id:"enabling-ibc-transfers",level:2},{value:"Not on a Cosmos-SDK chain?",id:"not-on-a-cosmos-sdk-chain",level:3},{value:"Setting up and operating a relayer to Osmosis",id:"setting-up-and-operating-a-relayer-to-osmosis",level:2},{value:"Register a bech32 Prefix onto SLIP173",id:"register-a-bech32-prefix-onto-slip173",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Steps",id:"steps",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connect-with-osmosis"},"Connect with Osmosis"),(0,r.kt)("p",null,"Osmosis is a automated market maker blockchain. This means any IBC-enabled zone can add its token as an asset to be traded on Osmosis AMM completely permissionlessly. Because Osmosis is fundamentally designed as an IBC-native AMM that trades IBC tokens, rather than tokens issued on the Osmosis zone, there are additional nuances to understand and steps to be taken in order to ensure your asset is supported by Osmosis."),(0,r.kt)("p",null,"This document lays out the prerequisites and the process that is needed to ensure that your token meets the interchain UX standards set by Osmosis."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Zone must have IBC token transferred enabled (ICS20 standard)."),(0,r.kt)("li",{parentName:"ol"},"Assets to be traded should be a fungible ",(0,r.kt)("inlineCode",{parentName:"li"},"sdk.Coins")," asset."),(0,r.kt)("li",{parentName:"ol"},"Highly reliable, highly available altruistic (as in relay tx fees paid on behalf of user) relayer service."),(0,r.kt)("li",{parentName:"ol"},"Highly reliable, highly available, and scalable RPC/REST endpoint infrastructure.")),(0,r.kt)("h2",{id:"enabling-ibc-transfers"},"Enabling IBC transfers"),(0,r.kt)("p",null,"Because only IBC assets that have been transferred to Osmosis can be traded on Osmosis, the native chain of the asset must have IBC transfers enabled. Cosmos defines the fungible IBC token transfer standard in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer"},"ICS20")," specification."),(0,r.kt)("p",null,"At this time, only chains using Cosmos-SDK v0.40+ (aka Stargate) can support IBC transfers."),(0,r.kt)("p",null,"IBC transfers can be enabled:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"as part of a software upgrade, or"),(0,r.kt)("li",{parentName:"ol"},"via a ",(0,r.kt)("inlineCode",{parentName:"li"},"ParameterChange")," governance proposal")),(0,r.kt)("p",null,"To ensure a smooth user experience, Osmosis assumes all tokens will be transferred through a single designated IBC channel between Osmosis and the counterparty zone."),(0,r.kt)("p",null,"Recommended readings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/ibc/overview.html"},"IBC Overview")," - To understand IBC clients, connections, "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/ibc/upgrades/quick-guide.html"},"How to Upgrade IBC Chains and their Clients"))),(0,r.kt)("h3",{id:"not-on-a-cosmos-sdk-chain"},"Not on a Cosmos-SDK chain?"),(0,r.kt)("p",null,"Several intermediary chains are in use or being developed that link the IBC enabled Cosmos with other ecosystems."),(0,r.kt)("p",null,"For EVM chains, Osmosis ",(0,r.kt)("a",{parentName:"p",href:"https://www.mintscan.io/osmosis/proposals/206"},"voted")," to use ",(0,r.kt)("a",{parentName:"p",href:"https://axelar.network/"},"Axelar")," as its canonical bridge. This connects Osmosis to networks such as Ethereum, Avalanche, Arbitrum, Binance Smart Chain, Celo, Fantom, Polkadot and Polygon."),(0,r.kt)("p",null,"Any token added to the Axelar bridge is enabled for transfer to Osmosis and gains access to permissionless listing."),(0,r.kt)("h2",{id:"setting-up-and-operating-a-relayer-to-osmosis"},"Setting up and operating a relayer to Osmosis"),(0,r.kt)("p",null,"Relayers are responsible of transferring IBC packets between Osmosis chain and the native chain of an asset. All Osmosis 'deposits' and 'withdrawals' are IBC transfers which dedicated relayers process."),(0,r.kt)("p",null,"To ensure fungibility amongst IBC assets, the frontend will assume social consensus have been achieved and designate one specific channel between Osmosis and the native chain as the primary channel for all IBC token transfers. Multiple relayers can be active on the same channel, and for the sake of redundancy and increased resilience we recommend having multiple relayers actively relaying packets. It is recommended to initialize the channel as an unordered IBC channel, rather than an ordered IBC channel."),(0,r.kt)("p",null,"Currently, there are three main Cosmos-SDK IBC relayer implementations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/cosmos/relayer"},"Go relayer"),": A Golang implementation of IBC relayer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://hermes.informal.systems/"},"Hermes"),": A Rust implementation of IBC relayer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/confio/ts-relayer"},"ts-relayer"),": A TypeScript implementation of IBC relayer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Note: We are actively investigating issues regarding ts-relayer not working with Osmosis. In the meantime, we recommend using Hermes/Go relayer"))),(0,r.kt)("p",null,"All relayers are compatible with IBC token transfers on the same channel. Each relayer implementation may have different configuration requirements, and have various configuration customizability."),(0,r.kt)("p",null,"At this time, Osmosis requires that all relayers to pay for the transaction fees for IBC relay transactions, and not the user."),(0,r.kt)("p",null,"If you prefer not to run your own chain's relayer to Osmosis, there may be various entities (",(0,r.kt)("a",{parentName:"p",href:"https://cephalopod.equipment/"},"Cephalopod Equipment Corp."),", ",(0,r.kt)("a",{parentName:"p",href:"https://www.vitwit.com/"},"Vitwit"),", etc) that provide relayers-as-a-service, or you may reach out to various validators in your ecosystem that may be able to operate a relayer. The Osmosis team does ",(0,r.kt)("strong",{parentName:"p"},"not")," provide relayer services for IBC assets."),(0,r.kt)("h2",{id:"register-a-bech32-prefix-onto-slip173"},"Register a bech32 Prefix onto SLIP173"),(0,r.kt)("p",null,"CosmosSDK Chain addresses can be represented with a chain-specific string preceding a hash, which helps identify to which chain an address belongs. They are registered on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/satoshilabs/slips/blob/master/slip-0173.md"},"SLIP173")),(0,r.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chain configured to use bech32 prefixes in wallet addresses",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Note: A bech32 prefix may still be registered, even before the chain is configured to use the prefixes, but only if the configuration will happen soon.")))),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chain data:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Chain name"),(0,r.kt)("li",{parentName:"ul"},"Chain website"),(0,r.kt)("li",{parentName:"ul"},"bech32 prefix(es)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Mainnet"),(0,r.kt)("li",{parentName:"ul"},"Testnet (optional)"),(0,r.kt)("li",{parentName:"ul"},"Regtest (optional)"),(0,r.kt)("li",{parentName:"ul"},"Note: The bech32 prefix must be unique among all registered prefixes. E.g., a new mainnet prefix cannot match a prefix already registered as a testnet prefix."))))),(0,r.kt)("li",{parentName:"ul"},"Basic understanding of GitHub, knowing how to fork, create a branch, commit changes, and submit a Pull Request")),(0,r.kt)("h3",{id:"steps"},"Steps"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Review the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/satoshilabs/slips/blob/master/slip-0173.md"},"SLIP173 Registry"),":"),(0,r.kt)("li",{parentName:"ol"},"Submit a pull request with necessary changes to the following:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"slip-0173.md"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add the chain name (as a link to the website) and prefix(es) into the ",(0,r.kt)("em",{parentName:"li"},"Registered human-readable parts")," table")))))))}u.isMDXComponent=!0}}]);