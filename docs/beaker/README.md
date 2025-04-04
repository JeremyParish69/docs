# Beaker

<p align="center">
<a href="https://docs.osmosis.zone/cosmwasm/">
    <img src="/icons/beaker.svg" alt="Beaker logo" title="Beaker" width="150" align="center" height="150" />
</a>
</p>

<p align="center" width="100%">
    <img  height="20" src="https://github.com/osmosis-labs/beaker/actions/workflows/doctest.yml/badge.svg"/>
    <img height="20" src="https://github.com/osmosis-labs/beaker/actions/workflows/lint.yml/badge.svg"/>
    <a href="https://github.com/osmosis-labs/beaker/blob/main/LICENSE-APACHE"><img height="20" src="https://img.shields.io/badge/license-APACHE-blue.svg"/></a>
    <a href="https://github.com/osmosis-labs/beaker/blob/main/LICENSE-MIT"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"/></a>
    <a href="https://deps.rs/repo/github/osmosis-labs/beaker"><img height="20" src="https://deps.rs/repo/github/osmosis-labs/beaker/status.svg"/></a>
    <a href="https://crates.io/crates/beaker"><img height="20" src="https://img.shields.io/crates/v/beaker.svg"/></a>
</p>

[Beaker](https://github.com/osmosis-labs/beaker) makes it easy to scaffold a new cosmwasm app, with all of the dependencies for osmosis hooked up, interactive console, and a sample front-end at the ready.

---

## Table of Contents

### Getting Started

- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [Scaffolding your new dapp project](#scaffolding-your-new-dapp-project)
  - [`frontend` and `contracts`](#frontend-and-contracts)
  - [`Cargo.toml`](#cargotoml)
  - [`Beaker.toml`](#beakertoml)
  - [`.beaker`](#beaker-1)
- [Your first CosmWasm contract with Beaker](#your-first-cosmwasm-contract-with-beaker)
- [Deploy contract on LocalOsmosis](#deploy-contract-on-localosmosis)
- [Contract Upgrade](#contract-upgrade)
- [Signers](#signers)
- [Console](#console)
- [Typescript SDK Generation](#typescript-sdk-generation)
- [Frontend](#frontend)

### Reference

- [Command](./commands/README.md)
- [Config](./config/README.md)

---

## Getting Started

This section is intended to give you an introduction to `Beaker`, for more detailed reference, you can find them [here](./commands/README.md).



### Prerequisites

- [Rust](https://www.rust-lang.org/tools/install) for building cosmwasm contract
    - [Rustup](https://rustup.rs/) for dealing with wasm target
- [Docker](https://docs.docker.com/get-docker/) for running wasm `rust-optimizer` and spinning up [LocalOsmosis](https://github.com/osmosis-labs/localosmosis)
- [Node](https://nodejs.org/en/) for frontend related stuffs and `beaker-console`
  - [Yarn](https://yarnpkg.com/) over NPM, since it will not have package resolving issue and causes weird errors down the road



### Installation

Beaker is available via [cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html) which is a rust toolchain. Once cargo is ready on your machine, run:

```sh
cargo install -f beaker # `-f` flag for up-to-date version
```

Now `beaker` is ready to use!

### Scaffolding your new dapp project

In the directory you want your project to reside, run:

```sh
beaker new counter-dapp
```

This will generate new directory called `counter-dapp` which, by default, come from [this template](https://github.com/osmosis-labs/beaker/tree/main/templates/project).

So what's in the template? Let's have a look...

```
.
├── frontend
├── contracts
├── Cargo.toml
├── Beaker.toml
├── .gitignore
└── .beaker
```

#### `frontend` and `contracts`

These should be self explanatory, it's where frontend and contracts are stored. And as you might be able to guess from the name, one project can contain multiple contracts.

#### `Cargo.toml`

There is a `Cargo.toml` here which specifies [cargo workspace](https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html).

```
[workspace]

members = [
  'contracts/*',
]

[profile.release]
...
```

All the crates (rust packages) in contracts directory are included, with unified release profile. With this, when we have to optimize multiple contracts deterministically, we can do that with ease (see [Contracts as Workspace Members section in rust-optimizer](https://github.com/CosmWasm/rust-optimizer#contracts-as-workspace-members)).

#### `Beaker.toml`

This is our configuration file, you can find more information about it [here](config/README.md).

#### `.beaker`

Last but not least, `.beaker` which is the most unusual part. It contains 2 files:

```
├── state.json
└── state.local.json
```

These 2 files have similar functionality, which are containing beaker related state such as `address`, `code-id`, `label` for each contract on each network for later use.

While `state.json` is there for mainnet and testnet state. `state.local.json` is intended to use locally and _being gitignored_ since its state will not make any sense on other's machine.

And I don't think we have to explain about `.gitignore` don't we?

---

### Your first CosmWasm contract with Beaker

After that we can create new contract (the command uses template from [cw-template](https://github.com/InterWasm/cw-template))

```sh
cd counter-dapp
beaker wasm new counter
```

Now your new contract will be available on `contracts/counter`.

If you want to use other contract template, you can change the configuration, for example:

```
# Beaker.toml

[wasm]
template_repo = "https://github.com/osmosis-labs/cw-tpl-osmosis.git"
```

### Deploy contract on LocalOsmosis

LocalOsmosis, as its name suggest, is Osmosis for local development. In the upcoming release, Beaker will have more complete integration with LocalOsmosis, it has to be installed and run separately.

You can install from source by following the instruction at [osmosis-labs/LocalOsmosis](https://github.com/osmosis-labs/LocalOsmosis), or use the official installer and select option 3:

```sh
curl -sL https://get.osmosis.zone/install > i.py && python3 i.py
```

After that, `counter` contract can be deployed (build + store-code + instantiate) using the following command:

```sh
beaker wasm deploy counter --signer-account test1 --no-wasm-opt --raw '{ "count": 0 }'
```

What's happening here equivalent to the following command sequence:

```sh
# build .wasm file
# stored in `target/wasm32-unknown-unknown/release/<CONTRACT_NAME>.wasm`
# `--no-wasm-opt` is suitable for development, explained below
beaker wasm build --no-wasm-opt

# read .wasm in `target/wasm32-unknown-unknown/release/<CONTRACT_NAME>.wasm` due to `--no-wasm-opt` flag
# use `--signer-account test1` which is predefined.
# The list of all predefined accounts are here: https://github.com/osmosis-labs/LocalOsmosis#accounts
# `code-id` is stored in the beaker state, local by default
beaker wasm store-code counter --signer-account test1 --no-wasm-opt

# instantiate counter contract
# with instantiate msg: '{ "count": 0 }'
beaker wasm instantiate counter --signer-account test1 --raw '{ "count": 0 }'
```

The flag `--no-wasm-opt` is skipping [rust-optimizer](https://github.com/CosmWasm/rust-optimizer) for faster development iteration.

For testnet/mainnet deployment, use:

```sh
beaker wasm deploy counter --signer-account <ACCOUNT> --raw '{ "count": 0 }' --network testnet
beaker wasm deploy counter --signer-account <ACCOUNT> --raw '{ "count": 0 }' --network mainnet
```

Instantiate message can be stored for later use:

```sh
mkdir contracts/counter/instantiate-msgs
echo '{ "count": 0 }' > contracts/counter/instantiate-msgs/default.json
beaker wasm deploy counter --signer-account test1 --no-wasm-opt
```

You can find references for [`beaker wasm` subcommand here](commands/beaker_wasm.md).

### Contract Upgrade

Contract upgrade in CosmWasm goes through the following steps:

1. store new code on to the chain
2. broadcast migrate msg, targeting the contract address that wanted to be upgraded with the newly stored code

To make a contract migratable, the contract needs to have proper entrypoint and admin designated.

To create the contract entrypoint for migration, first, define `MigrateMsg` in `msg.rs`, this could have any information you want to pass for migration.

```rust
#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct MigrateMsg {}
```

With MigrateMsg defined we need to update `contract.rs`. First update the import from `create::msg` to include `MigrateMsg`:

```rust
use create::msg::{CountResponse, ExecuteMsg, InstantiateMsg, QueryMsg, MigrateMsg};
```

```rust
#[cfg_attr(not(feature = "library"), entry_point)]
pub fn migrate(_deps: DepsMut, _env: Env, _msg: MigrateMsg) -> StdResult<Response> {
    // perform state update or anything necessary for the migration
    Ok(Response::default())
}
```

Now deploy the contract with admin assigned

```sh
# `--admin signer` use signer address (test1's address in this case) as designated admin
# raw address could be passed in as well
beaker wasm deploy counter --signer-account test1 --no-wasm-opt --raw '{ "count": 0 }' --admin signer
```

Now try to change the execute logic a bit to see if the upgrade works:

```rust
pub fn try_increment(deps: DepsMut) -> Result<Response, ContractError> {
    STATE.update(deps.storage, |mut state| -> Result<_, ContractError> {
        state.count += 1000000000; // 1 -> 1000000000
        Ok(state)
    })?;

    Ok(Response::new().add_attribute("method", "try_increment"))
}
```

With admin as `test1`, only `test1` can upgrade the contract

```sh
beaker wasm upgrade counter --signer-account test1 --raw '{}' --no-wasm-opt
```

Similar to `deploy`, `upgrade` is basically running sequences of commands behind the scene:

```sh
beaker wasm build --no-wasm-opt
beaker wasm store-code counter --signer-account test1 --no-wasm-opt
beaker wasm migrate counter --signer-account test1 --raw '{}'
```

And, like before, `--no-wasm-opt` only means for development. For mainnet, use:

```sh
beaker wasm upgrade counter --signer-account test1 --raw '{}' --network mainnet
```

Migrate message can be stored for later use:

```sh
mkdir contracts/counter/migrate-msgs
echo '{}' > contracts/counter/migrate-msgs/default.json
beaker wasm upgrade counter --signer-account test1 --no-wasm-opt
```

You can find more information about their options [here](commands/beaker_wasm.md).

### Execute Contract Messages

Contract messages can be executed using the `beaker wasm execute` subcommand. For example:
```sh
beaker wasm execute counter --raw '{ "increment": {} }' --signer-account test1
```

### Query Contract State
You can query contract state by submitting query messages with the `beaker wasm query` command. For example:
```sh
beaker wasm query counter --raw '{"get_count": {}}'
```


### Signers

Whenever you run command that requires signing transactions, there are 3 options you can reference your private keys:

- `--signer-account` input of this option refer to the accounts defined in the [config file](config/global.md), which is not encrypted, so it should be used only for testing
- `--signer-mnemonic` input of this option is the raw mnemonic string to construct a signer
- `--signer-private-key` input of this option is the same as `--signer-mnemonic` except it expects base64 encoded private key
- `--signer-keyring` use the OS secure store as backend to securely store your key. To manage them, you can find more information [here](commands/beaker_key.md).

### Console

After deployed, you can play with the deployed contract using:

```sh
beaker console
```

It might prompt you like the following:

```
? Project's Typescript SDK seems to be missing, would you like to generate? 
```

Press `enter` to proceed for now, and we will discuss about it in detail in the [Typescript SDK Generation](#typescript-sdk-generation) section.

This will launch custom node repl, where `contract`, `account` are available.
`contract` contains deployed contract.
`account` contains [pre-defined accounts in localosmosis](https://github.com/osmosis-labs/LocalOsmosis#accounts).

So you can interact with the recently deployed contract like this:

```js
await contract.counter.signer(account.test1).execute({ increment: {} });
await contract.counter.query({ get_count: {} });
```

You can find available methods for the aforementioned instances here:

- [Account](console/classes//Account.md#methods-1)
- [Contract](./console/classes//Contract.md#methods-1)

You can remove `contract` and/or `account` namespace by changing config.

```
# Beaker.toml

[console]
account_namespace = false
contract_namespace = false
```

```js
await counter.signer(test1).execute({ increment: {} });
await counter.query({ get_count: {} });
```



With the Typescript SDK which was previously mentioned, it is used to extend the `Contract` instance with method generated ftom execute and query messages. For example:

```js
await counter.getCount()

sc = counter.signer(test1) // create signing client for `counter` with `test1`

await sc.increment()
await sc.getCount()
```

With this, it's more convenient than the previous interaction method since you can use tab completion for the methods as well.

Beaker console is also allowed to deploy contract, so that you don't another terminal tab to do so.

```js
.deploy counter -- --signer-account test1 --raw '{ "count": 999 }'
```

`.build`, `.storeCode`, `.instantiate` commands are also available and has the same options as Beaker cli command, except that `--no-wasm-opt` are in by default since it is being intended to use in the development phase.

`.help` to see all available commands.

Apart from that, in the console, you can access Beaker's state, configuration and sdk from `state`, `conf` and `sdk` variables accordingly.



### Typescript SDK Generation

Beaker leverage [cosmwasm-typescript-gen](https://github.com/CosmWasm/cosmwasm-typescript-gen) to generate typescript client for cosmwasm contract. By default, Beaker's template prepare `ts/sdk` directory where typescript compiler and bundler are setup, so the generated client definition could be used by `beaker-console`, frontend or published as library for others to use.

To generate sdk for contract, run

```sh
beaker wasm ts-gen counter # replace `counter` with any of contract name
```

With this a package is available in `ts/sdk` with name `<project-name>-sdk` which can be used by any node / js / ts project.

Let's try adding `multiply` method to our contract and see how this works.

```rust
// msg.rs

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
#[serde(rename_all = "snake_case")]
pub enum ExecuteMsg {
    Increment {},
    Multiply { times: i32 }, // [1] add this enum variant
    Reset { count: i32 },
}
```

```rust
// contract.rs

#[cfg_attr(not(feature = "library"), entry_point)]
pub fn execute(
    deps: DepsMut,
    _env: Env,
    info: MessageInfo,
    msg: ExecuteMsg,
) -> Result<Response, ContractError> {
    match msg {
        ExecuteMsg::Increment {} => try_increment(deps),
        ExecuteMsg::Multiply { times } => try_multiply(deps, times), // [2] add this match arm
        ExecuteMsg::Reset { count } => try_reset(deps, info, count),
    }
}

// [3] add this function
fn try_multiply(deps: DepsMut, times: i32) -> Result<Response, ContractError> {
    STATE.update(deps.storage, |mut state| -> Result<_, ContractError> {
        state.count *= times;
        Ok(state)
    })?;

    Ok(Response::new().add_attribute("method", "try_multiply"))
}
```



Then redeploy the contract:

```sh
beaker wasm deploy counter --signer-account test1 --no-wasm-opt --raw '{ "count": 0 }'
```



Then regenerate `counter`'s client

```sh
beaker wasm ts-gen counter
```



Now we can test it out in the `beaker console`

```js
sc = counter.signer(test1)

await sc.increment()
await sc.getCount()
// => { count: 1 }

await sc.multiply({ times: 2 })
await sc.getCount()
// => { count: 2 }

await sc.multiply({ times: 10 })
await sc.getCount()
// => { count: 20 }
```

`sc` is an instance of `CounterContract` which you can find it in `ts/sdk/src/contracts/CounterContract.ts`.

### Frontend

Beaker project template also comes with frontend template. But in order to interact with it you need:

- [Keplr installed](https://www.keplr.app/)
- [Keplr chain setup for LocalOsmosis](https://github.com/osmosis-labs/LocalOsmosis/tree/main/localKeplr)
- Add test account to Keplr
  - [Add account via mnemonic in Keplr](https://help.keplr.app/articles/how-to-connect-additional-keplr-accounts).
    The account `test1` can be added by copy-pasting `notice oak worry limit wrap speak medal online prefer cluster roof addict wrist behave treat actual wasp year salad speed social layer crew genius` to the Import account screen on Keplr. It contains 100,000 test OSMOs.
  - [List of test accounts and its mnemonics in LocalOsmosis](https://github.com/osmosis-labs/LocalOsmosis#accounts)

Now we are good to go! Let's dive in

```sh
cd frontend
yarn && yarn dev
```

Then open `http://localhost:3000/` in the browser.

In frontend directory, you will see that `.beaker` is in here. It is actually symlinked to the one in the root so that frontend code can access beaker state.



---

## License

The crates in this repository are licensed under either of the following licenses, at your discretion.

    Apache License Version 2.0 (LICENSE-APACHE or apache.org license link)
    MIT license (LICENSE-MIT or opensource.org license link)

Unless you explicitly state otherwise, any contribution submitted for inclusion in this library by you shall be dual licensed as above (as defined in the Apache v2 License), without any additional terms or conditions.
