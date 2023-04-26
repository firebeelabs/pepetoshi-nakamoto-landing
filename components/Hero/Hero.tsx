import React from "react";
import Navbar from "../Navbar/Navbar";
import {
  StyledBackground,
  StyledContent,
  StyledHero,
  StyledPepetoshi,
} from "./Hero.styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const Hero = () => {
  return (
    <StyledHero>
      <StyledBackground>
        <Image
          src="/images/hero-bg.svg"
          alt="Background"
          fill
          quality={100}
          priority
        />
      </StyledBackground>
      <Navbar />

      <StyledContent>
        <Box position="relative">
          <Typography variant="h5" color="white" textAlign="center">
            The Crypto Kek-tastic Adventure
          </Typography>
          <Typography variant="h1" color="white" textAlign="center">
            Pepetoshi <br />
            Nakamoto
          </Typography>
          <StyledPepetoshi>
            <img src="/images/hero-pepetoshi.png" alt="Pepetoshi Nakamoto" />
          </StyledPepetoshi>
        </Box>
      </StyledContent>
    </StyledHero>
  );
};

export default Hero;
