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
  const editionDrop = useEditionDrop(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);

  const tokenId = Number(process.env.TOKEN_ID);

  const address = useAddress();

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
  // useUnclaimedNFTSupply is not supported on editionDrop
  // const { data: unclaimedNft } = useUnclaimedNFTSupply(editionDrop)
  const { data: claimedNft } = useClaimedNFTSupply(editionDrop);

  // update connectionate connection
  useEffect(() => {
    setIsConeccted(address ? true : false);
  }, [address]);

  // get All Tokens of the Edition
  useEffect(() => {
    editionDrop?.getAll().then((results) => {
      setAllTokens(results);
      setIsContextLoading(false);
      // console.log(parseInt(allTokens[0].supply._hex, 16))
    });

    // editionDrop?.claimConditions.getActive(tokenId).then((activeClaimCondition) => {
    //   setClaimPrice(ethers.utils.formatUnits(activeClaimCondition.price._hex))
    // })
  }, []);
  //get Owned Toaster Token Info
  useEffect(() => {
    setOwnedToasters(0);

    if (address) {
      setIsContextLoading(true);
      editionDrop?.getOwned(address).then((results) => {
        results.map((result) => {
          setOwnedToasters(
            (prev) => prev + parseInt(result.quantityOwned._hex, 16)
          );
        });
        setOwnedTokens(results);
        setIsContextLoading(false);
      });
    }
  }, [address]);

  //get Owned Token Info
  // useEffect(() => {
  //   if (address) {
  //     let owneds: Array<any> = []

  //     allTokens.map((token) => {
  //       if (token.owner == address) {
  //         owneds.push(token)
  //       }
  //     })

  //     setOwnedTokens(owneds)
  //   }

  //   setClaimedSupply(claimedNft?.toNumber() || 0)
  //   setTotalSupply(
  //     claimedNft
  //       ? claimedNft.toNumber()
  //       : 0
  //   )
  // }, [allTokens])

  //update Token Status after claim
  // useEffect(() => {
  //   // TODO transaction終了時のみにする
  //   editionDrop?.getAll().then((results) => {
  //     setAllTokens(results)
  //     setIsLoading(false)
  //   })

  //   editionDrop?.claimConditions.getActive(tokenId).then((activeClaimCondition) => {
  //     setClaimPrice(ethers.utils.formatUnits(activeClaimCondition.price._hex))
  //   })
  // }, [isClaiming])

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
