(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{485:function(s,t,a){"use strict";a.r(t);var e=a(8),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"using-tmkms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-tmkms"}},[s._v("#")]),s._v(" Using TMKMS")]),s._v(" "),a("p",[s._v("The Tendermint Key Management System (or TMKMS) should be used by any validator currently or intending to be in the active validator set. This application mitigates the risk of double-signing and provides high-availability to validator keys while keeping these keys on a separate physical host. While TMKMS can be used on the same machine as the validator, it is recommended to be on a separate host.")]),s._v(" "),a("h2",{attrs:{id:"prepare-tmkms-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-tmkms-dependencies"}},[s._v("#")]),s._v(" Prepare TMKMS Dependencies")]),s._v(" "),a("p",[s._v("Start by opening the node you intend to run TMKMS (not the node you validate on) and install the following dependencies:\n"),a("br")]),s._v(" "),a("p",[a("strong",[s._v("Rust")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" --proto "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'=https'")]),s._v(" --tlsv1.2 -sSf https://sh.rustup.rs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.cargo/env\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("br"),s._v(" "),a("p",[a("strong",[s._v("GCC")])]),s._v(" "),a("tabs",{attrs:{options:{useUrlFragment:!1}}},[a("tab",{attrs:{name:"Ubuntu"}},[a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" build-essential ufw "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" jq snapd --yes\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("tab",{attrs:{name:"Mac"}},[a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])],1),s._v(" "),a("p",[a("strong",[s._v("Libusb")])]),s._v(" "),a("tabs",{attrs:{options:{useUrlFragment:!1}}},[a("tab",{attrs:{name:"Ubuntu"}},[a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libusb-1.0-0-dev\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("tab",{attrs:{name:"Mac"}},[a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" libusb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])],1),s._v(" "),a("p",[s._v("If on x86_64 architecture:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RUSTFLAGS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("-Ctarget-feature"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("+aes,+ssse3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"setup-tmkms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-tmkms"}},[s._v("#")]),s._v(" Setup TMKMS")]),s._v(" "),a("p",[s._v("In this example, we will be compiling from the github source code using the "),a("code",[s._v("--features=softsign")]),s._v(" flag, however you may use "),a("code",[s._v("--features=yubihsm")]),s._v(" if you want to use a yubikey (ledger support is not working properly at the moment, and this guide will not go into using yubihsm).")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/iqlusioninc/tmkms.git\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/tmkms\ncargo "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" tmkms --features"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("softsign\ntmkms init config\ntmkms softsign keygen ./config/secrets/secret_connection_key\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("Now we will transfer your validator private key from your validator to your VM running TMKMS. You can do this manually or though scp. I will use scp in this example (the validator has the IP of 123.456.32.123):")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" user@123.456.32.123:~/.osmosisd/config/priv_validator_key.json ~/tmkms/config/secrets\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Then, import the private validator key into tmkms:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("tmkms softsign "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/tmkms/config/secrets/priv_validator_key.json "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/tmkms/config/secrets/priv_validator_key\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Please note at this point, you could delete the "),a("code",[s._v("priv_validator_key.json")]),s._v(" from both your validator node and tmkms node and store it safely offline in case of an emergency. This newly created "),a("code",[s._v("priv_validator_key")]),s._v(" will be what TMKMS will use to sign for your validator.")]),s._v(" "),a("p",[s._v("Now, modify the "),a("code",[s._v("tmkms.toml")]),s._v(" file")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/tmkms/config/tmkms.toml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("In this example, my validator has the IP address of 123.456.32.123 and we will be using port 26659 to feed the validator key to the validator. We will also be using chain_id "),a("code",[s._v("osmosis-1")]),s._v(", but if you are doing this on the testnet be sure to use "),a("code",[s._v("osmo-test-4")]),s._v(" instead:")]),s._v(" "),a("div",{staticClass:"language-toml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Tendermint KMS configuration file")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Chain Configuration")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### Cosmos Hub Network")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("chain")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"osmosis-1"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("key_format")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bech32"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("account_key_prefix")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"osmopub"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("consensus_key_prefix")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"osmovalconspub"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("state_file")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/root/tmkms/config/state/priv_validator_state.json"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Signing Provider Configuration")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### Software-based Signer Configuration")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("providers.softsign")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("chain_ids")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"osmosis-1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("key_type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"consensus"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("path")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/root/tmkms/config/secrets/priv_validator_key"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Validator Configuration")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token table class-name"}},[s._v("validator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("chain_id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"osmosis-1"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("addr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tcp://123.456.32.123:26659"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("secret_key")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/root/tmkms/config/secrets/secret_connection_key"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("protocol_version")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"v0.34"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("reconnect")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br")])]),a("p",[s._v("Now, modify your validators "),a("code",[s._v("config.toml")]),s._v(" to use the port you selected in the "),a("code",[s._v("tmkms.toml")]),s._v(" file:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.osmosisd/config/config.toml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-toml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key property"}},[s._v("priv_validator_laddr")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tcp://0.0.0.0:26659"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("It is also recommended to comment out the "),a("code",[s._v("priv_validator_key_file")]),s._v(" line and the "),a("code",[s._v("priv_validator_state_file")]),s._v(" line:")]),s._v(" "),a("div",{staticClass:"language-toml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-toml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Path to the JSON file containing the private key to use as a validator in the consensus protocol")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# priv_validator_key_file = "config/priv_validator_key.json"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Path to the JSON file containing the last sign state of a validator")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# priv_validator_state_file = "data/priv_validator_state.json"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("Next, stop the validator. Move back to your VM running TMKMS and start it:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("tmkms start -c "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/tmkms/config/tmkms.toml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("You will see error logs like the following:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("2022-03-08T23:42:37.926816Z  INFO tmkms::commands::start: tmkms 0.11.0 starting up...\n2022-03-08T23:42:37.926968Z  INFO tmkms::keyring: [keyring:softsign] added consensus Ed25519 key: osmovalconspub1zcjduepq2qfkp3ahrhaafzuqglme9mares0eluj58xr6cy7c37cdmzq0eecqk0yehr\n2022-03-08T23:42:37.927216Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e\n2022-03-08T23:42:37.929454Z ERROR tmkms::client: [osmosis-1@tcp://123.456.32.123:26659] I/O error: Connection refused (os error 111)\n2022-03-08T23:42:38.929746Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e\n2022-03-08T23:42:38.931428Z ERROR tmkms::client: [osmosis-1@tcp://123.456.32.123:26659] I/O error: Connection refused (os error 111)\n2022-03-08T23:42:39.931729Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e\n2022-03-08T23:42:39.932417Z ERROR tmkms::client: [osmosis-1@tcp://123.456.32.123:26659] I/O error: Connection refused (os error 111)\n2022-03-08T23:42:40.932732Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e\n2022-03-08T23:42:40.933425Z ERROR tmkms::client: [osmosis-1@tcp://123.456.32.123:26659] I/O error: Connection refused (os error 111)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("Now, start your osmosis validator on the validator node:")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("osmosisd start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Your TMKMS node will now show logs like the following:")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("2022-03-08T23:46:06.208451Z  INFO tmkms::connection::tcp: KMS node ID: 948f8fee83f7715f99b8b8a53d746ef00e7b0d9e\n2022-03-08T23:46:06.210568Z  INFO tmkms::session: [osmosis-1@tcp://164.92.136.160:26659] connected to validator successfully\n2022-03-08T23:46:06.210604Z  WARN tmkms::session: [osmosis-1@tcp://164.92.136.160:26659]: unverified validator peer ID! (ba44dd36899602e255b04e3608e5ef0fe4bc5f5b)\n2022-03-08T23:46:15.929787Z  INFO tmkms::session: [osmosis-1@tcp://164.92.136.160:26659] signed PreCommit:<nil> at h/r/s 3399910/0/2 (0 ms)\n2022-03-08T23:46:17.344579Z  INFO tmkms::session: [osmosis-1@tcp://164.92.136.160:26659] signed PreCommit:<nil> at h/r/s 3399911/0/2 (0 ms)\n2022-03-08T23:46:22.367627Z  INFO tmkms::session: [osmosis-1@tcp://164.92.136.160:26659] signed PreCommit:<nil> at h/r/s 3399912/0/2 (0 ms)\n2022-03-08T23:46:27.409777Z  INFO tmkms::session: [osmosis-1@tcp://164.92.136.160:26659] signed PreCommit:<nil> at h/r/s 3399913/0/2 (0 ms)\n2022-03-08T23:46:32.442300Z  INFO tmkms::session: [osmosis-1@tcp://164.92.136.160:26659] signed PreCommit:<nil> at h/r/s 3399914/0/2 (0 ms)\n2022-03-08T23:46:37.452162Z  INFO tmkms::session: [osmosis-1@tcp://164.92.136.160:26659] signed PreCommit:<nil> at h/r/s 3399915/0/2 (0 ms)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("You should now be signing blocks! If you cancel the TMKMS process, you will no longer sign blocks and will stop syncing. If you restart the TMKMS process, your validator node will continue to sync from where it left off.")]),s._v(" "),a("h2",{attrs:{id:"final-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#final-notes"}},[s._v("#")]),s._v(" Final Notes")]),s._v(" "),a("p",[s._v("Please note that this is a bare minimum setup. More robust settings such as setting up a firewall to only allow your TMKMS node to get through the priv_validator_laddr port would make your validator even more secure.")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);