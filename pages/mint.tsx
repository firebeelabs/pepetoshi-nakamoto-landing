import Navbar from "@/components/Navbar/Navbar";
import { Box } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
import Preview from "@/components/Mint/Preview";
import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Mint/Header";
import MintToken from "@/components/Mint/MintToken";

const MintPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "linear-gradient(180deg, #072104 0%, #0C3308 44.01%)",
      }}
    >
      <Box mb={14}>
        <Navbar />
      </Box>
      <Container>
        <Grid container columnSpacing={16} display="flex" alignItems="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Preview />
          </Grid>
          <Grid item xs={12} md={6}>
            <Header />
            <MintToken />
          </Grid>
        </Grid>
      </Container>
      <Box mt={24}>
        <Footer />
      </Box>
    </Box>
  );
};

export default MintPage;
