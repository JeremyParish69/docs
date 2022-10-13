"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[8178],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(a),p=i,h=m["".concat(s,".").concat(p)]||m[p]||c[p]||o;return a?n.createElement(h,r(r({ref:t},d),{},{components:a})):n.createElement(h,r({ref:t},d))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},14382:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const o={},r="Validating On Testnet",l={unversionedId:"validate/validating-testnet",id:"validate/validating-testnet",title:"Validating On Testnet",description:"Synced Node",source:"@site/docs/overview/validate/validating-testnet.md",sourceDirName:"validate",slug:"/validate/validating-testnet",permalink:"/overview/validate/validating-testnet",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/overview/validate/validating-testnet.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Validating On Mainnet",permalink:"/overview/validate/validating-mainnet"},next:{title:"Available Wallets",permalink:"/overview/wallets/"}},s={},u=[{value:"Synced Node",id:"synced-node",level:2},{value:"Initialize Wallet Keyring",id:"initialize-wallet-keyring",level:2},{value:"Validator Public Key",id:"validator-public-key",level:2},{value:"Create Validator Command",id:"create-validator-command",level:2},{value:"Get OSMO via the Faucet",id:"get-osmo-via-the-faucet",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3},{value:"Track Validator Active Set",id:"track-validator-active-set",level:2},{value:"Track Validator Signing",id:"track-validator-signing",level:2}],d={toc:u};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"validating-on-testnet"},"Validating On Testnet"),(0,i.kt)("h2",{id:"synced-node"},"Synced Node"),(0,i.kt)("p",null,"Before creating a testnet validator, ensure you have first followed the instructions on how to ",(0,i.kt)("a",{parentName:"p",href:"/networks/join-testnet"},"join the testnet")),(0,i.kt)("h2",{id:"initialize-wallet-keyring"},"Initialize Wallet Keyring"),(0,i.kt)("p",null,"If you decide you want to turn your node into a validator, you will first need to add a wallet to your keyring."),(0,i.kt)("p",null,"While you can add an existing wallet through your seed phrase, we will create a new wallet in this example (replace KEY_NAME with a name of your choosing):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd keys add KEY_NAME\n")),(0,i.kt)("p",null,"Ensure you write down the mnemonic as you can not recover the wallet without it. To ensure your wallet was saved to your keyring, the WALLET_NAME is in your keys list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd keys list\n")),(0,i.kt)("h2",{id:"validator-public-key"},"Validator Public Key"),(0,i.kt)("p",null,"The last thing needed before initializing the validator is to obtain your validator public key which was created when you first initialized your node. To obtain your validator pubkey:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd tendermint show-validator\n")),(0,i.kt)("h2",{id:"create-validator-command"},"Create Validator Command"),(0,i.kt)("p",null,"Ensure you have a small amount of OSMO on the wallet address you are using on your keyring in order to successfully send a transaction.\nOnce you have have a balance on the address on your keyring, you can now send the create-validator transaction. "),(0,i.kt)("h2",{id:"get-osmo-via-the-faucet"},"Get OSMO via the Faucet"),(0,i.kt)("p",null,"If you need testnet testnet OSMO you have two options."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use the faucet at ",(0,i.kt)("a",{parentName:"li",href:"https://faucet.osmosis.zone"},"https://faucet.osmosis.zone")),(0,i.kt)("li",{parentName:"ul"},"Join the osmosis discord, get the testnet role ",(0,i.kt)("a",{parentName:"li",href:"https://canary.discord.com/channels/798583171548840026/842529004955500555"},"here"),", and then utilize the faucet bot ",(0,i.kt)("a",{parentName:"li",href:"https://canary.discord.com/channels/798583171548840026/911309363464007741"},"in the faucet channel"),".")),(0,i.kt)("p",null,"Here is the empty command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'osmosisd tx staking create-validator \\\n--from=[KEY_NAME] \\\n--amount=[staking_amount_uosmo] \\\n--pubkey=$(osmosisd tendermint show-validator) \\\n--moniker="[moniker_id_of_your_node]" \\\n--security-contact="[security contact email/contact method]" \\\n--chain-id="[chain-id]" \\\n--commission-rate="[commission_rate]" \\\n--commission-max-rate="[maximum_commission_rate]" \\\n--commission-max-change-rate="[maximum_rate_of_change_of_commission]" \\\n--min-self-delegation="[min_self_delegation_amount]" \\\n')),(0,i.kt)("p",null,"Here is the same command but with example values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'osmosisd tx staking create-validator \\\n--from=wallet1 \\\n--amount=400000000uosmo \\\n--pubkey=$(osmosisd tendermint show-validator)  \\\n--moniker="Wosmongton" \\\n--security-contact="wosmongton@osmosis.labs" \\\n--chain-id="osmo-test-4" \\\n--commission-rate="0.1" \\\n--commission-max-rate="0.2" \\\n--commission-max-change-rate="0.05" \\\n--min-self-delegation="400000000" \\\n')),(0,i.kt)("p",null,"If you need further explanation for each of these command flags:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"from")," flag is the KEY_NAME you created when initializing the key on your keyring"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"amount")," flag is the amount you will place in your own validator in uosmo (in the example, 500000000uosmo is 500osmo)"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"pubkey")," is the validator public key found earlier"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"moniker")," is a human readable name you choose for your validator"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"security-contact")," is an email your delegates are able to contact you at"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"chain-id")," is whatever chain-id you are working with (in the osmosis mainnet case it is osmosis-1)"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"commission-rate")," is the rate you will charge your delegates (in the example above, 10 percent)"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"commission-max-rate")," is the most you are allowed to charge your delegates (in the example above, 20 percent)"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"commission-max-change-rate")," is how much you can increase your commission rate in a 24 hour period (in the example above, 5 percent per day until reaching the max rate)"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"min-self-delegation")," is the lowest amount of personal funds the validator is required to have in their own validator to stay bonded (in the example above, 500osmo)"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"gas-prices")," is the amount of gas used to send this create-validator transaction")),(0,i.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("p",null,"If you inspect your ",(0,i.kt)("inlineCode",{parentName:"p"},"create-validator")," transaction in the explorer, and see the following error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"out of gas in location: WritePerByte; gasWanted: 177140, gasUsed: 177979: out of gas\n")),(0,i.kt)("p",null,"Please try subsituting:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'--gas="auto" \\\n--gas-prices="0.0025uosmo"\n')),(0,i.kt)("p",null,"with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--gas=<value significantly larger than gasUsed value from the error>\n")),(0,i.kt)("h2",{id:"track-validator-active-set"},"Track Validator Active Set"),(0,i.kt)("p",null,"To see the current validator active set:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd query staking validators --limit 300 -o json | jq -r '.validators[] |\n[.operator_address, .status, (.tokens|tonumber / pow(10; 6)),\n.commission.update_time[0:19], .description.moniker] | @csv' | column -t -s\",\"\n")),(0,i.kt)("p",null,"You can search for your specific moniker by adding grep MONIKER at the end:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd query staking validators --limit 300 -o json | jq -r '.validators[] |\n[.operator_address, .status, (.tokens|tonumber / pow(10; 6)),\n.commission.update_time[0:19], .description.moniker] | @csv' | column -t -s\",\" | grep Wosmongton\n")),(0,i.kt)("p",null,"If your bond status is ",(0,i.kt)("inlineCode",{parentName:"p"},"BOND_STATUS_BONDED"),", congratulations, your validator is part of the active validator set!"),(0,i.kt)("h2",{id:"track-validator-signing"},"Track Validator Signing"),(0,i.kt)("p",null,"To track your validator's signing history, copy the validator public key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd tendermint show-validator\n")),(0,i.kt)("p",null,"Use your validators public key queried above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd query slashing signing-info [validator-pubkey] --chain-id osmo-test-4\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'osmosisd query slashing signing-info \'{"@type":"/cosmos.crypto.ed25519.PubKey","key":"HlixoxNZBPq4pBOYEimtSq9Ak4peBISVsIbI5ZHrEAU="}\' --chain-id osmo-test-4\n')))}c.isMDXComponent=!0}}]);