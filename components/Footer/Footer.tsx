import React from "react";
import Container from "../Container/Container";
import { StyledFooter } from "./Footer.styled";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import * as ROUTES from "@/constants/routes";
import Link from "next/link";
import { Theme, useMediaQuery } from "@mui/material";

const Footer = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  const socialLinks = [
    {
      name: "Discord",
      href: ROUTES.DISCORD,
      icon: "/images/discord.svg",
    },
    {
      name: "Telegram",
      href: ROUTES.TELEGRAM,
      icon: "/images/telegram.svg",
    },
    {
      name: "Reddit",
      href: ROUTES.REDDIT,
      icon: "/images/reddit.svg",
    },
    {
      name: "Twitter",
      href: ROUTES.TWITTER,
      icon: "/images/twitter.svg",
    },
  ];

  return (
    <StyledFooter>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Image
            src="/images/logo.svg"
            alt="Pepetoshi Nakamoto Logo"
            width={56}
            height={56}
          />
          <Stack direction="row" alignItems="center" spacing={1}>
            {socialLinks.map((link, index) => (
              <a
                href={link.href}
                target="_blank"
                key={`footer-social-link-${index}`}
              >
                <Image
                  src={link.icon}
                  alt={link.name}
                  width={isMobile ? 36 : 72}
                  height={isMobile ? 28 : 56}
                />
              </a>
            ))}
          </Stack>
        </Stack>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
