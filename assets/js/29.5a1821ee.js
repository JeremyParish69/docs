(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{477:function(s,a,e){"use strict";e.r(a);var t=e(8),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"submit-a-wasm-governance-proposal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#submit-a-wasm-governance-proposal"}},[s._v("#")]),s._v(" Submit a wasm Governance Proposal")]),s._v(" "),e("p",[s._v("The following is a quick guide to provide a basic example on how submit a wasm binary proposal in Osmosis. This particular example will be with localOsmosis but it can also be used with testnet.")]),s._v(" "),e("h2",{attrs:{id:"localosmosis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#localosmosis"}},[s._v("#")]),s._v(" Localosmosis")]),s._v(" "),e("p",[s._v("The easiest way to setup your localOsmosis is by downloading the "),e("a",{attrs:{href:"https://get.osmosis.zone/",target:"_blank",rel:"noopener noreferrer"}},[s._v("automated installer"),e("OutboundLink")],1),s._v(". You can learn more about localOsmosis by reading the "),e("a",{attrs:{href:"https://github.com/osmosis-labs/localosmosis",target:"_blank",rel:"noopener noreferrer"}},[s._v("README"),e("OutboundLink")],1),s._v(" in the official repo.")]),s._v(" "),e("p",[s._v("Run the following and choose option #3.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl -sL https://get.osmosis.zone/install > i.py && python3 i.py\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://hackmd.io/_uploads/SybyH7A8q.png",alt:""}})]),s._v(" "),e("h3",{attrs:{id:"start-localosmosis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-localosmosis"}},[s._v("#")]),s._v(" Start localOsmosis")]),s._v(" "),e("p",[s._v("Inside a separate bash window start your localOsmosis which was installed in ~/localosmosis")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cd ~/localosmosis\ndocker-compose up\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("You will start seeing LocalOsmosis block activity in your terminal. Keep LocalOsmosis running while you perform the next steps in a new terminal window.")]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),e("p",[s._v("If you had previously installed localOsmosis, it's a good idea to start fresh and delete ~/localosmosis "),e("code",[s._v("rm -rf ~/localosmosis")]),s._v(" before installing it again.")])]),s._v(" "),e("h2",{attrs:{id:"download-sample-contract"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download-sample-contract"}},[s._v("#")]),s._v(" Download sample contract")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl -s -L -O https://github.com/CosmWasm/cw-plus/releases/download/v0.12.1/cw20_base.wasm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"define-variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#define-variables"}},[s._v("#")]),s._v(" Define variables")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("CHAIN_ID=localosmosis\nCONTRACT=cw20_base\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"define-proposal-id"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#define-proposal-id"}},[s._v("#")]),s._v(" Define proposal ID")]),s._v(" "),e("p",[s._v("We cannot really do this progamatically. Proposal "),e("code",[s._v("1")]),s._v(" will come out after submitting it for the first time on a new chain. You can always update this manually when testing multiple times on the same state.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("PROPOSAL=1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"create-local-wallet-from-seed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-local-wallet-from-seed"}},[s._v("#")]),s._v(" Create local wallet from seed")]),s._v(" "),e("p",[s._v("Note that this seed is already part of localOsmosis as shown "),e("a",{attrs:{href:"https://github.com/osmosis-labs/localosmosis#accounts",target:"_blank",rel:"noopener noreferrer"}},[s._v("here"),e("OutboundLink")],1),s._v(".")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('echo "satisfy adjust timber high purchase tuition stool faith fine install that you unaware feed domain license impose boss human eager hat rent enjoy dawn" | osmosisd keys add validator --keyring-backend test --recover\nVAL=$(osmosisd keys show -a validator --keyring-backend test)\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"submit-proposal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#submit-proposal"}},[s._v("#")]),s._v(" Submit proposal")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('osmosisd tx gov submit-proposal wasm-store $CONTRACT.wasm --title "Add $CONTRACT" \\\n  --description "Let\'s upload this contract" --run-as $VAL \\\n  --from validator --keyring-backend test --chain-id $CHAIN_ID -y -b block \\\n  --gas 9000000 --gas-prices 0.025uosmo\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"query-proposal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-proposal"}},[s._v("#")]),s._v(" Query proposal")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("osmosisd query gov proposal $PROPOSAL\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"deposit-on-proposal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deposit-on-proposal"}},[s._v("#")]),s._v(" Deposit on proposal")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("osmosisd tx gov deposit $PROPOSAL 10000000uosmo --from validator --keyring-backend test \\\n    --chain-id $CHAIN_ID -y -b block --gas 6000000 --gas-prices 0.025uosmo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"vote"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vote"}},[s._v("#")]),s._v(" Vote")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("osmosisd tx gov vote $PROPOSAL yes --from validator --keyring-backend test \\\n    --chain-id $CHAIN_ID -y -b block --gas 600000 --gas-prices 0.025uosmo\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"check-the-results"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#check-the-results"}},[s._v("#")]),s._v(" Check the results")]),s._v(" "),e("p",[s._v("Wait 1 or two minutes for the results to show up.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("osmosisd query wasm list-code\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"learn-more"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#learn-more"}},[s._v("#")]),s._v(" Learn more:")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/CosmWasm/wasmd/blob/main/x/wasm/Governance.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/CosmWasm/wasmd/blob/main/x/wasm/Governance.md"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);