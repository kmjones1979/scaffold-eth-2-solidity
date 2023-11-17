# 🏗 Scaffold-ETH 2 Solidity Challenges

This toolkit is designed to teach you the concepts of solidity using Scaffold-ETH 2. Curriculum is based on the amazing content from Smart Contract Programer.

# 🚩 Challenge #0: Hello World

In this challenge you will learn about, the license identifier, pragmas and how to deploy your contract.


## Checkpoint 0: 📦 Environment 📚

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo, checkout the active branch & install dependencies

```
git clone https://github.com/kmjones1979/scaffold-eth-2-solidity.git
```

```
cd scaffold-eth-2-solidity
```

```
git checkout solidity-0-hello-world
```

```
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts`

> The deploy script for hardhat is located in `packages/hardhat/deploy`

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the contract component.

> The app config for Scaffold-ETH 2 is located in `packages/nextjs/scaffold.config.ts`

5. Test your smart contract

Run a smart contract test with `yarn test`

> The test script for hardhat is located in `packages/hardhat/test`


## Additional Resources / Source Credit

- [Solidity-by-example - Hello World](https://solidity-by-example.org/hello-world/)
- [Layout of a Solidity Source File](https://docs.soliditylang.org/en/develop/layout-of-source-files.html)


## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).


## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
