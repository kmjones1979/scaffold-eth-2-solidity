import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  const greet = null;
  return (
    <>
      <MetaHeader />
      <div className="body">
        <div className="flex items-center flex-col flex-grow p-5">
          <p>The current value of greet is {String(greet)}!</p>
        </div>
      </div>
    </>
  );
};

export default Home;
