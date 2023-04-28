import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { StyledLogo } from "./Header.styled";
import Image from "next/image";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box mb={3}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ md: "center" }}
        spacing={3}
      >
        <StyledLogo>
          <Image src="/images/pepet-token-1.png" alt="NFT" fill />
        </StyledLogo>
        <div>
          <Typography variant="h4" color="white">
            CYBERPEPET
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography variant="h6" color="rgba(255, 255, 255, 0.8)">
              Minted:
            </Typography>
            <Typography variant="h6" color="white">
              2/500
            </Typography>
          </Stack>
        </div>
      </Stack>
      <Typography
        variant="body1"
        color="white"
        sx={{ opacity: 0.6 }}
        component="p"
        mt={2}
      >
        Prepare for the ultimate meme adventure with Pepetoshi NFT Collection!
        Discover 10,000 unique, utility-packed PFPs, each showcasing a dazzling
        array of rare traits to elevate your digital presence. Embrace the
        meme-sphere with Pepetoshi!
      </Typography>
    </Box>
  );
};

export default Header;
