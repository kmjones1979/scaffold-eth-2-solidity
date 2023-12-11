# 🏗 Scaffold-ETH 2 Solidity Challenges

This toolkit is designed to teach you the concepts of solidity using Scaffold-ETH 2. Curriculum is based on the amazing content from Smart Contract Programer.

# 🚩 Challenge #2: Events

In this challenge you will learn about the following concepts:
- Events
- useScaffoldEventHistory hook
- useScaffoldEventSubscriber hook

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

## Checkpoint 1: Adding an event

1. Create an event that will pass the `address` and `string` data types coming from the smart contract when the greeting is set.

```
	// Configure an event and its data types
	event GreetingChange(
		address indexed greetingSetter,
		string newGreeting
	);
```

2. Add the emit function to the setGreeting function using `msg.sender` and the new greeting being passed across in arguments.

```
		// Emit the event
		emit GreetingChange(msg.sender, _newGreeting);
```

---

## Checkpoint 2: Subscribing to events

1. Import the `useScaffoldEventSubscriber` hook from Scaffold-ETH so that we can subscribe to events.

```diff
import { 
+  useScaffoldEventSubscriber,
  useScaffoldContractRead,
  useScaffoldContractWrite
} from "~~/hooks/scaffold-eth";
```

2. Create a subscription using `useScaffoldEventSubscriber` hook, passing the needed values. We will log this data in our console using `console.log`.

```
  useScaffoldEventSubscriber({
    contractName: "YourContract",
    eventName: "GreetingChange",
    listener: logs => {
      logs.map(log => {
        const { greetingSetter, newGreeting } = log.args;
        console.log("📡 GreetingChange event", greetingSetter, newGreeting);
      });
    },
  });
```

---

## Checkpoint 3: Displaying events in frontend

1. Import `useScaffoldEventHistory` from Scaffold-ETH hooks.

```diff
import { 
  useScaffoldEventSubscriber,
+  useScaffoldEventHistory, 
  useScaffoldContractRead, 
  useScaffoldContractWrite
} from "~~/hooks/scaffold-eth";
```

2. Create a data object where we can store the array of all events.

```
  const {
    data: events,
  } = useScaffoldEventHistory({
    contractName: "YourContract",
    eventName: "GreetingChange",
    // Specify the starting block number from which to read events, this is a bigint.
    fromBlock: 0n,
    blockData: true,
  });
```

3. Update our frontend so that we can display the results in table format. We will use a map to loop through the index of the array.

```
          <div>
            {events && events.length > 0 && (
              <table className="table">
                <thead>
                  <tr>
                    <th>Greeting Setter</th>
                    <th>New Greeting</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event, index) => (
                    <tr key={index}>
                      <td><Address address={event.args.greetingSetter} /></td>
                      <td>{event.args.newGreeting}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
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
- The Graph (manifest, schema, entities and handlers)
- GraphiQL
- Apollo Client

[🚩 Challenge #3: The Graph](https://github.com/kmjones1979/scaffold-eth-2-solidity/tree/solidity-3-the-graph)

---

#### Configuration of Third-Party Services for Production-Grade Apps.

By default, 🏗 Scaffold-ETH 2 provides predefined API keys for popular services such as Alchemy and Etherscan. This allows you to begin developing and testing your applications more easily, avoiding the need to register for these services.  
This is great to complete your **SpeedRunEthereum**.

For production-grade applications, it's recommended to obtain your own API keys (to prevent rate limiting issues). You can configure these at:

- 🔷`ALCHEMY_API_KEY` variable in `packages/hardhat/.env` and `packages/nextjs/.env.local`. You can create API keys from the [Alchemy dashboard](https://dashboard.alchemy.com/).

- 📃`ETHERSCAN_API_KEY` variable in `packages/hardhat/.env` with your generated API key. You can get your key [here](https://etherscan.io/myapikey).g

> 💬 Hint: It's recommended to store env's for nextjs in Vercel/system env config for live apps and use .env.local for local testing.


## Additional Resources / Source Credit

- [Solidity-by-example - Events](https://solidity-by-example.org/events/)
- [Structure of a Contract](https://docs.soliditylang.org/en/develop/structure-of-a-contract.html)


## Documentation

Visit our [docs](https://docs.scaffoldeth.io) to learn how to start building with Scaffold-ETH 2.

To know more about its features, check out our [website](https://scaffoldeth.io).


## Contributing to Scaffold-ETH 2

We welcome contributions to Scaffold-ETH 2!

Please see [CONTRIBUTING.MD](https://github.com/scaffold-eth/scaffold-eth-2/blob/main/CONTRIBUTING.md) for more information and guidelines for contributing to Scaffold-ETH 2.
