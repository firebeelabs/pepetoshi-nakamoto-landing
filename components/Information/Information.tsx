import React from "react";
import Grid from "@mui/material/Grid";
import Card from "./Card";

const Information = () => {
  const cards = [
    {
      title: "Team",
      description:
        "Our dedicated team of developers, meme enthusiasts, and crypto pioneers are committed to making Pepetoshi Nakamoto the ultimate crypto meme coin experience. We firmly believe that laughter is the best investment and work tirelessly to bring you the most entertaining and innovative project in the world of cryptocurrency.",
    },
    {
      title: "Legal Disclaimer",
      description:
        "Pepetoshi Nakamoto is a community-driven project, and as such, the tokens are not intended to be securities, nor do they grant any ownership rights or control over the project. Please conduct your own research and consult with financial advisors before making any investments.",
    },
    {
      title: "Join Us on the Pepetoshi Nakamoto Adventure Today!",
      description:
        "Jump in, frens, to the Pepetoshi Nakaoto ride, we mixin' that rare Pepe sauce with gaming & crypto. Dank memes, KEKistani vibes, & sm00th utilities, Pepetoshi Nakamoto got that rarest meme coin to kek ya all to the stratosphere.Suit up in froggo NFTs, grab 'em meme-backed Bitcorns, and let's leapfrog into the future of frenance – one kek at a time!",
    },
  ];

  return (
    <Grid container spacing={3}>
      {cards.map((card, index) => (
        <Grid item xs={12} md={4} key={`card-${index}`} sx={{ height: "100%" }}>
          <Card card={card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Information;
