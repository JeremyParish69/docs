"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[1713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=s,f=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},89355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(87462),s=n(67294),o=n(3905);const a=()=>{const[e,t]=(0,s.useState)(null),[n,r]=(0,s.useState)("https://raw.githubusercontent.com/osmosis-labs/assetlists/main/osmosis-1/osmosis-1.assetlist.json"),o={backgroundColor:"#322dc2",border:"none",color:"white",padding:"15px 32px",textAlign:"center",textDecoration:"none",display:"inline-block",fontSize:"16px",margin:"4px 2px",borderRadius:"8px",transition:"background-color 0.2s ease-in-out",":hover":{backgroundColor:"#5f4bea"}};(0,s.useEffect)((()=>{n&&fetch(n).then((e=>e.json())).then((e=>t(e.assets)))}),[n]);return s.createElement(s.Fragment,null,s.createElement("div",null," ",s.createElement("h3",null," Select a chain "),Object.entries({mainnet:"https://raw.githubusercontent.com/osmosis-labs/assetlists/main/osmosis-1/osmosis-1.assetlist.json",osmo_test_4:"https://raw.githubusercontent.com/osmosis-labs/assetlists/main/osmo-test-4/osmo-test-4.assetlist.json",osmo_test_5:"https://raw.githubusercontent.com/osmosis-labs/assetlists/main/osmo-test-5/osmo-test-5.assetlist.json"}).map((e=>{let[t,n]=e;return s.createElement("button",{key:t,onClick:()=>(e=>{r(e)})(n),style:o},t)}))),e?s.createElement("table",null,s.createElement("thead",null,s.createElement("tr",null,s.createElement("th",null,s.createElement("code",null,"Name")),s.createElement("th",null,s.createElement("code",null,"Information")))),s.createElement("tbody",null,e.map((e=>{var t;return s.createElement("tr",{key:e.symbol},s.createElement("td",null,e.name),s.createElement("td",null,s.createElement("div",null,s.createElement("b",null,"Symbol:"),"  ",e.symbol,s.createElement("br",null),s.createElement("b",null,"IBC Denom:")," ",e.base),null==(t=e.traces)?void 0:t.map(((t,n)=>s.createElement("div",{key:`${e.symbol}-trace-${n}`},t.provider&&s.createElement("span",null,s.createElement("b",null," Provider"),": ",t.provider),s.createElement("div",null,s.createElement("ul",null,s.createElement("li",null," ",t.type,s.createElement("ul",null,s.createElement("li",null,s.createElement("b",null,"Destination Chain:")," ",t.counterparty.chain_name," Denom:",t.counterparty.base_denom),"ibc"===t.type?s.createElement(s.Fragment,null,s.createElement("li",null,s.createElement("b",null,"Destination Channel:")," ",t.counterparty.channel_id),s.createElement("li",null,s.createElement("b",null,"Source Channel:")," ",t.chain.channel_id)):null,s.createElement("li",null,s.createElement("b",null,"Base Denom:")," ",t.counterparty.base_denom))))))))))})))):s.createElement("h1",null,"Fetching Assets..."))},l={title:"Asset Info",sidebar_position:5},i="Asset Info",c={unversionedId:"asset-info",id:"asset-info",title:"Asset Info",description:"Osmosis frontend supports various assets with corresponding IBC denomination and channel. When assets are transferred through IBC, they obtain a new IBC denomination that is used to identify them in the frontend. The IBC channel is used to identify which chain the asset is from, for example, channel-0 for ATOMs transferred from the Cosmos Hub to Osmosis. You can learn more about IBC here.",source:"@site/docs/osmosis-core/asset-info.mdx",sourceDirName:".",slug:"/asset-info",permalink:"/osmosis-core/asset-info",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/osmosis-core/asset-info.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Asset Info",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Txfees",permalink:"/osmosis-core/modules/txfees/"},next:{title:"Keys Management",permalink:"/osmosis-core/category/keys-management"}},m={},u=[],p={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"asset-info"},"Asset Info"),(0,o.kt)("p",null,"Osmosis frontend supports various assets with corresponding IBC denomination and channel. When assets are transferred through IBC, they obtain a new IBC denomination that is used to identify them in the frontend. The IBC channel is used to identify which chain the asset is from, for example, channel-0 for ATOMs transferred from the Cosmos Hub to Osmosis. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.osmosis.zone/osmosis-core/ibc/"},"You can learn more about IBC here.")," "),(0,o.kt)(a,{mdxType:"AssetData"}))}d.isMDXComponent=!0}}]);