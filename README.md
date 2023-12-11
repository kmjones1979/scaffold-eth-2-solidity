# 🏗 Scaffold-ETH 2 Solidity Challenges

This toolkit is designed to teach you the concepts of solidity using Scaffold-ETH 2. Curriculum is based on the amazing content from Smart Contract Programer.

# 🚩 Challenge #4: Extending a subgraph

In this challenge you will learn about the following concepts:
- Adding a subgraph for a new event
- Creating additional logic in your mapping

## Checkpoint 0: 📦 Environment 📚

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo, checkout the active branch & install dependencies

```
git clone -b solidity-4-extending-subgraph \
https://github.com/kmjones1979/scaffold-eth-2-solidity.git \
solidity-4-extending-subgraph
```

```
cd solidity-4-extending-subgraph
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

## Checkpoint 2: Adding a new event

---

## Checkpoint 3: Adding an event to an existing subgraph

---

## Checkpoint 4: Adding a counter to a mapping

---

## Additional Resources / Source Credit

- [The Graph - Quick Start](https://thegraph.com/docs/en/quick-start/)


## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).


## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
