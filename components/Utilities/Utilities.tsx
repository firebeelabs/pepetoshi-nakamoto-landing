import React from "react";
import { StyledUtilities } from "./Utilities.styled";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Utility from "./Utility";

const Utilities = () => {
  const utils = [
    "NFT Drops: Holders will have the opportunity to mint exclusive Pepetoshi Nakamoto NFTs",
    "Gaming: Pepetoshi Run: Play and get tokens, prizes and NFTs whitelists.",
    "Staking: Stake your PEPET tokens and gain access to exclusive surprises",
    "Pepetoshi-themed events and merchandise: Use your PEPET tokens for exclusive access to both virtual and in-person events, as well as to purchase merchandise",
  ];

  return (
    <StyledUtilities>
      <Typography variant="h2" color="primary.main" textAlign="center" mb={3}>
        Utility and Use Cases
      </Typography>
      <Typography variant="h5" color="white" textAlign="center" mb={5}>
        PepeToshi NakaM00N droppin' a $tack of moony use cases, <br /> got ya
        froggin' out with that kek hype, lol!
      </Typography>
      <Grid container spacing={3} sx={{ height: "100%" }}>
        {utils.map((utility, index) => (
          <Grid item xs={12} md={3} key={`utility-${index}`}>
            <Utility utility={utility} />
          </Grid>
        ))}
      </Grid>
    </StyledUtilities>
  );
};

export default Utilities;
