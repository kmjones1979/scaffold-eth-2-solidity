# 🏗 Scaffold-ETH 2 Solidity Challenges

This toolkit is designed to teach you the concepts of solidity using Scaffold-ETH 2. Curriculum is based on the amazing content from Smart Contract Programer.

# 🚩 Challenge #3: The Graph

In this challenge you will learn about the following concepts:
- The Graph (manifest, schema, entities and handlers)
- GraphiQL
- Apollo Client

## 🧑🏼‍🚀 The Graph

[The Graph](https://thegraph.com/) is a protocol for building decentralized applications (dApps) quickly on Ethereum and IPFS using GraphQL.

- 🗃️ **Decentralized Indexing**: The Graph enables open APIs ("subgraphs") to efficiently index and organize blockchain data.
- 🔎 **Efficient Querying**: The protocol uses GraphQL for streamlined querying blockchain data.
- 🙌 **Community Ecosystem**: The Graph fosters collaboration by empowering developers to build, deploy, and share subgraphs!

For detailed instructions and more context, check out the [Getting Started Guide](https://thegraph.com/docs/en/cookbook/quick-start).

## Checkpoint 0: 📦 Environment 📚

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo, checkout the active branch & install dependencies

```
git clone -b solidity-2-events \
https://github.com/kmjones1979/scaffold-eth-2-solidity.git \
solidity-2-events
```

```
cd solidity-2-events
```

```
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the debug contract tab.

---

## Checkpoint 1: Spin up The Graph (on Docker)

1. In a new terminal spin up The Graph

Running the following command will clear up any old data.  Do this if you need to reset everything.

```
yarn clean-node
```

Next spin up the entire stack using `yarn run-node` which will utilize the `docker-compose.yml` located in the graph-node folder.

```
yarn run-node
```

This will spin up all the containers for The Graph using docker-compose. You will want to keep this window open at all times so that you can see log output from Docker.

> As stated before, be sure to keep this window open so that you can see any log output from Docker. 🔎

---

## Checkpoint 2: Deploy the Subgraph

- subgraph.yaml (manifest)
- schema.graphql
- mapping.ts (handlers)

1. Create the local subgraph

In this forth window we will create our local subgraph! 

> Note: You will only need to do this once.

```
yarn local-create
```

> You should see some output stating your Subgraph has been created along with a log output on your graph-node inside docker.

2. Ship your subgraph

Next we will ship our subgraph! You will need to give your subgraph a version after executing this command. (e.g. 0.0.1).

```
yarn local-ship
```

> This command does the following all in one… 🚀🚀🚀

- Copies the contracts ABI from the hardhat/deployments folder
- Generates the networks.json file
- Generates AssemblyScript types from the subgraph schema and the contract ABIs.
- Compiles and checks the mapping functions.
- … and deploy a local subgraph!

> If you get an error ts-node you can install it with the following command

```
npm install -g ts-node
```

You should get a build completed output along with the address of your Subgraph endpoint.

```
Build completed: QmYdGWsVSUYTd1dJnqn84kJkDggc2GD9RZWK5xLVEMB9iP

Deployed to http://localhost:8000/subgraphs/name/scaffold-eth/your-contract/graphql

Subgraph endpoints:
Queries (HTTP):     http://localhost:8000/subgraphs/name/scaffold-eth/your-contract
```

3. Test your subgraph

Go ahead and head over to your subgraph endpoint and take a look!

> Here is an example query…

```
  {
    greetings(first: 25, orderBy: createdAt, orderDirection: desc) {
      id
      greeting
      premium
      value
      createdAt
      sender {
        address
        greetingCount
      }
    }
  }
```

> If all is well and you’ve sent a transaction to your smart contract then you will see a similar data output!

Next up we will dive into a bit more detail on how The Graph works so that as you start adding events to your smart contract you can start indexing and parsing the data you need for your front end application.

---

## Checkpoint 3: Update our table to reflect data from The Graph

---

## Additional Resources / Source Credit

- [The Graph - Quick Start](https://thegraph.com/docs/en/quick-start/)


## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).


## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
