---
sidebar_position: 11
---

# Interact with REST

All gRPC services on the Cosmos SDK  and Osmosis are made available for more convenient REST-based queries through gRPC-gateway. The format of the URL path is based on the Protobuf service method's full-qualified name, but may contain small customizations so that final URLs look more idiomatic. For example, the REST endpoint for the `cosmos.bank.v1beta1.Query/AllBalances` method is `GET /cosmos/bank/v1beta1/balances/{address}`. Request arguments are passed as query parameters.

As a concrete example, the `curl` command to make balances request is:

```bash
curl \
    -X GET \
    -H "Content-Type: application/json" \
    https://lcd.osmosis.zone/cosmos/bank/v1beta1/balances/$MY_ADDRESS
```

The list of all available REST endpoints is available as a Swagger specification file, it can be viewed at `localhost:1317/swagger`. Make sure that the `api.swagger` field is set to true in your `app.toml` file.

### Query for historical state using REST

Querying for historical state is done using the HTTP header `x-cosmos-block-height`. For example, a curl command would look like:

```bash
curl \
    -X GET \
    -H "Content-Type: application/json" \
    -H "x-cosmos-block-height: 279256"
    http://localhost:1317/cosmos/bank/v1beta1/balances/$MY_VALIDATOR
```

Assuming the state at that block has not yet been pruned by the node, this query should return a non-empty response.

### Cross-Origin Resource Sharing (CORS)

[CORS policies](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) are not enabled by default to help with security. 

### Setting up a public rest server
If you would like to use the rest-server in a public environment we recommend you provide a reverse proxy. We can share our Terraform infrastructurefor setting up rest servers in DigitalOcean. We will write a guide soon and publish a repo soon. In the meantime feel free to reachout in Discord. s

For testing and development purposes there is an `enabled-unsafe-cors` field inside `app.toml`.


### Signing transactions

Sending transactions using gRPC and REST requires some additional steps: generating the transaction, signing it, and finally broadcasting it. Read about [generating and signing transactions](https://docs.cosmos.network/v0.46/run-node/txs.html).
