import React from "react";
import { StyledTokenomics } from "./Tokenomics.styled";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Tokenomic from "./Tokenomic";

const Tokenomics = () => {
  const tokenomics = [
    {
      title: "Token symbol:",
      imageUrl: "/images/tokenomics-1.svg",
      heading1: "$PEPET",
      description1: "decentralization, feels good man",
    },
    {
      title: "Initial supply:",
      imageUrl: "/images/tokenomics-2.svg",
      heading1: "21,000,000,000 $PEPET",
      description1: "reflecting Bitcoin's maximum supply",
    },
    {
      title: "Distribution:",
      imageUrl: "/images/tokenomics-3.svg",
      heading1: "85%",
      heading2: "15%",
      description1: "goes to liquidity pool",
      description2: "CEX listings, partnerships, burn, airdrops",
    },
    {
      title: "Utility:",
      imageUrl: "/images/tokenomics-4.svg",
      description1:
        "$PEPET tokens can be used for staking, NFT drop access, and exclusive access to Pepetoshi-themed events and merchandise",
    },
    {
      title: "Burn:",
      imageUrl: "/images/tokenomics-5.svg",
      description1: "Burning rewards for community levels achievements",
    },
  ];

  return (
    <StyledTokenomics>
      <Typography variant="h2" color="primary.main" mb={3} textAlign="center">
        Kekenomics
      </Typography>
      <Grid container spacing={3}>
        {tokenomics.map((tokenomic, index) => (
          <Grid item xs={12} md={4} lg={12 / 5} key={`tokenomic-${index}`}>
            <Tokenomic tokenomic={tokenomic} />
          </Grid>
        ))}
      </Grid>
    </StyledTokenomics>
  );
};

export default Tokenomics;
