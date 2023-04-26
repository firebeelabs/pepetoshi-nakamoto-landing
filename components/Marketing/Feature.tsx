import React from "react";
import { StyledFeature, StyledImage } from "./Feature.styled";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

interface FeatureProps {
  feature: {
    image: {
      src: string;
      alt: string;
    };
    description: string;
  };
}

const Feature: React.FC<FeatureProps> = ({ feature }) => {
  return (
    <StyledFeature>
      <Grid
        container
        spacing={2}
        display="flex"
        alignItems="center"
        sx={{ height: "100%" }}
      >
        <Grid item xs={12} md={5}>
          <StyledImage>
            <Image {...feature.image} fill />
          </StyledImage>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography
            variant="body1"
            color="white"
            fontSize={18}
            textAlign={{ xs: "center", md: "left" }}
          >
            {feature.description}
          </Typography>
        </Grid>
      </Grid>
    </StyledFeature>
  );
};

export default Feature;
