import React from "react";
import { StyledContact } from "./Contact.styled";
import Typography from "@mui/material/Typography";
import { DiscordIcon, EmailIcon, TelegramIcon } from "@/theme/icons";
import * as ROUTES from "@/constants/routes";
import Stack from "@mui/material/Stack";
import Button from "../Button/Button";
import Box from "@mui/material/Box";

const Contact = () => {
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
      name: "Email",
      icon: <EmailIcon />,
      href: ROUTES.EMAIL,
      iconBackgroundColor: "#67AC31",
    },
  ];
  return (
    <StyledContact>
      <Typography variant="h2" color="primary.main" textAlign="center" mb={3}>
        Contact Us
      </Typography>
      <Typography variant="h5" color="white" textAlign="center">
        Do you want to become a partner, need help or just want to share a
        hilarious Pepetoshi meme?
      </Typography>
      <Typography
        variant="body1"
        color="white"
        fontSize={18}
        textAlign="center"
        my={3}
      >
        Get in touch with us through any of our social media platforms or send
        an email to our support team.
      </Typography>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ md: "center" }}
        justifyContent={{ md: "center" }}
        spacing={3}
      >
        {socialLinks.map((link, index) => (
          <Box
            key={`contact-link-${index}`}
            display="flex"
            justifyContent="center"
          >
            <Button
              variant="contained"
              color="primary"
              type="button"
              startIcon={link.icon}
              iconBackgroundColor={link.iconBackgroundColor}
              onClick={() => window.open(link.href, "open")}
            >
              {link.name}
            </Button>
          </Box>
        ))}
      </Stack>
    </StyledContact>
  );
};

export default Contact;
