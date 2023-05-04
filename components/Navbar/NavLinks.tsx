import React from "react";
import Button from "../Button/Button";
import { StyledNavLinks } from "./NavLinks.styled";
import { Link } from "react-scroll";
import { MINT, WHITEPAPER } from "@/constants/routes";
import WalletConnection from "../WalletConnection/WalletConnection";
import { useRouter } from "next/router";
import NextLink from "next/link";

interface NavLinksProps {
  onClose: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ onClose }) => {
  const router = useRouter();

  const navLinks = [
    {
      name: "About",
      href: "about",
      show: router.pathname === "/",
    },
    {
      name: "Kekenomics & Utility",
      href: "tokenomics",
      show: router.pathname === "/",
    },
    {
      name: "Community",
      href: "community",
      show: router.pathname === "/",
    },
    {
      name: "Contact us",
      href: "contact",
      show: router.pathname === "/",
    },
    {
      name: "Green paper",
      href: WHITEPAPER,
      show: true,
    },
    {
      name: "PEPET/MINT",
      href: MINT,
      show: router.pathname === "/",
    },
    {
      name: "Home page",
      href: "/",
      show: router.pathname === MINT,
    },
  ];

  return (
    <StyledNavLinks>
      {navLinks.map((link, index) => {
        if (!link.show) return;

        if (link.href.includes("https")) {
          return (
            <li key={`nav-link-${index}`}>
              <a href={link.href} target="_blank">
                {link.name}
              </a>
            </li>
          );
        }

        if (link.href.startsWith("/")) {
          return (
            <li key={`nav-link-${index}`}>
              <NextLink href={link.href}>{link.name}</NextLink>
            </li>
          );
        }

        return (
          <li key={`nav-link-${index}`}>
            <Link to={link.href} smooth onClick={onClose}>
              {link.name}
            </Link>
          </li>
        );
      })}
      <li>
        <Link to="about" smooth>
          <Button variant="contained" color="primary" type="button">
            Buy Token
          </Button>
        </Link>
      </li>
      <li>
        <WalletConnection />
      </li>
    </StyledNavLinks>
  );
};

export default NavLinks;
