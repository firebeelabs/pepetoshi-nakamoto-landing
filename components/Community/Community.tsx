import React from "react";
import Container from "../Container/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Feature from "./Feature";

const Community = () => {
  const features = [
    {
      image: {
        src: "/images/community-1.svg",
        alt: "",
      },
      description:
        "Compete in Pepe Run, our easy, multiplayer platform game and earn rewards #peperun",
      color: "primary" as "primary",
    },
    {
      image: {
        src: "/images/community-2.svg",
        alt: "",
      },
      description:
        "Compete in Pepe Run, our easy, multiplayer platform game and earn rewards #peperun",
      color: "secondary" as "secondary",
    },
    {
      image: {
        src: "/images/community-3.svg",
        alt: "",
      },
      description:
        "Compete in Pepe Run, our easy, multiplayer platform game and earn rewards #peperun",
      color: "third" as "third",
    },
    {
      image: {
        src: "/images/community-4.svg",
        alt: "",
      },
      description:
        "Compete in Pepe Run, our easy, multiplayer platform game and earn rewards #peperun",
      color: "fourth" as "fourth",
    },
  ];
  return (
    <>
      <Typography variant="h2" color="primary.main" textAlign="center" mb={3}>
        Community: The Pepetoshis's Finest
      </Typography>
      <Typography variant="h5" color="white" textAlign="center" mb={5}>
        Join our family and immerse yourself in a lively and supportive
        ecosystem:
      </Typography>
      <Grid container spacing={3}>
        {features.map((feature, index) => (
          <Grid item xs={12} md={6} key={`feature-${index}`}>
            <Feature feature={feature} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Community;
