"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[2586],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=m(n),p=o,h=u["".concat(s,".").concat(p)]||u[p]||c[p]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4208:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var a=n(87462),o=(n(67294),n(3905));const r={},i="Token Factory",l={unversionedId:"modules/tokenfactory/README",id:"modules/tokenfactory/README",title:"Token Factory",description:"The tokenfactory module allows any account to create a new token with",source:"@site/docs/osmosis-core/modules/tokenfactory/README.md",sourceDirName:"modules/tokenfactory",slug:"/modules/tokenfactory/",permalink:"/osmosis-core/modules/tokenfactory/",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/osmosis-core/modules/tokenfactory/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Superfluid Staking",permalink:"/osmosis-core/modules/superfluid/"},next:{title:"TWAP",permalink:"/osmosis-core/modules/twap/"}},s={},m=[{value:"Messages",id:"messages",level:2},{value:"CreateDenom",id:"createdenom",level:3},{value:"Mint",id:"mint",level:3},{value:"Burn",id:"burn",level:3},{value:"ChangeAdmin",id:"changeadmin",level:3},{value:"SetDenomMetadata",id:"setdenommetadata",level:3},{value:"Expectations from the chain",id:"expectations-from-the-chain",level:2}],d={toc:m};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"token-factory"},"Token Factory"),(0,o.kt)("p",null,"The tokenfactory module allows any account to create a new token with\nthe name ",(0,o.kt)("inlineCode",{parentName:"p"},"factory/{creator address}/{subdenom}"),'. Because tokens are\nnamespaced by creator address, this allows token minting to be\npermissionless, due to not needing to resolve name collisions. A single\naccount can create multiple denoms, by providing a unique subdenom for each\ncreated denom. Once a denom is created, the original creator is given\n"admin" privileges over the asset. This allows them to:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mint their denom to any account"),(0,o.kt)("li",{parentName:"ul"},"Burn their denom from any account"),(0,o.kt)("li",{parentName:"ul"},"Create a transfer of their denom between any two accounts"),(0,o.kt)("li",{parentName:"ul"},"Change the admin. In the future, more admin capabilities may be added. Admins\ncan choose to share admin privileges with other accounts using the authz\nmodule. The ",(0,o.kt)("inlineCode",{parentName:"li"},"ChangeAdmin")," functionality, allows changing the master admin\naccount, or even setting it to ",(0,o.kt)("inlineCode",{parentName:"li"},'""'),", meaning no account has admin privileges\nof the asset.")),(0,o.kt)("h2",{id:"messages"},"Messages"),(0,o.kt)("h3",{id:"createdenom"},"CreateDenom"),(0,o.kt)("p",null,"Creates a denom of ",(0,o.kt)("inlineCode",{parentName:"p"},"factory/{creator address}/{subdenom}")," given the denom creator\naddress and the subdenom. Subdenoms can contain ",(0,o.kt)("inlineCode",{parentName:"p"},"[a-zA-Z0-9./]"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'message MsgCreateDenom {\n  string sender = 1 [ (gogoproto.moretags) = "yaml:\\"sender\\"" ];\n  string subdenom = 2 [ (gogoproto.moretags) = "yaml:\\"subdenom\\"" ];\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"State Modifications:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fund community pool with the denom creation fee from the creator address, set\nin ",(0,o.kt)("inlineCode",{parentName:"li"},"Params"),"."),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"DenomMetaData")," via bank keeper."),(0,o.kt)("li",{parentName:"ul"},"Set ",(0,o.kt)("inlineCode",{parentName:"li"},"AuthorityMetadata")," for the given denom to store the admin for the created\ndenom ",(0,o.kt)("inlineCode",{parentName:"li"},"factory/{creator address}/{subdenom}"),". Admin is automatically set as the\nMsg sender."),(0,o.kt)("li",{parentName:"ul"},"Add denom to the ",(0,o.kt)("inlineCode",{parentName:"li"},"CreatorPrefixStore"),", where a state of denoms created per\ncreator is kept.")),(0,o.kt)("h3",{id:"mint"},"Mint"),(0,o.kt)("p",null,"Minting of a specific denom is only allowed for the current admin.\nNote, the current admin is defaulted to the creator of the denom."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'message MsgMint {\n  string sender = 1 [ (gogoproto.moretags) = "yaml:\\"sender\\"" ];\n  cosmos.base.v1beta1.Coin amount = 2 [\n    (gogoproto.moretags) = "yaml:\\"amount\\"",\n    (gogoproto.nullable) = false\n  ];\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"State Modifications:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Safety check the following",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Check that the denom minting is created via ",(0,o.kt)("inlineCode",{parentName:"li"},"tokenfactory")," module"),(0,o.kt)("li",{parentName:"ul"},"Check that the sender of the message is the admin of the denom"))),(0,o.kt)("li",{parentName:"ul"},"Mint designated amount of tokens for the denom via ",(0,o.kt)("inlineCode",{parentName:"li"},"bank")," module")),(0,o.kt)("h3",{id:"burn"},"Burn"),(0,o.kt)("p",null,"Burning of a specific denom is only allowed for the current admin.\nNote, the current admin is defaulted to the creator of the denom."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'message MsgBurn {\n  string sender = 1 [ (gogoproto.moretags) = "yaml:\\"sender\\"" ];\n  cosmos.base.v1beta1.Coin amount = 2 [\n    (gogoproto.moretags) = "yaml:\\"amount\\"",\n    (gogoproto.nullable) = false\n  ];\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"State Modifications:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Saftey check the following",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Check that the denom minting is created via ",(0,o.kt)("inlineCode",{parentName:"li"},"tokenfactory")," module"),(0,o.kt)("li",{parentName:"ul"},"Check that the sender of the message is the admin of the denom"))),(0,o.kt)("li",{parentName:"ul"},"Burn designated amount of tokens for the denom via ",(0,o.kt)("inlineCode",{parentName:"li"},"bank")," module")),(0,o.kt)("h3",{id:"changeadmin"},"ChangeAdmin"),(0,o.kt)("p",null,"Change the admin of a denom. Note, this is only allowed to be called by the current admin of the denom."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'message MsgChangeAdmin {\n  string sender = 1 [ (gogoproto.moretags) = "yaml:\\"sender\\"" ];\n  string denom = 2 [ (gogoproto.moretags) = "yaml:\\"denom\\"" ];\n  string newAdmin = 3 [ (gogoproto.moretags) = "yaml:\\"new_admin\\"" ];\n}\n')),(0,o.kt)("h3",{id:"setdenommetadata"},"SetDenomMetadata"),(0,o.kt)("p",null,"Setting of metadata for a specific denom is only allowed for the admin of the denom.\nIt allows the overwriting of the denom metadata in the bank module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'message MsgChangeAdmin {\n  string sender = 1 [ (gogoproto.moretags) = "yaml:\\"sender\\"" ];\n  cosmos.bank.v1beta1.Metadata metadata = 2 [ (gogoproto.moretags) = "yaml:\\"metadata\\"", (gogoproto.nullable)   = false ];\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"State Modifications:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check that sender of the message is the admin of denom"),(0,o.kt)("li",{parentName:"ul"},"Modify ",(0,o.kt)("inlineCode",{parentName:"li"},"AuthorityMetadata")," state entry to change the admin of the denom")),(0,o.kt)("h2",{id:"expectations-from-the-chain"},"Expectations from the chain"),(0,o.kt)("p",null,"The chain's bech32 prefix for addresses can be at most 16 characters long."),(0,o.kt)("p",null,"This comes from denoms having a 128 byte maximum length, enforced from the SDK,\nand us setting longest_subdenom to be 44 bytes."),(0,o.kt)("p",null,"A token factory token's denom is: ",(0,o.kt)("inlineCode",{parentName:"p"},"factory/{creator address}/{subdenom}")),(0,o.kt)("p",null,"Splitting up into sub-components, this has:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"len(factory) = 7")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'2 * len("/") = 2')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"len(longest_subdenom)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"len(creator_address) = len(bech32(longest_addr_length, chain_addr_prefix))"),".")),(0,o.kt)("p",null,"Longest addr length at the moment is ",(0,o.kt)("inlineCode",{parentName:"p"},"32 bytes"),". Due to SDK error correction\nsettings, this means ",(0,o.kt)("inlineCode",{parentName:"p"},"len(bech32(32, chain_addr_prefix)) = len(chain_addr_prefix) + 1 + 58"),".\nAdding this all, we have a total length constraint of ",(0,o.kt)("inlineCode",{parentName:"p"},"128 = 7 + 2 + len(longest_subdenom) + len(longest_chain_addr_prefix) + 1 + 58"),".\nTherefore ",(0,o.kt)("inlineCode",{parentName:"p"},"len(longest_subdenom) + len(longest_chain_addr_prefix) = 128 - (7 + 2 + 1 + 58) = 60"),"."),(0,o.kt)("p",null,"The choice between how we standardized the split these 60 bytes between maxes\nfrom longest_subdenom and longest_chain_addr_prefix is somewhat arbitrary.\nConsiderations going into this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Per ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki#bech32"},"BIP-0173"),"\nthe technically longest HRP for a 32 byte address ('data field') is 31 bytes.\n(Comes from encode(data) = 59 bytes, and max length = 90 bytes)"),(0,o.kt)("li",{parentName:"ul"},"subdenom should be at least 32 bytes so hashes can go into it"),(0,o.kt)("li",{parentName:"ul"},"longer subdenoms are very helpful for creating human readable denoms"),(0,o.kt)("li",{parentName:"ul"},"chain addresses should prefer being smaller. The longest HRP in cosmos to date is 11 bytes. (",(0,o.kt)("inlineCode",{parentName:"li"},"persistence"),")")),(0,o.kt)("p",null,"For explicitness, its currently set to ",(0,o.kt)("inlineCode",{parentName:"p"},"len(longest_subdenom) = 44")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"len(longest_chain_addr_prefix) = 16"),"."),(0,o.kt)("p",null,"Please note, if the SDK increases the maximum length of a denom from 128 bytes,\nthese caps should increase."),(0,o.kt)("p",null,"So please don't make code rely on these max lengths for parsing."))}c.isMDXComponent=!0}}]);