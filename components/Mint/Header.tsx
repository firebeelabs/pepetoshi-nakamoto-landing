import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { StyledLogo } from "./Header.styled";
import Image from "next/image";
import { Box } from "@mui/material";

const Header = () => {
  return (
    <Box mb={4}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ md: "center" }}
        spacing={3}
      >
        <Box height={128} width={128}>
          <StyledLogo>
            <Image src="/images/pepet-token-1.png" alt="NFT" fill />
          </StyledLogo>
        </Box>
        <div>
          <Typography variant="h4" color="white">
            Pepe Rare&apos;s KEKmint Exclusive Pass
          </Typography>
        </div>
      </Stack>
      <Typography
        variant="body1"
        color="white"
        sx={{ opacity: 0.8 }}
        component="p"
        mt={4}
      >
        Introducing the Pepe Rare&apos;s KEKmint Exclusive Pass - a limited
        edition NFT drop featuring an array of ultra-rare Pepe-themed
        collectibles, each granting holders exclusive access to future NFT drops
        from the Kek Mint Launchpad platform. This collection will be an
        unforgettable fusion of art, humor, and utility, offering the perfect
        blend of excitement and exclusivity that meme enthusiasts and NFT
        collectors crave.
      </Typography>
    </Box>
  );
};

export default Header;
