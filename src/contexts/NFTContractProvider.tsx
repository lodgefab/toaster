import {
  useAddress,
  useClaimedNFTSupply,
  useMetamask,
  useNetwork,
  useNetworkMismatch,
  useUnclaimedNFTSupply,
  useNFTs,
  useContract,
  useOwnedNFTs,
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
import React from "react";

type Store = {
  isContextLoading: boolean;
  allTokens: Array<any>;
  isClaiming: boolean;
  isConnected: boolean;
  setIsClaiming?: Dispatch<SetStateAction<boolean>>;
  spMenuOpened: boolean;
  setSpMenuOpened?: Dispatch<SetStateAction<boolean>>;

  ownedTokens: Array<any>;
  ownedToasters: number;
  setOwnedTokens?: Dispatch<SetStateAction<boolean>>;
  claimPrice: string;
  totalSupply: number;
  claimedSupply: number;
};

export const NftContractContext = createContext<Store>({
  isContextLoading: true,
  allTokens: [],
  isClaiming: false,
  isConnected: false,
  spMenuOpened: false,
  ownedTokens: [],
  ownedToasters: 0,
  claimPrice: "",
  totalSupply: 0,
  claimedSupply: 0,
});

type Props = {
  children: React.ReactNode;
};

const Component: React.FC<Props> = ({ children }: Props) => {
  // SDK v2->v3
  const editionDrop = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, "edition-drop")

  const tokenId = Number(process.env.TOKEN_ID);

  const address = useAddress();
  
  // SDK v2->v3
  const { data: ownedNFTs, isLoading, error } = useOwnedNFTs(editionDrop.contract, address);
  
  // const { data: nfts, isLoading } = useNFTs(editionDrop);

  const [allTokens, setAllTokens] = useState<Array<any>>([]);
  const [isContextLoading, setIsContextLoading] = useState(true);
  const [isClaiming, setIsClaiming] = useState<boolean>(false);
  const [isConnected, setIsConeccted] = useState<boolean>(false);
  const [spMenuOpened, setSpMenuOpened] = useState<boolean>(false);
  const [ownedTokens, setOwnedTokens] = useState<Array<any>>([]);
  const [ownedToasters, setOwnedToasters] = useState<number>(0);
  const [claimPrice, setClaimPrice] = useState<string>("");
  const [totalSupply, setTotalSupply] = useState<number>(0);
  const [claimedSupply, setClaimedSupply] = useState<number>(0);

  // update connectionate connection
  useEffect(() => {
    setIsConeccted(address ? true : false);
  }, [address]);

  // get All Tokens of the Edition
  useEffect(() => {
    // editionDrop?.getAll().then((results) => {
    //   setAllTokens(results);
    //   setIsContextLoading(false);
    //   // console.log(parseInt(allTokens[0].supply._hex, 16))
    // });

  }, []);
  //get Owned Toaster Token Info
  useEffect(() => {
    setOwnedToasters(0);
    ownedNFTs?.map((NFT)=>{
      setOwnedToasters((prev) => prev + NFT.quantityOwned!)
    })
  }, [address, isLoading]);


  const store: Store = {
    isContextLoading,
    allTokens,
    isClaiming,
    setIsClaiming,
    isConnected,
    spMenuOpened,
    setSpMenuOpened,
    ownedTokens,
    ownedToasters,
    claimPrice,
    claimedSupply,
    totalSupply,
  };

  return (
    <NftContractContext.Provider value={store}>
      {children}
    </NftContractContext.Provider>
  );
};

export { Component as NftContractProvider };
