import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

const Home: NextPage = () => {
  const { data: greet } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "greet",
  });
  return (
    <>
      <MetaHeader />
      <div className="body">
        <div className="flex items-center flex-col flex-grow p-5">
          <p>The current value of greet is {greet}!</p>
        </div>
      </div>
    </>
  );
};

export default Home;
