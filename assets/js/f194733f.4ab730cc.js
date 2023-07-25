"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[525],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var s=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,s,o=function(e,t){if(null==e)return{};var r,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=s.createContext({}),d=function(e){var t=s.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return s.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},l=s.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(r),m=o,h=l["".concat(i,".").concat(m)]||l[m]||u[m]||n;return r?s.createElement(h,a(a({ref:t},p),{},{components:r})):s.createElement(h,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=l;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<n;d++)a[d]=r[d];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}l.displayName="MDXCreateElement"},95494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var s=r(87462),o=(r(67294),r(3905));const n={sidebar_position:3,sidebar_label:"Set recovery address",description:"How to set a custom recovery address."},a="How to set a custom recovery address",c={unversionedId:"user-guide/recovery-address",id:"user-guide/recovery-address",title:"How to set a custom recovery address",description:"How to set a custom recovery address.",source:"@site/docs/osmosis-outpost/user-guide/recovery-address.md",sourceDirName:"user-guide",slug:"/user-guide/recovery-address",permalink:"/osmosis-outpost/user-guide/recovery-address",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/osmosis-outpost/user-guide/recovery-address.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Set recovery address",description:"How to set a custom recovery address."},sidebar:"tutorialSidebar",previous:{title:"Recover funds",permalink:"/osmosis-outpost/user-guide/recover-funds"},next:{title:"Set slippage tolerance",permalink:"/osmosis-outpost/user-guide/set-slippage"}},i={},d=[{value:"1. Access the settings",id:"1-access-the-settings",level:3},{value:"2. Enter the custom recovery address",id:"2-enter-the-custom-recovery-address",level:3},{value:"3. Save the modification",id:"3-save-the-modification",level:3}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-set-a-custom-recovery-address"},"How to set a custom recovery address"),(0,o.kt)("p",null,"Since some steps could fail during the swap process and, ",(0,o.kt)("em",{parentName:"p"},"once they are\nswapped")," but not received, the ",(0,o.kt)("em",{parentName:"p"},"tokens which are guarded by the smart contract"),"\ncan be recovered by a recovery address, you can set it ",(0,o.kt)("em",{parentName:"p"},"through the user"),"\n",(0,o.kt)("em",{parentName:"p"},"interface"),". "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"IMPORTANT:")),"  The recovery address can be set for the next swap. It\ncannot be modified once the swap started.")),(0,o.kt)("p",null,"By default, it is set to the ",(0,o.kt)("strong",{parentName:"p"},"osmosis address")," associated to the\n",(0,o.kt)("strong",{parentName:"p"},"connected wallet"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"IMPORTANT:")),"  If the recovery address is associated to a wallet you do\nnot own, you will not be able to recover funds if the swap process fails.")),(0,o.kt)("h3",{id:"1-access-the-settings"},"1. Access the settings"),(0,o.kt)("p",null,"To set a custom recovery address you need to access the ",(0,o.kt)("strong",{parentName:"p"},"settings")," of the\ndApp. To do this, you must click on the ",(0,o.kt)("em",{parentName:"p"},"settings icon")," in the top right corner\nof the interface."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Access the settings image",src:r(18633).Z,title:"access the settings",width:"3360",height:"1800"})),(0,o.kt)("h3",{id:"2-enter-the-custom-recovery-address"},"2. Enter the custom recovery address"),(0,o.kt)("p",null,"At this point, you can set any valid osmosis address as the recovery address.\nDespite this, however, it is ",(0,o.kt)("strong",{parentName:"p"},"important")," that you remember the fact that\n",(0,o.kt)("em",{parentName:"p"},"if you do not own the wallet associated with the address you are setting up"),",\n",(0,o.kt)("strong",{parentName:"p"},"you will not be able to access the funds")," if an error occur in the swap\nprocess."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Enter recovery address image",src:r(9190).Z,title:"enter the recovery address",width:"3360",height:"1800"})),(0,o.kt)("h3",{id:"3-save-the-modification"},"3. Save the modification"),(0,o.kt)("p",null,"Now you have to save the edits you performed, close the settings and... then\nyou're done!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Save and Close image",src:r(9053).Z,title:"save and close the settings",width:"3360",height:"1800"})))}u.isMDXComponent=!0},9190:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/enter-address-cdb28a47bff1dc471e705d3ca3b3ae0c.jpg"},9053:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/save-and-close-283a7a3ac31c62e3ec1c1269e59adff9.jpg"},18633:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/settings-3e047e9916504f0882ae3c497822568c.jpg"}}]);