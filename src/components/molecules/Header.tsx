import { FunctionComponent, useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { color, font, media, zIndex } from "../../styles";
import { Link as Scroll } from "react-scroll";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";
import { useMedia } from "../../utils/useMedia";
import PrimaryButton from "../Atoms/PrimaryButton";
import { useConnectWallet } from "../../hooks/useConnectWallet";
import {
  useClaimNFT,
  useDisconnect,
  useEditionDrop,
  useNetwork,
  useNetworkMismatch,
  useNFTs,
} from "@thirdweb-dev/react";
import { BigNumber } from "ethers";
import { NftContractContext } from "../../contexts/NFTContractProvider";
import { Token } from "@thirdweb-dev/sdk";
import { sceneState } from "../../utils/sceneState";

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
  const editionDropContract = useEditionDrop(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
  );

  // Get all NFTs from the Edition Drop contract
  const { data: nfts, isLoading } = useNFTs(editionDropContract);

  // Claim an NFT (and update the nfts above)
  const { mutate: claimNft, isLoading: claiming } =
    useClaimNFT(editionDropContract);

  //load owned token from NFTContractProvider
  const { ownedToasters, isContextLoading } = useContext(NftContractContext);

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
        <HeaderLinkItem
          destination={"recipe"}
          label={"Recipe"}
          height={height}
          isSPMenuOpen={isSPMenuOpen}
        />
        <HeaderLinkItem
          destination={"projects"}
          label={"Projects"}
          height={height}
          isSPMenuOpen={isSPMenuOpen}
        />
        <HeaderLinkItem
          destination={"studio"}
          label={"Studio"}
          height={height}
          isSPMenuOpen={isSPMenuOpen}
        />
        {/* <HeaderLinkItem
          destination={"people"}
          label={"People"}
          height={height}
          isSPMenuOpen={isSPMenuOpen}
        /> */}
      </HeaderUL>
      {address ? (
        <WalletWrapper>
          <WalletInfo
            onClick={() => setIsShowDisconnectMenu(!isShowDisconnectMenu)}
          >
            👛:{truncate(address, 4)}
            <DisconnectMenu
              onClick={disconnectWallet}
              variants={disconnectMenu}
              animate={isShowDisconnectMenu ? "animate" : "initial"}
            >
              Disconnect
            </DisconnectMenu>
          </WalletInfo>
          <OwnedToaster>🍞 :{!isContextLoading && ownedToasters}</OwnedToaster>
          {networkMismatch ? (
            <PrimaryButton
              label={"Wrong Network"}
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
          <p
            onClick={() => {
              sceneState.isSuccessModalOpen = true;
            }}
          >
            open Dialog
          </p>
        </WalletWrapper>
      ) : (
        <PrimaryButton label={"Connect"} onClick={connectWallet} />
      )}
    </Container>
  );
};

export default Header;

const HeaderLinkItem: React.FC<{
  destination: string;
  label: string;
  height: number;
  isSPMenuOpen: boolean;
}> = ({ destination, label, height, isSPMenuOpen }) => {
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
      </LiAnimationWrap>
    ) : (
      <>
        {pathname === "/" && (
          <LiWrap>
            <HeaderLI variants={lgMenu} initial="hidden" whileHover={"visible"}>
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
                initial="hidden"
                whileHover={"visible"}
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
  grid-template-columns: auto auto auto;
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
    margin-bottom:24px;
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
        background-color:#e0e0e0;
        border-radius:16px;
    `}
`;

const LiWrap = styled.div`
  height: 32px;
  overflow: hidden;
  border-bottom: solid 1px ${color.content.dark};
  margin: 0px 16px;
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
  padding: 8px 16px;
  background-color: #e0e0e0;
  border-radius: 16px;
`;
