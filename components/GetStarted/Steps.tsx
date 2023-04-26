import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { StyledLine } from "./Steps.styled";

const Steps = () => {
  const steps = [
    "Download a compatible wallet (i.e. Metamask) and purchase some Ethereum (ETH)",
    "Head over to Uniswap and swap your ETH for PEPET tokens",
    "Stake your PEPET tokens to earn reward and unlock exclusive benefits",
  ];

  return (
    <Grid container mb={5} spacing={{ xs: 3, md: 0 }}>
      {steps.map((step, index) => (
        <Grid item xs={12} md={4} key={`step-${index}`}>
          <Typography
            variant="h1"
            color="#104A0B"
            textAlign="center"
            fontSize={144}
            lineHeight="144px"
          >
            0{index + 1}
          </Typography>
          <StyledLine />
          <Typography
            variant="body1"
            fontSize={18}
            textAlign="center"
            color="white"
            px={4}
          >
            {step}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Steps;
