import React, { useEffect, useRef } from "react";
import { StyledPreview } from "./Preview.styled";
import Image from "next/image";

const Preview = () => {
  return (
    <StyledPreview>
      {/* <Image src="/images/pepet-token-1.png" alt="NFT" fill /> */}
      <video autoPlay={true} controls>
        <source src="/video/pepe-rare-nft.mp4" type="video/mp4" />
      </video>
    </StyledPreview>
  );
};

export default Preview;
