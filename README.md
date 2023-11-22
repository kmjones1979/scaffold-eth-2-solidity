# 🏗 Scaffold-ETH 2 Solidity Challenges

This toolkit is designed to teach you the concepts of solidity using Scaffold-ETH 2. Curriculum is based on the amazing content from Smart Contract Programer.

# 🚩 Challenge #1: First App

In this challenge you will learn about the following concepts:
- wagmi `useAccount` hook
- Scaffold-ETH hooks and components
- Unsigned integers
- Functions

## Checkpoint 0: 📦 Environment 📚

Before you begin, you need to install the following tools:

- [Node (v18 LTS)](https://nodejs.org/en/download/)
- Yarn ([v1](https://classic.yarnpkg.com/en/docs/install/) or [v2+](https://yarnpkg.com/getting-started/install))
- [Git](https://git-scm.com/downloads)

To get started with Scaffold-ETH 2, follow the steps below:

1. Clone this repo, checkout the active branch & install dependencies

```
git clone -b solidity-1-first-app \
https://github.com/kmjones1979/scaffold-eth-2-solidity.git \
solidity-1-first-app
```

```
cd solidity-1-first-app
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

## Checkpoint 1: Account display

We want to display the connected account for our user in the frontend. To do this we can use wagmi and Scaffold-ETH hooks.

1. Import useAccount

```
import { useAccount } from "wagmi";
```

2. Define and set a `address` variable

```
const { address } = useAccount();
```

3. Read the value for the user

```
        <div className="flex items-center flex-col flex-grow p-5">
          Hello, {address}
          The current value of greeting is {greeting}!
        </div>
```

4. Use the `<Address />` component from Scaffold-ETH to enhance the UI

Import the `<Address />` component from Scaffold-ETH components at the top of your `index.tsx` file.

```
import { Address } from "~~/components/scaffold-eth";
```

Then, change the `address` in your welcome to use the data coming from wagmi useAccount.

```
Hello, <Address address={address}/>
```

5. Add a `<Balance />` component

While we are here, we can also display the balance of the connected wallet very easily with another Scaffold-ETH Component. Add Balance to your existing import.

```
import { Address, Balance } from "~~/components/scaffold-eth";
```

Then add a line to show the users current balance.

```
Your current balance is <Balance address={address}/>
```

---

## Checkpoint 2: Adding a counter and function 

1. Create a new public variable `totalCounter`

```
uint256 public totalCounter;
```

2. Create a new function to update our greeting

This function will take in a string and then update the state for `greeting` along with increment the `totalCounter` by 1.

```
	function setGreeting(string memory _newGreeting) public {
		// Change state variables
		greeting = _newGreeting;
		totalCounter += 1;
	}
```

---

## Checkpoint 3: Extending our frontend

We now want to create a variable that will show us the current counter keeping track of greetings being changed along with an input and button to update the greeting.

1. Read totalCounter from the contract

First, we will get data from the contract with `useScaffoldContractRead` like we did in the last challenge.

```
  const { data: totalCounter } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "totalCounter"
  });
```

2. Print the value in your `index.tsx` file

> Since the value is now a BigInt we will display this with a `String()` conversion.

```
          The current value of greeting is {greeting} and has been 
          changed {String(totalCounter)} times!
```

3. Add an input field and button to update your greeting.

In order to keep track of changes as a user types in a new greeting, we will need some state. Import that first so we have it available to use.

```
import { useState } from "react";
```

Next create an input along with a button for users to send a new greeting.

```
        <div className="p-5">
          <input
            value={newGreeting}
            placeholder="Type here"
            className="input"
            onChange={(e) => setNewGreeting(e.target.value)}
          />
        </div>
        <div className="p-5">
          <button className="btn btn-primary" onClick={() => setGreeting()}>
            Set Greeting
          </button>
        </div>
```

Create some state to track the values being typed into our input field. Then use the `useScaffoldContractWrite` hook to update our greeting. Notice that this hook requires that you pass in the new greeting as an argument.

```
  const [newGreeting, setNewGreeting] = useState("");

  const { writeAsync: setGreeting } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "setGreeting",
    args: [newGreeting],
  });
```
---

## Checkpoint 4: 💾 Deploy your contract! 🛰

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

## Checkpoint 5: 🚢 Ship your frontend! 🚁

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

---

## Next Challenge!

Keep it going!! Next challenge you will learn about...
- Events
- useScaffoldEventHistory hook
- useScaffoldEventSubscriber hook

[🚩 Challenge #2: Events](https://github.com/kmjones1979/scaffold-eth-2-solidity/tree/solidity-2-events)

---

#### Configuration of Third-Party Services for Production-Grade Apps.

By default, 🏗 Scaffold-ETH 2 provides predefined API keys for popular services such as Alchemy and Etherscan. This allows you to begin developing and testing your applications more easily, avoiding the need to register for these services.  
This is great to complete your **SpeedRunEthereum**.

For production-grade applications, it's recommended to obtain your own API keys (to prevent rate limiting issues). You can configure these at:

- 🔷`ALCHEMY_API_KEY` variable in `packages/hardhat/.env` and `packages/nextjs/.env.local`. You can create API keys from the [Alchemy dashboard](https://dashboard.alchemy.com/).

- 📃`ETHERSCAN_API_KEY` variable in `packages/hardhat/.env` with your generated API key. You can get your key [here](https://etherscan.io/myapikey).

> 💬 Hint: It's recommended to store env's for nextjs in Vercel/system env config for live apps and use .env.local for local testing.


## Additional Resources / Source Credit

- [Solidity-by-example - First Application](https://solidity-by-example.org/first-app/)
- [Structure of a Contract](https://docs.soliditylang.org/en/develop/structure-of-a-contract.html)


## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).


## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
