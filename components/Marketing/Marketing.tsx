import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Feature from "./Feature";

const Marketing = () => {
  const features = [
    {
      image: {
        src: "/images/marketing-1.svg",
        alt: "",
      },
      description:
        "Co-branded NFT drops: Collaborate with well-known artists and projects for exclusive NFT releases",
    },
    {
      image: {
        src: "/images/marketing-2.svg",
        alt: "",
      },
      description:
        "Joint events: Engage in fun and entertaining events with partner projects",
    },
    {
      image: {
        src: "/images/marketing-3.svg",
        alt: "",
      },
      description:
        "Cross-promotions: Boost our project's reach and awareness through strategic partnerships",
    },
  ];

  return (
    <Box mb={6}>
      <Typography variant="h2" color="primary.main" textAlign="center" mb={3}>
        Marketing and Partnerships
      </Typography>
      <Typography variant="h5" color="white" textAlign="center" mb={5}>
        We're hopping into the world of collaborations with popular influencers,
        <br />
        meme creators, and other crypto projects:
      </Typography>
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={4} key={`marketing-feature-${index}`}>
            <Feature feature={feature} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Marketing;
