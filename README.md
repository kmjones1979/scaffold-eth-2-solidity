# 🏗 Scaffold-ETH 2 Solidity Challenges

This toolkit is designed to teach you the concepts of solidity using Scaffold-ETH 2. Curriculum is based on the amazing content from Smart Contract Programer.

# 🚩 Challenge #0: Hello World

In this challenge you will learn about the following concepts:
- License identifiers
- Pragmas
- Editing your smart contract
- Testing your smart contract
- Deploying your smart contract


## Checkpoint 0: 📦 Environment 📚

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo, checkout the active branch & install dependencies

```
git clone -b solidity-0-hello-world \
https://github.com/kmjones1979/scaffold-eth-2-solidity.git \
solidity-0-hello-world
```

```
cd solidity-0-hello-world
```

```
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat that can be used for testing and development. 

> The hardhat configuration file is located at `packages/hardhat/hardhat.config.ts`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```

> The smart contract is located in `packages/hardhat/contracts`

> The deploy script for hardhat is located in `packages/hardhat/deploy`

4. On a third terminal, start your NextJS app:

```
yarn start
```

Visit your app on: `http://localhost:3000`. You can interact with your smart contract using the debug contract tab.

> The app config for Scaffold-ETH 2 is located in `packages/nextjs/scaffold.config.ts`

5. Test your smart contract

```
yarn test
```

> NOTE: THIS TEST WILL FAIL. In the next section you will fix your smart contract so that it passes.

> The test script for hardhat is located in `packages/hardhat/test`

## License identifiers

When deploying your contract earlier you may have noticed the following warning:

> Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing `"SPDX-License-Identifier: <SPDX-License>"` to each source file. Use `"SPDX-License-Identifier: UNLICENSED"` for non-open-source code. Please see https://spdx.org for more information.

Trust in smart contracts can be better established if their source code is available. Since making source code available always touches on legal problems with regards to copyright, the Solidity compiler encourages the use of machine-readable SPDX license identifiers. Every source file should start with a comment indicating its license.

Add a license to the very top of your smart contract. 

> A list of SPDX License Identifiers can be found [here](https://spdx.org/licenses/).

```
//SPDX-License-Identifier: MIT
```

Then redeploy your contract using your terminal.

```
yarn deploy
```

## Pragmas

Source files can (and should) be annotated with a version pragma to reject compilation with future compiler versions that might introduce incompatible changes. We try to keep these to an absolute minimum and introduce them in a way that changes in semantics also require changes in the syntax, but this is not always possible. 

```
pragma solidity >=0.8.0 <0.9.0;
```

## Fixing our test

```
contract YourContract {

	string public greet = "Hello Builders!";

}
```


## Additional Resources / Source Credit

- [Solidity-by-example - Hello World](https://solidity-by-example.org/hello-world/)
- [Layout of a Solidity Source File](https://docs.soliditylang.org/en/develop/layout-of-source-files.html)


## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).


## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
