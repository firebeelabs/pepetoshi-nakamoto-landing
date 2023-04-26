import React from "react";
import { FeatureColor, StyledFeature, StyledImage } from "./Feature.styled";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

interface FeatureProps {
  feature: {
    image: {
      src: string;
      alt: string;
    };
    description: string;
    color: FeatureColor;
  };
}

const Feature: React.FC<FeatureProps> = ({ feature }) => {
  return (
    <StyledFeature color={feature.color}>
      <Grid container spacing={2} display="flex" alignItems="center">
        <Grid item xs={12} md={7}>
          <StyledImage>
            <Image {...feature.image} fill />
          </StyledImage>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="body1" color="black" fontSize={18}>
            {feature.description}
          </Typography>
        </Grid>
      </Grid>
    </StyledFeature>
  );
};

export default Feature;
