import React from "react";
import { StyledImage, StyledTokenomic } from "./Tokenomic.styled";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Grid from "@mui/material/Grid";

interface TokenomicProps {
  tokenomic: {
    title: string;
    imageUrl: string;
    heading1?: string;
    heading2?: string;
    description1?: string;
    description2?: string;
  };
}

const Tokenomic: React.FC<TokenomicProps> = ({ tokenomic }) => {
  const { title, imageUrl, heading1, heading2, description1, description2 } =
    tokenomic;

  return (
    <StyledTokenomic>
      <Typography
        variant="body1"
        color="white"
        sx={{ opacity: 0.6 }}
        textAlign="center"
        mb={2}
      >
        {title}
      </Typography>
      <StyledImage>
        <Image src={imageUrl} alt={title} fill />
      </StyledImage>

      <Grid container spacing={2} display="flex" alignItems="center">
        {heading1 && (
          <Grid item xs={12} md={description2 ? 4 : 12}>
            <Typography
              variant={description1 ? (description2 ? "h4" : "h5") : "h2"}
              color="primary.main"
              mt={2}
              textAlign={{
                xs: "center",
                md: description2 ? "right" : "center",
              }}
            >
              {heading1}
            </Typography>
          </Grid>
        )}
        {description1 && (
          <Grid item xs={12} md={description2 ? 8 : 12}>
            <Typography
              variant="body1"
              color="white"
              mt={1}
              textAlign={{
                xs: "center",
                md: !description2 ? "center" : "left",
              }}
            >
              {description1}
            </Typography>
          </Grid>
        )}
      </Grid>
      {description2 && heading2 && (
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h4"
              color="primary.main"
              mt={2}
              textAlign={{ xs: "center", md: "right" }}
            >
              {heading2}
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="body1"
              color="white"
              mt={1}
              textAlign={{ xs: "center", md: "left" }}
            >
              {description2}
            </Typography>
          </Grid>
        </Grid>
      )}
    </StyledTokenomic>
  );
};

export default Tokenomic;
