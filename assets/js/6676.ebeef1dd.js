"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[6676],{66676:(e,t,s)=>{s.r(t),s.d(t,{dyte_mic_toggle:()=>d});var i=s(94196),n=s(7147),o=s(61070),r=s(79781),a=s(76851);s(55752);const d=class{constructor(e){(0,i.r)(this,e),this.stateUpdate=(0,i.c)(this,"dyteStateUpdate",7),this.audioUpdateListener=({audioEnabled:e})=>{this.audioEnabled=e},this.selfJoinStateListener=()=>{this.updateCanProduce(this.meeting)},this.selfJoinStateRejectedListener=()=>{this.updateCanProduce(this.meeting)},this.mediaPermissionErrorListener=({kind:e,message:t})=>{"audio"===e&&(this.micPermission=t)},this.variant="button",this.iconPack=n.d,this.t=(0,o.u)(),this.audioEnabled=!1,this.canProduceAudio=!1,this.micPermission="NOT_REQUESTED",this.toggleMic=()=>{var e;if(this.hasPermissionError())return this.stateUpdate.emit({activePermissionsMessage:!0}),r.s.activePermissionsMessage=!0,!1;const t=null===(e=this.meeting)||void 0===e?void 0:e.self;null!=t&&this.canProduceAudio&&(t.audioEnabled?t.disableAudio():t.enableAudio())}}connectedCallback(){this.meetingChanged(this.meeting)}disconnectedCallback(){var e,t,s,i,n,o,r;null===(e=this.meeting)||void 0===e||e.self.removeListener("audioUpdate",this.audioUpdateListener),null===(t=this.meeting)||void 0===t||t.self.removeListener("mediaPermissionError",this.mediaPermissionErrorListener),null===(s=this.meeting)||void 0===s||s.self.removeListener("joinStageRequestAccepted",this.selfJoinStateListener),null===(i=this.meeting)||void 0===i||i.self.removeListener("joinStageRequestRejected",this.selfJoinStateRejectedListener),null===(n=this.meeting)||void 0===n||n.self.removeListener("stageJoined",this.selfJoinStateListener),null===(o=this.meeting)||void 0===o||o.self.removeListener("stageLeft",this.selfJoinStateListener),null===(r=this.meeting)||void 0===r||r.self.removeListener("removedFromStage",this.selfJoinStateListener)}meetingChanged(e){if(null!=e){const t=e.self;this.canProduceAudio="ALLOWED"===t.permissions.produceAudio,this.updateCanProduce(e),this.micPermission=e.self.mediaPermissions.audio||"NOT_REQUESTED",this.audioEnabled=t.audioEnabled,t.addListener("audioUpdate",this.audioUpdateListener),t.addListener("mediaPermissionError",this.mediaPermissionErrorListener),t.addListener("joinStageRequestAccepted",this.selfJoinStateListener),t.addListener("joinStageRequestRejected",this.selfJoinStateRejectedListener),t.addListener("stageJoined",this.selfJoinStateListener),t.addListener("stageLeft",this.selfJoinStateListener),t.addListener("removedFromStage",this.selfJoinStateListener)}}updateCanProduce(e){const{self:t,meta:s}=e,i=(0,a.c)(a.P.Audio,t.permissions),n="WEBINAR"===s.viewType;if(this.canProduceAudio=!1,!n&&i&&(this.canProduceAudio=!0),n&&i){const e=t.permissions.canPresent,s=t.permissions.requestProduce;(e||s&&("ON_STAGE"===t.webinarStageStatus||"ACCEPTED_TO_JOIN_STAGE"===t.webinarStageStatus))&&(this.canProduceAudio=!0)}}hasPermissionError(){return"NOT_REQUESTED"!==this.micPermission&&"ACCEPTED"!==this.micPermission}getState(){let e="",t="",s="",i={},n=this.hasPermissionError();return this.audioEnabled&&!n?(t=this.t("mic_on"),s=this.iconPack.mic_on):(t=this.t("mic_off"),s=this.iconPack.mic_off,i["red-icon"]=!0),e="COULD_NOT_START"===this.micPermission?this.t("Unable to capture audio"):"SYSTEM_DENIED"===this.micPermission?this.t("perm_sys_denied"):"DENIED"===this.micPermission?this.t("perm_browser_denied"):this.audioEnabled?this.t("Disable Mic"):this.t("Enable Mic"),{tooltipLabel:e,label:t,icon:s,classList:i,showWarning:n}}render(){if(!this.canProduceAudio)return null;const{tooltipLabel:e,label:t,icon:s,classList:n,showWarning:o}=this.getState();return(0,i.h)(i.H,{title:t},(0,i.h)("dyte-tooltip",{kind:"block",label:e,part:"tooltip"},(0,i.h)("dyte-controlbar-button",{part:"controlbar-button",icon:s,label:t,size:this.size,iconPack:this.iconPack,variant:this.variant,class:n,onClick:this.toggleMic,showWarning:o,disabled:o})))}static get watchers(){return{meeting:["meetingChanged"]}}};d.style=":host{display:block;font-family:var(--dyte-font-family, sans-serif)}:host(.audioDisabled) :slotted(dyte-icon){--tw-text-opacity:1;color:rgba(var(--dyte-colors-danger, 255 45 45) / var(--tw-text-opacity))}"},61070:(e,t,s)=>{s.d(t,{g:()=>n,u:()=>o});var i=s(55752);const n=async e=>{if(null==e||"en"===e||""===e.trim())return i.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},i.d,await t.json()):i.d}catch(t){return i.d}},o=(e=i.d)=>t=>{var s;return null!==(s=e[t])&&void 0!==s?s:t}},79781:(e,t,s)=>{s.d(t,{o:()=>d,s:()=>a});var i=s(94196);const n=e=>!("isConnected"in e)||e.isConnected,o=((e,t)=>{let s;return(...i)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...i)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(n))}),2e3),r=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:a,onChange:d}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{let s=new Map(Object.entries(null!=e?e:{}));const i={dispose:[],get:[],set:[],reset:[]},n=()=>{s=new Map(Object.entries(null!=e?e:{})),i.reset.forEach((e=>e()))},o=e=>(i.get.forEach((t=>t(e))),s.get(e)),a=(e,n)=>{const o=s.get(e);t(n,o,e)&&(s.set(e,n),i.set.forEach((t=>t(e,n,o))))},d="undefined"==typeof Proxy?{}:new Proxy(e,{get:(e,t)=>o(t),ownKeys:e=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,s)=>(a(t,s),!0)}),c=(e,t)=>(i[e].push(t),()=>{r(i[e],t)});return{state:d,get:o,set:a,on:c,onChange:(t,s)=>{const i=c("set",((e,i)=>{e===t&&s(i)})),n=c("reset",(()=>s(e[t])));return()=>{i(),n()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(c("set",t.set)),t.get&&e.push(c("get",t.get)),t.reset&&e.push(c("reset",t.reset)),t.dispose&&e.push(c("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{i.dispose.forEach((e=>e())),n()},reset:n,forceUpdate:e=>{const t=s.get(e);i.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof i.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,i.a)();s&&((e,t,s)=>{const i=e.get(t);i?i.includes(s)||i.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(i.f)),o(e)},reset:()=>{e.forEach((e=>e.forEach(i.f))),o(e)}}})()),s})({})},76851:(e,t,s)=>{s.d(t,{P:()=>o,a:()=>i,c:()=>r,i:()=>n});const i=e=>"requestProduceVideo"in e,n=e=>!("controlBar"in e);var o;!function(e){e[e.Video=0]="Video",e[e.Audio=1]="Audio",e[e.ScreenShare=2]="ScreenShare"}(o||(o={}));const r=(e,t)=>{switch(e){case o.Video:return"ALLOWED"===(i(t)?t.produceVideo:t.produceVideo.allow);case o.Audio:return"ALLOWED"===(i(t),t.produceAudio);case o.ScreenShare:return"ALLOWED"===(i(t)?t.produceScreenshare:t.produceScreenshare.allow)}}}}]);