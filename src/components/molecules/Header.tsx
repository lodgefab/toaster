import { FunctionComponent, ReactChild, useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { color, curve, font, media, zIndex } from "../../styles";
import { Link as Scroll } from "react-scroll";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from 'next/image'
import { useMedia } from "../../utils/useMedia";
import PrimaryButton from "../Atoms/PrimaryButton";
import { useConnectWallet } from "../../hooks/useConnectWallet";
import {
  useClaimNFT,
  useContract,
  useDisconnect,
  useNetwork,
  useNetworkMismatch,
  useNFTs,
} from "@thirdweb-dev/react";
import { NftContractContext } from "../../contexts/NFTContractProvider";
import { sceneState } from "../../utils/sceneState";
import { AppContext } from "../../contexts/AppContextProvider";

type Props = {
  height: number;
};

const truncate = (str: string, len: number) => {
  return str.length <= len ? str : str.substr(0, len) + "...";
};

const Header: React.VFC<Props> = ({ height }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [isSPMenuOpen, setSPMenuOpen] = useState(false);
  const isMobile = useMedia().isMobile;
  // Connect/Disconecct Wallet
  const { address, connectWallet } = useConnectWallet();
  const disconnectWallet = useDisconnect();
  const [isShowDisconnectMenu, setIsShowDisconnectMenu] = useState(false);

  // Network Detection
  const networkMismatch = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  // Connect to the Edition Drop contract
  // SDK v2->v3
  const editionDropContract  = useContract(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, 'edition-drop');

  

  // Claim an NFT (and update the nfts above)
  const { mutate: claimNft, isLoading, error } =
    useClaimNFT(editionDropContract.contract);
  if (error) {
      console.error("failed to claim nft", error);
  }
  

  //load owned token from NFTContractProvider
  const { ownedToasters, isContextLoading } = useContext(NftContractContext);
  const {isSuccessDialogOpened, setIsSuccessDialogOpened} = useContext(AppContext)

  const spMenu = {
    variantA: { rotate: 0 },
    variantB: { rotate: -90 },
  };

  const stagger = {
    initial: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleStart = (url: string) => {
    if (url !== router.pathname) {
      setLoading(true);
    }
  };
  const handleComplete = (url: string) => {
    if (url !== router.pathname) {
      setLoading(false);
    }
  };

  const disconnectMenu = {
    animate: {
      y: 0,
      opacity: 1,
    },
    initial: {
      y: -8,
      opacity: 0,
      transitions: {
        duration: 0.2,
      },
    },
  };

  

  useEffect(() => {
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <Container height={height}>
      {isMobile && (
        <SPMenu
          onClick={() => {
            setSPMenuOpen(!isSPMenuOpen);
          }}
          variants={spMenu}
          initial={"variantA"}
          animate={isSPMenuOpen ? "variantB" : "variantA"}
        />
      )}
      <Link href={"/"} passHref>
        <Logo>
          <span>🍞</span> Toaster
        </Logo>
      </Link>
      <HeaderUL
        variants={stagger}
        animate={isSPMenuOpen ? "animate" : "initial"}
      >
        <HeaderLinkItem isSPMenuOpen={isSPMenuOpen}>
          <HeaderLinkContents
            destination={"recipe"}
            label={"Recipe"}
            height={height}/>
        </HeaderLinkItem>
        <HeaderLinkItem isSPMenuOpen={isSPMenuOpen}>
          <HeaderLinkContents
            destination={"projects"}
            label={"Projects"}
            height={height}/>
        </HeaderLinkItem>
        <HeaderLinkItem isSPMenuOpen={isSPMenuOpen}>
          <HeaderLinkContents
            destination={"studio"}
            label={"Studio"}
            height={height}/>
        </HeaderLinkItem>
          
        {/* <HeaderLinkItem
          destination={"people"}
          label={"People"}
          height={height}
          isSPMenuOpen={isSPMenuOpen}
        /> */}
        <HeaderLinkItem isSPMenuOpen={isSPMenuOpen}>
          <SNSs>
            <Link href={'https://discord.gg/DfYH3PC9YZ'} passHref>
              <SNSLink  target={'_blank'}>
                <Image src={'/icons/discord.svg'} alt={'discord'} width={24} height={24}/>
              </SNSLink>
            </Link>
            <Link href={'https://www.instagram.com/toaster_design/'} passHref>
              <SNSLink  target={'_blank'}>
                <Image src={'/icons/instagram.svg'} alt={'instagram'} width={24} height={24}/>
              </SNSLink>
            </Link>
            
          </SNSs>
        </HeaderLinkItem>
      </HeaderUL>
      {/* <p
            onClick={() => {
              sceneState.isSuccessModalOpen = true;
              setIsSuccessDialogOpened(!isSuccessDialogOpened)
            }}
            style={{position:'absolute', top:'64px', left:'32px'}}
          >
            Dialog
          </p> */}
      {address ? (
        <WalletWrapper>
          
          <OwnedToaster>🍞 :{ownedToasters}</OwnedToaster>
          {networkMismatch ? (
            <PrimaryButton
              label={"Switch"}
              color={color.utils.error}
              onClick={() =>
                switchNetwork &&
                switchNetwork(Number(process.env.NEXT_PUBLIC_CHAIN_ID))
              }
            />
          ) : (
            <PrimaryButton
              label={"MINT"}
              onClick={() =>
                claimNft(
                  {
                    quantity: 1,
                    tokenId: 0,
                    to: address,
                  },
                  {
                    onSuccess: (data) => {
                      sceneState.isSuccessModalOpen = true;
                      // @ts-ignore
                      sceneState.txHash = data.receipt.transactionHash;
                    },
                    onError: (error) => {
                      const e = error as Error;
                      alert((e?.message as string) || "Something went wrong");
                    },
                  }
                )
              }
            />
          )}
          
        </WalletWrapper>
      ) : (
        <PrimaryButton label={"CONNECT"} onClick={connectWallet} />
      )}
      
    </Container>
  );
};

export default Header;

const HeaderLinkItem: React.FC<{
  isSPMenuOpen: boolean;
  children: ReactChild;
}> = ({isSPMenuOpen, children }) => {
  // トップページではページ内スクロールとして機能し、トップページ以外ではページ遷移として機能する

  const { pathname } = useRouter();
  const isMobile = useMedia().isMobile;
  const lgMenu = {
    visible: { y: 0 },
    hidden: {
      y: 12,
      transitions: {
        duration: 0.2,
      },
    },
  };
  const spMenu = {
    animate: {
      y: 0,
      opacity: 1,
    },
    initial: {
      y: -8,
      opacity: 0,
      transitions: {
        duration: 0.2,
      },
    },
  };

  // トップページではページ内スクロールとして機能し、トップページ以外ではページ遷移として機能する
  return (
    //" Expected server HTML to contain a matching <div> in <div>." warning が出てるのでメディクエリを使った方法を考える
    
    isMobile ? (
      <LiAnimationWrap
        variants={spMenu}
        animate={isSPMenuOpen ? "animate" : "initial"}
      >
        {children}
      </LiAnimationWrap>
    ) : (
      <>
        {children}
      </>
    )
  );
};

const HeaderLinkContents: React.FC<{
  destination: string;
  label: string;
  height: number;
}> = ({ destination, label, height}) => {
  // トップページではページ内スクロールとして機能し、トップページ以外ではページ遷移として機能する

  const { pathname } = useRouter();
  const isMobile = useMedia().isMobile;
  const lgMenu = {
    visible: { y: 0 },
    hidden: {
      y: 12,
      transitions: {
        duration: 0.2,
      },
    },
  };
  const spMenu = {
    animate: {
      y: 0,
      opacity: 1,
    },
    initial: {
      y: -8,
      opacity: 0,
      transitions: {
        duration: 0.2,
      },
    },
  };

  // トップページではページ内スクロールとして機能し、トップページ以外ではページ遷移として機能する
  return (
    //" Expected server HTML to contain a matching <div> in <div>." warning が出てるのでメディクエリを使った方法を考える
    
    isMobile ? (
      <>
      
      {pathname === "/" && (
        <HeaderLI>
          <Scroll
            to={destination}
            smooth={true}
            duration={600}
            offset={-1 * height}
          >
            {label}
          </Scroll>
        </HeaderLI>
      )}
      {pathname !== "/" && (
        <Link href={`/?to=${destination}`} passHref={true}>
          <HeaderLI>{label}</HeaderLI>
        </Link>
      )}
      </>
      
    ) : (
      <>
        {pathname === "/" && (
          <LiWrap>
            <HeaderLI variants={lgMenu} initial="visible" whileHover={"hidden"}>
              <Scroll
                to={destination}
                smooth={true}
                duration={600}
                offset={-1 * height}
              >
                {label}
              </Scroll>
            </HeaderLI>
          </LiWrap>
        )}
        {pathname !== "/" && (
          <LiWrap>
            <Link href={`/?to=${destination}`} passHref={true}>
              <HeaderLI
                variants={lgMenu}
                initial="visible"
                whileHover={"hidden"}
              >
                {label}
              </HeaderLI>
            </Link>
          </LiWrap>
        )}
      </>
    )
  );
};

const Container = styled(motion.div)<{ height: number }>`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;
  max-width: 1040px;
  height: ${(props) => props.height}px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${zIndex.elevation.ev15};
  ${media.lg`
    
  margin:0 0 24px 0;
  padding:16px 0px;
  `}
  ${media.mdsp`
        padding:0 32px;
    `}
`;

const Logo = styled.h1`
  ${font.h2};
  color: ${color.content.dark};
  cursor: pointer;
  ${media.mdsp`
        ${font.h3};
        margin:0 0 0 16px;
    `}
`;

const HeaderUL = styled(motion.ul)`
  display: flex;
  flex-direction: row;
  ${media.lg`
    justify-content: flex-end;
    padding:0 32px 0 0;
  `}
  ${media.mdsp`
        position:absolute;
        top:100%;
        left:32px;
        flex-direction: column;
        
    `}
`;

const HeaderLI = styled(motion.li)`
  ${font.subtitle1};
  color: ${color.content.dark};
  padding: 8px 0;
  cursor: pointer;
  ${media.mdsp`
        padding:4px 12px;
        margin:0 0 8px 0;
        background-color:${color.background.tint};
        border-radius:16px;
    `}
`;

const LiWrap = styled.div`

  height: 32px;
  overflow: hidden;
  border-bottom: solid 1px transparent;
  margin: 0px 16px;
  ${curve.button};
  &:hover{
    border-bottom: solid 1px ${color.content.dark};
  }
  ${media.mdsp`
        border:0px;
        overflow:visible;
        margin:0px;
    `}
`;


const LiAnimationWrap = styled(motion.div)``;

const SPMenu = styled(motion.div)`
  width: 32px;
  height: 32px;
  padding: 6px;
  background-image: url("/icons/handle.svg");
  background-size: contain;
  background-position: center;
`;
const WalletWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const WalletInfo = styled.div`
  ${font.body2};
`;
const DisconnectMenu = styled(motion.p)`
  position: absolute;
  bottom: -24px;
  padding: 4px 12px;
  border-radius: 16px;
  border: 1px solid ${color.utils.error};
  cursor: pointer;
  color: ${color.utils.error};
`;
const OwnedToaster = styled.p`
  padding: 8px 8px;
  background-color:${color.background.tint};
  border-radius: 8px;
`;
const SNSLink = styled.a`
  display:flex;
  border-radius: 4px;
  background-size: contain;
  padding:8px;
  margin:0 4px 0 0;
  cursor:pointer;
  ${curve.button};
  opacity:1;
  
  &:hover{opacity:0.8}
  
`

const SNSs = styled.div`
  display: flex;

`