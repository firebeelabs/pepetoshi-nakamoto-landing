import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { StyledImage } from "./About.styled";
import * as ROUTES from "@/constants/routes";
import Stack from "@mui/material/Stack";
import Button from "../Button/Button";
import { DextoolsIcon, EtherscanIcon, UniswapIcon } from "@/theme/icons";
import Box from "@mui/material/Box";

const About = () => {
  const dexs = [
    {
      name: "Uniswap",
      href: ROUTES.UNISWAP,
      icon: <UniswapIcon />,
      iconBackgroundColor: "#FF007A",
    },
    {
      name: "Dextools",
      href: ROUTES.DEXTOOLS,
      icon: <DextoolsIcon viewBox="-3 0 24 24" />,
      iconBackgroundColor: "#05A3C9",
    },
    {
      name: "Etherscan",
      href: ROUTES.ETHERSCAN,
      icon: <EtherscanIcon />,
      iconBackgroundColor: "#21325B",
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} lg={3}>
        <StyledImage>
          <Image
            src="/images/about-pepetoshi-1.svg"
            alt="Pepetoshi Nakamoto"
            fill
          />
        </StyledImage>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography variant="h3" color="white" textAlign="center">
          About
        </Typography>
        <Typography variant="h2" color="primary.main" textAlign="center" mb={2}>
          Pepetoshi Nakamato
        </Typography>
        <Typography
          variant="body1"
          color="white"
          component="p"
          textAlign="center"
        >
          Money has been a meme since the dawn of civilization. Now frens, we
          bring you Pepetoshi Nakamoto, a revolutionary “kek coin” that combines
          the legendary status of that OG crypto god, Satoshi Nakamoto with the
          nostalgic charm of ya boi, Pepe the Frog. Pepetoshi Nakamoto aims to
          create a fun and rewarding experience for its community, hopping into
          the future of frenance with solid tokenomics, utility, game, NFTs and
          growth potential.
        </Typography>
        <Typography variant="h6" color="primary.main" my={2} textAlign="center">
          Buy on
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={{ md: "center" }}
          justifyContent={{ md: "center" }}
          spacing={3}
        >
          {dexs.map((dex, index) => (
            <Box display="flex" justifyContent="center" key={`dex-${index}`}>
              <Button
                variant="contained"
                color="primary"
                type="button"
                startIcon={dex.icon}
                iconBackgroundColor={dex.iconBackgroundColor}
                onClick={() => window.open(dex.href, "_blank")}
              >
                {dex.name}
              </Button>
            </Box>
          ))}
        </Stack>
      </Grid>
      <Grid item xs={12} lg={3}>
        <StyledImage>
          <Image
            src="/images/about-pepetoshi-2.svg"
            alt="Pepetoshi Nakamoto"
            fill
          />
        </StyledImage>
      </Grid>
    </Grid>
  );
};

export default About;
