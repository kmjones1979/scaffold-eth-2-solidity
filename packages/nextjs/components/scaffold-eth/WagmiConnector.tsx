import { useEffect } from "react";
import { wagmiConfig } from "~~/services/web3/wagmiConfig";

// @refresh reset
export const WagmiConnector = ({}) => {
  useEffect(() => {
    wagmiConfig.autoConnect();
  }, []);
  return <></>;
};
