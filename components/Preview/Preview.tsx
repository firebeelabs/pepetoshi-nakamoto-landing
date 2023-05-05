import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { StyledGame, StyledImage } from "./Preview.styled";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useAccount } from "wagmi";

const Preview = () => {
  const { address, isConnected } = useAccount();

  const { unityProvider, sendMessage, isLoaded } = useUnityContext({
    loaderUrl: "/game/Build/PepeProjectWebGL.loader.js",
    dataUrl: "/game/Build/11b8212ba950cbec927accf3fa634d16.data",
    frameworkUrl: "/game/Build/40e7c05e0b59a2b16e5862ee65e0c71d.js",
    codeUrl: "/game/Build/36a6c0d6082b49f6d603987614573b7d.wasm",
    streamingAssetsUrl: "/game/StreamingAssets",
    webglContextAttributes: {
      preserveDrawingBuffer: true,
    },
  });

  useEffect(() => {
    if (isLoaded && isConnected && address)
      sendMessage("[Bridge]", "ReceiveMessageFromPage", address);
  }, [isLoaded, address, isConnected]);

  return (
    <>
      <Typography
        variant="caption"
        color="white"
        textAlign="center"
        component="p"
        mb={1}
      >
        Get ready for the big tournament by practicing to become
      </Typography>
      <Typography
        variant="h4"
        color="white"
        textAlign="center"
        mb={3}
        fontFamily="Rubik"
        fontWeight={700}
      >
        the quickest and secure token airdrops, prizes, and NFT whitelist spots!
      </Typography>
      <Typography
        variant="h2"
        color="primary.main"
        mb={3}
        textAlign="center"
        fontFamily="Rubik"
        fontWeight={700}
      >
        We already have the game developed
      </Typography>
      <StyledGame>
        <Unity unityProvider={unityProvider} />
      </StyledGame>
      {/* <StyledImage>
        <Image src="/images/browser-2.png" alt="Browser" fill quality={100} />
      </StyledImage> */}
    </>
  );
};

export default Preview;
