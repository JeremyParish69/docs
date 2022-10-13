"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[6348],{66348:(e,t,s)=>{s.r(t),s.d(t,{dyte_confirmation_modal:()=>r});var o=s(94196),a=s(61070),n=s(7147),i=s(79781);s(55752);const r=class{constructor(e){(0,o.r)(this,e),this.stateUpdate=(0,o.c)(this,"dyteStateUpdate",7),this.keyPressListener=e=>{"Escape"===e.key&&this.close()},this.iconPack=n.d,this.t=(0,a.u)(),this.close=()=>{this.stateUpdate.emit({activeConfirmationModal:{active:!1}}),i.s.activeConfirmationModal={active:!1},this.states.activeConfirmationModal.onClose(this.stateUpdate,i.s,this.meeting)},this.onConfirmation=async()=>{this.stateUpdate.emit({activeConfirmationModal:{active:!1}}),i.s.activeConfirmationModal={active:!1},this.states.activeConfirmationModal.onClick(this.stateUpdate,i.s,this.meeting)}}connectedCallback(){document.addEventListener("keydown",this.keyPressListener)}componentDidLoad(){}disconnectedCallback(){document.removeEventListener("keydown",this.keyPressListener)}render(){var e,t,s,a,n,i,r;const c=this.states.activeConfirmationModal;return(0,o.h)(o.H,null,(0,o.h)("div",{class:"leave-modal"},(0,o.h)("div",{class:"header"},(0,o.h)("h2",{class:"title"},this.t("Are you sure?"))),(0,o.h)("p",{class:"message"},this.t(null!==(e=null==c?void 0:c.content)&&void 0!==e?e:"This is a confirmation modal")),(0,o.h)("div",{class:"content"},(0,o.h)("div",{class:"leave-meeting"},(0,o.h)("dyte-button",{variant:"secondary",title:this.t(null!==(t=null==c?void 0:c.cancelText)&&void 0!==t?t:"Cancel"),onClick:this.close},this.t(null!==(s=null==c?void 0:c.cancelText)&&void 0!==s?s:"Cancel")),(0,o.h)("dyte-button",{onClick:()=>this.onConfirmation(),variant:null!==(n=null===(a=this.states.activeConfirmationModal)||void 0===a?void 0:a.variant)&&void 0!==n?n:"danger",title:this.t(null!==(i=null==c?void 0:c.ctaText)&&void 0!==i?i:"Yes")},this.t(null!==(r=null==c?void 0:c.ctaText)&&void 0!==r?r:"Yes"))))))}};r.style=":host{position:relative;display:flex;flex-direction:column;overflow:hidden;border-radius:var(--dyte-border-radius-md, 8px);padding:var(--dyte-space-4, 16px);width:100%;font-family:var(--dyte-font-family, sans-serif);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-1000, 255 255 255));width:400px;max-width:80%}.leave-modal{width:100%;color:rgb(var(--dyte-colors-text-1000, 255 255 255))}.leave-modal .header h2{margin:var(--dyte-space-0, 0px)}.leave-modal .content{font-size:14px}.leave-message p{margin-top:var(--dyte-space-3, 12px);margin-bottom:var(--dyte-space-3, 12px)}.leave-meeting{display:flex;flex-direction:row;justify-content:space-between;gap:var(--dyte-space-2, 8px)}.leave-meeting dyte-button{flex:1 1 0%}.end-meeting{margin-top:var(--dyte-space-2, 8px)}"},61070:(e,t,s)=>{s.d(t,{g:()=>a,u:()=>n});var o=s(55752);const a=async e=>{if(null==e||"en"===e||""===e.trim())return o.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},o.d,await t.json()):o.d}catch(t){return o.d}},n=(e=o.d)=>t=>{var s;return null!==(s=e[t])&&void 0!==s?s:t}},79781:(e,t,s)=>{s.d(t,{o:()=>c,s:()=>r});var o=s(94196);const a=e=>!("isConnected"in e)||e.isConnected,n=((e,t)=>{let s;return(...o)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...o)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(a))}),2e3),i=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:r,onChange:c}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{let s=new Map(Object.entries(null!=e?e:{}));const o={dispose:[],get:[],set:[],reset:[]},a=()=>{s=new Map(Object.entries(null!=e?e:{})),o.reset.forEach((e=>e()))},n=e=>(o.get.forEach((t=>t(e))),s.get(e)),r=(e,a)=>{const n=s.get(e);t(a,n,e)&&(s.set(e,a),o.set.forEach((t=>t(e,a,n))))},c="undefined"==typeof Proxy?{}:new Proxy(e,{get:(e,t)=>n(t),ownKeys:e=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,s)=>(r(t,s),!0)}),d=(e,t)=>(o[e].push(t),()=>{i(o[e],t)});return{state:c,get:n,set:r,on:d,onChange:(t,s)=>{const o=d("set",((e,o)=>{e===t&&s(o)})),a=d("reset",(()=>s(e[t])));return()=>{o(),a()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(d("set",t.set)),t.get&&e.push(d("get",t.get)),t.reset&&e.push(d("reset",t.reset)),t.dispose&&e.push(d("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{o.dispose.forEach((e=>e())),a()},reset:a,forceUpdate:e=>{const t=s.get(e);o.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof o.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,o.a)();s&&((e,t,s)=>{const o=e.get(t);o?o.includes(s)||o.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(o.f)),n(e)},reset:()=>{e.forEach((e=>e.forEach(o.f))),n(e)}}})()),s})({})}}]);