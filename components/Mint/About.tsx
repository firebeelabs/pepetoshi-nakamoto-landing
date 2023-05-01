import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box mt={5}>
      <Typography variant="h5" color="white" fontFamily="Rubik" mb={1}>
        Potential Collaborations:
      </Typography>
      <Typography variant="body1" color="rgba(255, 255, 255, 0.8)" mb={3}>
        We will collaborate with well-known meme artists and influencers in the
        digital space to amplify the Pepe Rare&apos;s KEKmint Exclusive Pass.
        These partnerships will drive excitement and interest in the drop while
        providing exposure for both the platform and the artists involved.
      </Typography>
      <Typography variant="h5" color="white" fontFamily="Rubik" mb={1}>
        Pricing Structure:
      </Typography>
      <Typography variant="body1" color="rgba(255, 255, 255, 0.8)" mb={3}>
        Users holding at least 5 million $PEPET tokens will receive free mint
        access.
      </Typography>
      <Typography variant="h5" color="white" fontFamily="Rubik" mb={1}>
        Incentive Plan:
      </Typography>
      <ol>
        <li>
          Buybacks: 5% of $PEPET tokens from secondary NFT sales will be used
          for buybacks, stabilizing the token&apos;s price and supporting the
          ecosystem.
        </li>
        <li>
          Pepe Run Skins: Pepe Rare NFT holders will unlock unique skins for the
          Pepe Run game, adding an additional layer of utility and excitement.
        </li>
        <li>
          Bonus $PEPET Airdrops: Mint and hold NFT to receive tokens in upcoming
          $PEPET airdrop.
        </li>
      </ol>
      <Typography variant="h5" color="white" fontFamily="Rubik" mb={1} mt={3}>
        Storytelling & Gamification:
      </Typography>
      <Typography variant="body1" color="rgba(255, 255, 255, 0.8)" mb={1}>
        The Pepe Rare&apos;s KEKmint Exclusive Pass will incorporate
        storytelling through a comic book-style narrative that unfolds across
        the collection. Each NFT will represent a unique scene from Pepe&apos;s
        adventures, with hidden easter eggs and clues encouraging collectors to
        piece together the storyline.
      </Typography>
      <Typography variant="body1" color="rgba(255, 255, 255, 0.8)" mb={1}>
        To enhance user engagement, the Pepe Rare NFTs will be integrated with a
        &quot;PepeRun&quot; game on the KEKmint platform. Users will complete
        challenges and quests, earning points and unlocking rewards, such as
        exclusive NFTs or access to future drops.
      </Typography>
      <Typography variant="body1" color="rgba(255, 255, 255, 0.8)">
        The Pepe Rare&apos;s KEKmint Exclusive Pass NFT drop will not only offer
        an exciting and visually captivating collection but also leverage
        collaborations, incentives, and gamification to create a unique,
        immersive experience that stands out in the NFT space.
      </Typography>
    </Box>
  );
};

export default About;
