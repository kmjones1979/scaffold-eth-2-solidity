import { useState } from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { MetaHeader } from "~~/components/MetaHeader";
import { Address, Balance } from "~~/components/scaffold-eth";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

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
        </div>
      </div>
    </>
  );
};

export default Home;
