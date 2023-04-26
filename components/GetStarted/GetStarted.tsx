import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Steps from "./Steps";
import Stack from "@mui/material/Stack";
import * as ROUTES from "@/constants/routes";
import {
  DiscordIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
} from "@/theme/icons";
import Button from "../Button/Button";

const GetStarted = () => {
  const socialLinks = [
    {
      name: "Discord",
      icon: <DiscordIcon />,
      href: ROUTES.DISCORD,
      iconBackgroundColor: "#5865F2",
    },
    {
      name: "Telegram",
      icon: <TelegramIcon />,
      href: ROUTES.TELEGRAM,
      iconBackgroundColor: "#05A3C9",
    },
    {
      name: "Reddit",
      icon: <RedditIcon />,
      href: ROUTES.REDDIT,
      iconBackgroundColor: "#FF4500",
    },
    {
      name: "Twitter",
      icon: <TwitterIcon />,
      href: ROUTES.TWITTER,
      iconBackgroundColor: "#1DA1F2",
    },
  ];

  return (
    <Box py={12}>
      <Typography variant="h2" color="primary.main" textAlign="center" mb={3}>
        Get Started, Buy $PEPET Token
      </Typography>
      <Typography variant="h5" color="white" textAlign="center" mb={3}>
        Ready to hop into the future of finance with Pepetoshi Nakamoto?
        <br />
        Follow these simple steps:
      </Typography>
      <Steps />
      <Typography variant="h5" color="primary.main" mb={3} textAlign="center">
        Join our community on
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ md: "center" }}
        justifyContent={{ md: "center" }}
        spacing={3}
      >
        {socialLinks.map((link, index) => (
          <Box
            key={`get-started-link-${index}`}
            display="flex"
            justifyContent="center"
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={link.icon}
              iconBackgroundColor={link.iconBackgroundColor}
              onClick={() => window.open(link.href, "open")}
            >
              {link.name}
            </Button>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default GetStarted;
