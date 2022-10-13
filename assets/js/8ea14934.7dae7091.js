"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[3918],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=n.createContext({}),c=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(r.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,r=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=o,h=p["".concat(r,".").concat(d)]||p[d]||m[d]||s;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,l=new Array(s);l[0]=p;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<s;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},650:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const s={},l="Cosmwasm testnet deployment",i={unversionedId:"testnet/cosmwasm-deployment",id:"testnet/cosmwasm-deployment",title:"Cosmwasm testnet deployment",description:"The following is a quick guide that shows the basics of deploying a contract to a Osmosis Testnet (osmo-test-4). It covers:",source:"@site/docs/cosmwasm/testnet/cosmwasm-deployment.md",sourceDirName:"testnet",slug:"/testnet/cosmwasm-deployment",permalink:"/cosmwasm/testnet/cosmwasm-deployment",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/cosmwasm/testnet/cosmwasm-deployment.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cosmwasm & Beaker",permalink:"/cosmwasm/testnet/cosmwasm-beaker"},next:{title:"Verifying Smart Contracts",permalink:"/cosmwasm/cosmwasm-verify-contract"}},r={},c=[{value:"Initial Setup",id:"initial-setup",level:2},{value:"Setup Rust",id:"setup-rust",level:3},{value:"Setup Osmosis Testnet",id:"setup-osmosis-testnet",level:3},{value:"Setup the Client",id:"setup-the-client",level:3},{value:"faucet",id:"faucet",level:3},{value:"Official Faucet",id:"official-faucet",level:4},{value:"Discord Faucet",id:"discord-faucet",level:4},{value:"Deploy a Smart Contract",id:"deploy-a-smart-contract",level:2},{value:"Clone cw-template",id:"clone-cw-template",level:3},{value:"Compile the wasm contract with stable toolchain",id:"compile-the-wasm-contract-with-stable-toolchain",level:3},{value:"Optimized Compilation",id:"optimized-compilation",level:3},{value:"Store to Osmosis Testnet chain",id:"store-to-osmosis-testnet-chain",level:3},{value:"Instantiate the contract",id:"instantiate-the-contract",level:3},{value:"Execute the Contract",id:"execute-the-contract",level:2},{value:"Get contract\u2019s count",id:"get-contracts-count",level:3},{value:"Increment contract\u2019s count",id:"increment-contracts-count",level:3},{value:"Reset contract\u2019s count",id:"reset-contracts-count",level:3},{value:"Osmo Contract Explorer",id:"osmo-contract-explorer",level:2},{value:"Upload the code",id:"upload-the-code",level:3},{value:"Execute the contract",id:"execute-the-contract-1",level:3},{value:"get_count",id:"get_count",level:4},{value:"increment",id:"increment",level:4},{value:"reset",id:"reset",level:4}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cosmwasm-testnet-deployment"},"Cosmwasm testnet deployment"),(0,o.kt)("p",null,"The following is a quick guide that shows the basics of deploying a contract to a Osmosis Testnet (",(0,o.kt)("inlineCode",{parentName:"p"},"osmo-test-4"),"). It covers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Initial Setup",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Setup Rust"),(0,o.kt)("li",{parentName:"ul"},"Setup Osmosis Testnet via Osmosis Installer"),(0,o.kt)("li",{parentName:"ul"},"Setup Client"))),(0,o.kt)("li",{parentName:"ul"},"Deploy a Smart Contract",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Clone cw-template"),(0,o.kt)("li",{parentName:"ul"},"Compile the wasm contract with stable toolchain"),(0,o.kt)("li",{parentName:"ul"},"Optimized Compilation"),(0,o.kt)("li",{parentName:"ul"},"Store to Osmosis Testnet chain"),(0,o.kt)("li",{parentName:"ul"},"Instantiate the contract"))),(0,o.kt)("li",{parentName:"ul"},"Execute the Contract",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Get contract\u2019s count"),(0,o.kt)("li",{parentName:"ul"},"Increment contract\u2019s count"),(0,o.kt)("li",{parentName:"ul"},"Reset contract\u2019s count"))),(0,o.kt)("li",{parentName:"ul"},"Osmo Contract Explorer",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Upload the code"),(0,o.kt)("li",{parentName:"ul"},"Execute the contract")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Please note this a detailed guide on how to deploy via ",(0,o.kt)("inlineCode",{parentName:"p"},"osmosisd"),", it also covers additional tooling and useful tips.  You can also deploy to testnet with ",(0,o.kt)("a",{parentName:"p",href:"/cosmwasm/testnet/cosmwasm-beaker"},"Beaker")," with a couple of commands. ")),(0,o.kt)("h2",{id:"initial-setup"},"Initial Setup"),(0,o.kt)("p",null,"This tutorial uses a Osmosis specific development tools to deploy contracts to Osmosis Testnet(",(0,o.kt)("inlineCode",{parentName:"p"},"osmo-test-4"),")."),(0,o.kt)("h3",{id:"setup-rust"},"Setup Rust"),(0,o.kt)("p",null,"Rust is the main programming language used for CosmWasm smart contracts. While WASM smart contracts can theoretically be written in any programming language, CosmWasm libraries and tooling work best with Rust."),(0,o.kt)("p",null,"First, ",(0,o.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"install rustup"),"."),(0,o.kt)("p",null,"Then run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# 1. Set 'stable' as the default release channel:\nrustup default stable\ncargo version\n# If this is lower than 1.50.0+, update\nrustup update stable\n\n# 2. Add WASM as the compilation target:\nrustup target list --installed\nrustup target add wasm32-unknown-unknown\n\n# 3. Install the following packages to generate the contract:\ncargo install cargo-generate --features vendored-openssl\ncargo install cargo-run-script\n")),(0,o.kt)("h3",{id:"setup-osmosis-testnet"},"Setup Osmosis Testnet"),(0,o.kt)("p",null,"You can easily set up an Osmosis Testnet environment using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis-installer"},"Osmosis Installer"),". "),(0,o.kt)("p",null,"Run the following and choose option #2 (Client Node) and #2 (Testnet) in order."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://get.osmosis.zone/install > i.py && python3 i.py\n")),(0,o.kt)("p",null,"Now you have successfully completed setting up an Osmosis client node in Testnet. In order to use ",(0,o.kt)("inlineCode",{parentName:"p"},"osmosisd")," from the cli, either reload your terminal or refresh your profile with : ",(0,o.kt)("inlineCode",{parentName:"p"},"\u2018source ~/.profile\u2019")),(0,o.kt)("h3",{id:"setup-the-client"},"Setup the Client"),(0,o.kt)("p",null,"First, create a wallet with the command following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# add wallets for testing\nosmosisd keys add wallet\n")),(0,o.kt)("p",null,"When you run the commands above, ",(0,o.kt)("inlineCode",{parentName:"p"},"osmosisd")," will prompt you all the information related to that wallet in YAML (.yml) format."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'- name: wallet\n  type: local\n  address: osmo1v9yrqx8aaddlna29zxngr4ye3jnxtpprrej532\n  pubkey: \'{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"AmKFqbczx7j/sYlqO2irXUSsQMdEN9Ugg1W2AOm7knh3"}\'\n  mnemonic: ""\n\n**Important** write this mnemonic phrase in a safe place.\nIt is the only way to recover your account if you ever forget your password.\n\ndivert cliff issue spirit penalty chief improve neck enjoy pipe sing loop inherit behind space next tourist acid axis easy never ball enemy moment\n')),(0,o.kt)("p",null,"You need some tokens named ",(0,o.kt)("inlineCode",{parentName:"p"},"OSMO"),"(",(0,o.kt)("inlineCode",{parentName:"p"},"uosmo"),") in your address to interact with the network."),(0,o.kt)("h3",{id:"faucet"},"faucet"),(0,o.kt)("h4",{id:"official-faucet"},"Official Faucet"),(0,o.kt)("p",null,"You can request tokens from the official faucet at ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.osmosis.zone"},"faucet.osmosis.zone")," "),(0,o.kt)("h4",{id:"discord-faucet"},"Discord Faucet"),(0,o.kt)("p",null,"Youcan also participate in the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/invite/osmosis"},"Osmosis discord")," to request a faucet of the Osmosis Testnet. After gaining access to the testnet channel on the ",(0,o.kt)("inlineCode",{parentName:"p"},"#roles")," channel of the discord, you can request a testnet token by sending the following message on the ",(0,o.kt)("inlineCode",{parentName:"p"},"#faucet")," channel:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$request <address>\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70956926/172293039-b832fd96-d62d-44de-9889-ee400a9ec815.png",alt:null}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70956926/172293080-aee186ad-ef51-43bb-ac6e-1a8b65c9ce04.png",alt:null})),(0,o.kt)("p",null,"Then, you can check that your faucet request has been successful by checking the balance of your wallet bank account by trying the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"osmosisd query bank balances $(osmosisd keys show -a wallet)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"osmosisd query bank balances [address]")," commands query the total balance of an account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"osmosisd keys show -a wallet")," commands returns the address of the wallet that you created.")),(0,o.kt)("h2",{id:"deploy-a-smart-contract"},"Deploy a Smart Contract"),(0,o.kt)("h3",{id:"clone-cw-template"},"Clone cw-template"),(0,o.kt)("p",null,"For this example, we will use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/cw-tpl-osmosis"},(0,o.kt)("strong",{parentName:"a"},"cw-template"))," repo with counter example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cargo generate --git https://github.com/osmosis-labs/cw-tpl-osmosis.git --name my-first-contract\ncd my-first-contract\n")),(0,o.kt)("h3",{id:"compile-the-wasm-contract-with-stable-toolchain"},"Compile the wasm contract with stable toolchain"),(0,o.kt)("p",null,"To deploy smart contracts, you must compile the code and make it an executable wasm binary file. We will compile the wasm contract with stable toolchain. "),(0,o.kt)("p",null,"Compile using the command below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Set 'stable' as the default release channel:\nrustup default stable\ncargo wasm\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"toolchain")," means the compiler of  Rust, and rust has three release channels: ",(0,o.kt)("inlineCode",{parentName:"li"},"stable"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"beta"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"nightly"),", of which the ",(0,o.kt)("inlineCode",{parentName:"li"},"stable")," channel is the most recently released version. ",(0,o.kt)("inlineCode",{parentName:"li"},"rustup")," helps you manage these different versions easily."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cargo")," is the ",(0,o.kt)("em",{parentName:"li"},"Rust package manager"),". In the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/InterWasm/cw-template/blob/main/.cargo/config"},".cargo/config"),", you can view the wasm compilation options as follows:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'wasm = "build --release --target wasm32-unknown-unknown"\n')),"  So when we run the ",(0,o.kt)("inlineCode",{parentName:"li"},"cargo wasm")," command, the ",(0,o.kt)("inlineCode",{parentName:"li"},"cargo build --release \u2014-target wasm32-unknown-unknown")," command is executed according to the option in the config file above.\n")),(0,o.kt)("p",null,"After this compiles, it should produce a file in ",(0,o.kt)("inlineCode",{parentName:"p"},"target/wasm32-unknown-unknown/release/my_first_contract.wasm"),".  If you check the size of the file by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ls -lh")," command, it shows around ",(0,o.kt)("inlineCode",{parentName:"p"},"1.8M"),". This is a release build, but not stripped of all unneeded code. To produce a much smaller version, you can run this which tells the compiler to strip all unused code out:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"RUSTFLAGS='-C link-arg=-s' cargo wasm\n")),(0,o.kt)("p",null,"This produces a file about ",(0,o.kt)("inlineCode",{parentName:"p"},"155K"),". To reduce gas costs, the binary size should be as small as possible. This will result in a less costly deployment, and lower fees on every interaction."),(0,o.kt)("p",null,"Also, if you don\u2019t use compilation optimization, CosmWasm smart contract will not be deployed well due to ",(0,o.kt)("inlineCode",{parentName:"p"},"exceeds limit")," error."),(0,o.kt)("h3",{id:"optimized-compilation"},"Optimized Compilation"),(0,o.kt)("p",null,"You can do further optimization using ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/rust-optimizer"},"rust-optimizer"),". ",(0,o.kt)("strong",{parentName:"p"},"rust-optimizer")," produces reproducible builds of CosmWasm smart contracts and does heavy optimization on the build size, using binary stripping and ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm-opt"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo docker run --rm -v "$(pwd)":/code \\\n    --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n    --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n    cosmwasm/rust-optimizer:0.12.6\n')),(0,o.kt)("p",null,"Binary file will be at ",(0,o.kt)("inlineCode",{parentName:"p"},"artifacts/my_first_contract.wasm")," folder and its size will be about ",(0,o.kt)("inlineCode",{parentName:"p"},"130K"),", which is more smaller than when only RUTFLAGS was used."),(0,o.kt)("h3",{id:"store-to-osmosis-testnet-chain"},"Store to Osmosis Testnet chain"),(0,o.kt)("p",null,"We have the wasm binary executable ready. Now it is time to store the code to the Osmosis Testnet blockchain. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# store the code on chain\nRES=$(osmosisd tx wasm store artifacts/my_first_contract.wasm --from wallet --gas-prices 0.1uosmo --gas auto --gas-adjustment 1.3 -y --output json -b block)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"osmosisd tx wasm store")," : upload a wasm binary"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--from")," : name or address of private key with which to sign."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--gas-prices")," : gas prices in decimal format to determine the transaction fee."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--gas"),' : gas limit to set per-transaction. set to "',(0,o.kt)("inlineCode",{parentName:"li"},"auto"),'" to calculate sufficient gas automatically'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--gas-adjustment")," : adjustment factor to be multiplied against the estimate returned by the tx simulation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-y")," : to skip tx broadcasting prompt confirmation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--output")," : output format."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-b")," : transaction broadcasting mode")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70956926/172293654-7beba11b-ce5f-4979-94e2-19156c6e5b27.png",alt:null})),(0,o.kt)("p",null,"Once that is complete, you can get the ",(0,o.kt)("inlineCode",{parentName:"p"},"CODE_ID")," easily using ",(0,o.kt)("inlineCode",{parentName:"p"},"jq"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"jq")," is an open source that helps extract data from JSON. Install it according to your OS using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Linux\nsudo apt-get install jq\n\n# Mac\nbrew install jq\n")),(0,o.kt)("p",null,"If you are using an operating system other than the one listed above, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/download/"},"official document"),"."),(0,o.kt)("p",null,"Run the following command to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"CODE_ID")," as a variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# get CODE_ID\nCODE_ID=$(echo $RES | jq -r '.logs[0].events[-1].attributes[0].value')\necho $CODE_ID\n")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70956926/172293774-e60b8d0b-a5c3-48db-9c79-4f4f427eb59b.png",alt:null})),(0,o.kt)("h3",{id:"instantiate-the-contract"},"Instantiate the contract"),(0,o.kt)("p",null,"We can now create an instance of this wasm contract. First, set the initial state of the instance in the ",(0,o.kt)("inlineCode",{parentName:"p"},"INIT")," variable and run the ",(0,o.kt)("inlineCode",{parentName:"p"},"instantiate")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# set the initial state of the instance\nINIT=\'{"count":100}\'\n\n# instantiate the contract\nosmosisd tx wasm instantiate $CODE_ID "$INIT" \\\n    --from wallet --label "my first contract" --gas-prices 0.025uosmo --gas auto --gas-adjustment 1.3 -b block -y --no-admin\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"osmosisd tx wasm instantiate")," : instantiate a wasm contract using CODE_ID of the uploaded binary."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--label")," : human-readable name for this contract in lists."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--no-admin")," : you must set this explicitly if you don\u2019t want an admin.")),(0,o.kt)("p",null,"If you have succeeded in instantiating the contract, you can search for output ",(0,o.kt)("inlineCode",{parentName:"p"},"txhash")," in ",(0,o.kt)("a",{parentName:"p",href:"https://testnet.ping.pub/osmosis"},"Osmosis Explorer")," to verify your deployment."),(0,o.kt)("p",null,"Get the contract address using the command following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"CONTRACT_ADDR=$(osmosisd query wasm list-contract-by-code $CODE_ID --output json | jq -r '.contracts[0]')\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"osmosisd query wasm list-contract-by-code")," : list wasm all bytecode on the chain for given code id")),(0,o.kt)("h2",{id:"execute-the-contract"},"Execute the Contract"),(0,o.kt)("p",null,"Now, let's see if the contract we deployed works well."),(0,o.kt)("h3",{id:"get-contracts-count"},"Get contract\u2019s count"),(0,o.kt)("p",null,"Send a ",(0,o.kt)("inlineCode",{parentName:"p"},"get_count")," query to check the count value. The previously set ",(0,o.kt)("inlineCode",{parentName:"p"},"INIT")," state is output as it is.: ",(0,o.kt)("inlineCode",{parentName:"p"},'{"data":{"count":100}}')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'QUERY=\'{"get_count":{}}\'\nosmosisd query wasm contract-state smart $CONTRACT_ADDR "$QUERY" --output json\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"osmosisd query wasm contract-state smart")," : calls contract with given address with query data and prints the returned result")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70956926/172295110-e3ae455c-9681-41a4-abf2-ac33288bb13c.png",alt:null})),(0,o.kt)("h3",{id:"increment-contracts-count"},"Increment contract\u2019s count"),(0,o.kt)("p",null,"This time, let's send an ",(0,o.kt)("inlineCode",{parentName:"p"},"increment")," transaction that increases the count value by +1. Because the transaction changes the internal state of the contract, you must pay gas fees."),(0,o.kt)("p",null,"If you run the ",(0,o.kt)("inlineCode",{parentName:"p"},"get_count")," query again after sending the ",(0,o.kt)("inlineCode",{parentName:"p"},"increment")," transaction, you can see that +1 has increased from the previous count value."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'TRY_INCREMENT=\'{"increment": {}}\'\nosmosisd tx wasm execute $CONTRACT_ADDR "$TRY_INCREMENT" --from wallet --gas-prices 0.025uosmo --gas auto --gas-adjustment 1.3 -y\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"osmosisd tx wasm execute")," : execute a command on a wasm contract")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70956926/172295183-89016c41-7832-41c4-b4c7-a2cf9d441256.png",alt:null})),(0,o.kt)("h3",{id:"reset-contracts-count"},"Reset contract\u2019s count"),(0,o.kt)("p",null,"Lastly, let\u2019s send a ",(0,o.kt)("inlineCode",{parentName:"p"},"reset")," transaction. Like increment, reset transaction also changes the internal state of contract, so you must pay gas fees."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'RESET=\'{"reset": {"count": 0}}\'\nosmosisd tx wasm execute $CONTRACT_ADDR "$RESET" --from wallet --gas-prices 0.025uosmo --gas auto --gas-adjustment 1.3 -y\n')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70956926/172295239-ddf95369-5b9a-4096-a84d-aecc1ef30484.png",alt:null})),(0,o.kt)("h2",{id:"osmo-contract-explorer"},"Osmo Contract Explorer"),(0,o.kt)("p",null,"You can also instantiate the contract using intuitive GUI in ",(0,o.kt)("a",{parentName:"p",href:"https://osmosis-contracts.web.app/#/codes"},"Osmo Contract Explorer"),"."),(0,o.kt)("p",null,"Let\u2019s do it together"),(0,o.kt)("h3",{id:"upload-the-code"},"Upload the code"),(0,o.kt)("p",null,"When you access the site, you will see a list of the code we uploaded to the chain and the contract instances created using the corresponding CODE_ID."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70956926/172296987-b8df32a4-f50e-4546-8773-a257a21fb92d.png",alt:null})),(0,o.kt)("p",null,"First, Login by connecting your wallet. Then click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Create a Contract")," button and enter the initial state of the instance in ",(0,o.kt)("inlineCode",{parentName:"p"},"Instantiate Message"),". After also entering label and admin, you can easily create a contract instance by clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"Instantiate Contract")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70956926/172297151-64146bba-d7d4-444f-9a57-06dd55f62db8.png",alt:null})),(0,o.kt)("h3",{id:"execute-the-contract-1"},"Execute the contract"),(0,o.kt)("p",null,"Now, let's send a transaction to the contract to see if the contract works well."),(0,o.kt)("p",null,"You can send a query in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Read Contract")," section and you can send transactions that change the internal state of the contract in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Write Contract")," section."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70956926/172298609-95a0269d-ae58-472b-b02e-c2b1b5f3c4e6.png",alt:null})),(0,o.kt)("h4",{id:"get_count"},"get_count"),(0,o.kt)("p",null,"In the Read Contract section, type ",(0,o.kt)("inlineCode",{parentName:"p"},"get_count")," messages and press the ",(0,o.kt)("inlineCode",{parentName:"p"},"Run query")," button to get the count value."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70956926/172300337-eda6f76a-ad31-45d3-a5a1-8d324c2bc966.png",alt:null})),(0,o.kt)("h4",{id:"increment"},"increment"),(0,o.kt)("p",null,"In the Write Contract section, type ",(0,o.kt)("inlineCode",{parentName:"p"},"increment")," messages and the OSMO to pay and click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Execute Contract")," button to execute the transaction."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70956926/172300637-bb29452d-1d23-4c30-8cbb-d72f358b490e.png",alt:null})),(0,o.kt)("h4",{id:"reset"},"reset"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/70956926/172300485-4d66b5a9-1082-48da-ba1c-b979206f277e.png",alt:null})),(0,o.kt)("p",null,"Congratulations! Now you deployed your wasm smart contract on Osmosis Testnet successfully."))}m.isMDXComponent=!0}}]);