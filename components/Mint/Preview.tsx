import React from "react";
import { StyledPreview } from "./Preview.styled";
import Image from "next/image";

const Preview = () => {
  return (
    <StyledPreview>
      <Image src="/images/pepet-token-1.png" alt="NFT" fill />
    </StyledPreview>
  );
};

export default Preview;
