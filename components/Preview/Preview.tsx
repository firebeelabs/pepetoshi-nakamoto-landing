import React from "react";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { StyledImage } from "./Preview.styled";

const Preview = () => {
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
      <StyledImage>
        <Image src="/images/browser-2.png" alt="Browser" fill quality={100} />
      </StyledImage>
    </>
  );
};

export default Preview;
