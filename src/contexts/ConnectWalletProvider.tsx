import {
  useAddress,
  useClaimedNFTSupply,
  useMetamask,
  useNetwork,
  useNetworkMismatch,
  useEditionDrop,
  useUnclaimedNFTSupply,
  useNFTs,
} from "@thirdweb-dev/react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { BigNumber, ethers } from "ethers";
import { useConnectWallet } from "../hooks/useConnectWallet";

type Store = {
  isConnected: boolean;
};

export const ConnectWalletContext = createContext<Store>({
  isConnected: false,
});

type Props = {
  children: React.ReactNode;
};

const Component: React.FC<Props> = ({ children }: Props) => {
  const address = useAddress();

  const [isConnected, setIsConeccted] = useState<boolean>(false);

  // update connectionate connection
  useEffect(() => {
    setIsConeccted(address ? true : false);
  }, [address]);

  const store: Store = {
    isConnected,
  };

  return (
    <ConnectWalletContext.Provider value={store}>
      {children}
    </ConnectWalletContext.Provider>
  );
};

export { Component as ConnectWalletProvider };
