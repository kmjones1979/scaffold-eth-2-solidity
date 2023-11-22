# 🏗 Scaffold-ETH 2 Solidity Challenges

This toolkit is designed to teach you the concepts of solidity using Scaffold-ETH 2. Curriculum is based on the amazing content from Smart Contract Programer.

# 🚩 Challenge #0: Hello World

In this challenge you will learn about the following concepts:
- License identifiers
- Pragmas
- Editing your smart contract
- Testing your smart contract
- Deploying your smart contract
- Basic frontend updates


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

---

## Checkpoint 1: Adding a license identifier

When deploying your contract earlier you may have noticed the following warning:

> Warning: SPDX license identifier not provided in source file. Before publishing, consider adding a comment containing `"SPDX-License-Identifier: <SPDX-License>"` to each source file. Use `"SPDX-License-Identifier: UNLICENSED"` for non-open-source code. Please see https://spdx.org for more information.

Trust in smart contracts can be better established if their source code is available. Since making source code available always touches on legal problems with regards to copyright, the Solidity compiler encourages the use of machine-readable SPDX license identifiers. Every source file should start with a comment indicating its license.

1. Add a license to the very top of your smart contract. 

> A list of SPDX License Identifiers can be found [here](https://spdx.org/licenses/).

```
//SPDX-License-Identifier: MIT
```

2. Then redeploy your contract using your terminal.

```
yarn deploy
```

---

## Checkpoint 2: Understanding Pragmas

Source files can (and should) be annotated with a version pragma to reject compilation with future compiler versions that might introduce incompatible changes. We try to keep these to an absolute minimum and introduce them in a way that changes in semantics also require changes in the syntax, but this is not always possible. 

1. Check which version of solidity is configured in the Hardhat configuration. 

> The hardhat configuration file is located at `packages/hardhat/hardhat.config.ts`.

In the below example we have version 0.8.17 available to use in our contracts.

```
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
```

2. Update your pragma to use up to that specific version.

```
pragma solidity ^0.8.17;
```

3. Then redeploy your contract using your terminal.

```
yarn deploy
```

---

## Checkpoint 3: Fixing our test failure

Check the hardhat test located in `packages/hardhat/test`. You will notice that the test is checking that the response from yourContract.greeting() is equal to a string value of "Hello Builders!"

```
    it("Should have the right message on deploy", async function () {
      expect(await yourContract.greeting()).to.equal("Hello Builders!");
    });
```

1. Fix the variable in your smart contract to match the required value.

```
string public greeting = "Hello Builders!";
```

2. Then redeploy your contract using your terminal.

```
yarn deploy
```

3. Test you smart contract

```
yarn test
```

You should see the following passing output after updating your change and testing.

```
  YourContract
    Deployment
      ✓ Should have the right message on deploy

·------------------------|---------------------------|-------------|-----------------------------·
|  Solc version: 0.8.17  ·  Optimizer enabled: true  ·  Runs: 200  ·  Block limit: 30000000 gas  │
·························|···························|·············|······························
|  Methods                                                                                       │
··············|··········|·············|·············|·············|···············|··············
|  Contract   ·  Method  ·  Min        ·  Max        ·  Avg        ·  # calls      ·  usd (avg)  │
··············|··········|·············|·············|·············|···············|··············
|  Deployments           ·                                         ·  % of limit   ·             │
·························|·············|·············|·············|···············|··············
|  YourContract          ·          -  ·          -  ·     170499  ·        0.6 %  ·          -  │
·------------------------|-------------|-------------|-------------|---------------|-------------·

  1 passing (585ms)
```

---

## Checkpoint 4: Modifying our frontend

Open up `packages/nextjs/pages/index.tsx` and examine the source code. Notice that the current value of `greeting` is set to `null`. If needed reference the Scaffold-ETH docs below.

> [Scaffold-ETH 2 Docs - useScaffoldContractRead](https://docs.scaffoldeth.io/hooks/useScaffoldContractRead)

1. Import useScaffoldContractRead

First at the top of your `index.tsx` file import the Scaffold-ETH hooks library.

```
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
```

2. Configure the data value for greeting to call useScaffoldContractRead

Solidity creates a get function for variables that can be used to get the value of their current state. Let's configure the value in our nextJS application to pull the value with useScaffoldContractRead.

```
  const { data: greeting } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "greeting"
  });
```

3. Optional, clean up your variable print to not force a string type

We will remove the String conversion with the following code.

```
The current value of greeting is {greeting}!
```

---

## Checkpoint 5: 💾 Deploy your contract! 🛰

🛰 Ready to deploy to a public testnet?!?

1. Update the Hardhat config

> Change the defaultNetwork in `packages/hardhat/hardhat.config.ts` to use `sepolia`.

```
defaultNetwork: "sepolia",
```

2. Generate a deployer

🔐 Generate a deployer address with `yarn generate`. This creates a unique deployer address and saves the mnemonic locally.

> This local account will deploy your contracts, allowing you to avoid entering a personal private key.

![chall-0-yarn-generate](https://github.com/scaffold-eth/se-2-challenges/assets/2486142/133f5701-e575-4cc2-904f-cdc83ae86d94)

👩‍🚀 Use `yarn account` to view your deployer account balances.

![chall-0-yarn-account](https://github.com/scaffold-eth/se-2-challenges/assets/2486142/c34df8c9-9793-4a76-849b-170fae7fd0f0)

⛽️ You will need to send ETH to your deployer address with your wallet, or get it from a public faucet of your chosen network.

> Some popular faucets are [https://sepoliafaucet.com/](https://sepoliafaucet.com/) and [https://www.infura.io/faucet/sepolia](https://www.infura.io/faucet/sepolia)

> ⚔️ Side Quest: Keep a 🧑‍🎤 [punkwallet.io](https://punkwallet.io) on your phone's home screen and keep it loaded with testnet eth. 🧙‍♂️ You'll look like a wizard when you can fund your deployer address from your phone in seconds.

3. 🚀 Deploy your smart contract 

Using the command `yarn deploy` will now ship your app to sepolia.

> 💬 Hint: If you don't want to update the Hardhat config, you can simply use `yarn deploy --network sepolia`.

---

## Checkpoint 4: 🚢 Ship your frontend! 🚁

1. Update the Scaffold-ETH configuration

> ✏️ Edit your config in `packages/nextjs/scaffold.config.ts` to change the `targetNetwork` to `chains.sepolia` :

```
const scaffoldConfig = {
  // The network where your DApp lives in
  targetNetwork: chains.hardhat,

  ...
}
```

> You should see the correct network in the frontend (http://localhost:3000):

![image](https://github.com/scaffold-eth/se-2-challenges/assets/80153681/50eef1f7-e1a3-4b3b-87e2-59c19362c4ff)

> 🦊 Since we have deployed to a public testnet, you will now need to connect using a wallet you own or use a burner wallet. By default 🔥 `burner wallets` are only available on `hardhat` . You can enable them on every chain by setting `onlyLocalBurnerWallet: false` in your frontend config (`scaffold.config.ts` in `packages/nextjs/`)

> 💬 Hint: For faster loading of your transfer page, consider updating the `fromBlock` passed to `useScaffoldEventHistory` in [`packages/nextjs/pages/transfers.tsx`](https://github.com/scaffold-eth/se-2-challenges/blob/c18ed9bd202b8614da6775a189937b4facb58929/packages/nextjs/pages/transfers.tsx#L11) to `blocknumber - 10` at which your contract was deployed. Example: `fromBlock: 3750241n` (where `n` represents its a [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)). To find this blocknumber, search your contract's address on Etherscan and find the `Contract Creation` transaction line.

2. 🚀 Deploy your NextJS App

```shell
yarn vercel
```

> Follow the steps to deploy to Vercel. Once you log in (email, github, etc), the default options should work. It'll give you a public URL.

> If you want to redeploy to the same production URL you can run `yarn vercel --prod`. If you omit the `--prod` flag it will deploy it to a preview/test URL.


#### Configuration of Third-Party Services for Production-Grade Apps.

By default, 🏗 Scaffold-ETH 2 provides predefined API keys for popular services such as Alchemy and Etherscan. This allows you to begin developing and testing your applications more easily, avoiding the need to register for these services.  
This is great to complete your **SpeedRunEthereum**.

For production-grade applications, it's recommended to obtain your own API keys (to prevent rate limiting issues). You can configure these at:

- 🔷`ALCHEMY_API_KEY` variable in `packages/hardhat/.env` and `packages/nextjs/.env.local`. You can create API keys from the [Alchemy dashboard](https://dashboard.alchemy.com/).

- 📃`ETHERSCAN_API_KEY` variable in `packages/hardhat/.env` with your generated API key. You can get your key [here](https://etherscan.io/myapikey).

> 💬 Hint: It's recommended to store env's for nextjs in Vercel/system env config for live apps and use .env.local for local testing.


## Additional Resources / Source Credit

- [Solidity-by-example - Hello World](https://solidity-by-example.org/hello-world/)
- [Layout of a Solidity Source File](https://docs.soliditylang.org/en/develop/layout-of-source-files.html)


## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).


## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
