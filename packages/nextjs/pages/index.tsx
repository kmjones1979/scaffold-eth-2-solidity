import { useState } from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { Address, Balance } from "~~/components/scaffold-eth";
import {
  useScaffoldContractRead,
  useScaffoldContractWrite,
  useScaffoldEventHistory,
  useScaffoldEventSubscriber,
} from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { address } = useAccount();

  const { data: greeting } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "greeting",
  });

  const { data: totalCounter } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "totalCounter",
  });

  const [newGreeting, setNewGreeting] = useState("");

  const { writeAsync: setGreeting } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "setGreeting",
    args: [newGreeting],
  });

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

  const { data: events } = useScaffoldEventHistory({
    contractName: "YourContract",
    eventName: "GreetingChange",
    fromBlock: 0n,
    blockData: true,
  });

  return (
    <>
      <MetaHeader />
      <div className="body">
        <div className="flex items-center flex-col flex-grow p-5">
          Hello, <Address address={address} />
          Your current balance is <Balance address={address} />
          The current value of greeting is {greeting} and has been changed {String(totalCounter)} times!
          <div className="p-4">
            <input
              value={newGreeting}
              placeholder="Type here"
              className="input"
              onChange={e => setNewGreeting(e.target.value)}
            />
          </div>
          <div className="">
            <button className="btn btn-primary" onClick={() => setGreeting()}>
              Set Greeting
            </button>
          </div>
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
                      <td>
                        <Address address={event.args.greetingSetter} />
                      </td>
                      <td>{event.args.newGreeting}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
