import React from "react";
import Button from "../Button/Button";
import { StyledNavLinks } from "./NavLinks.styled";
import { Link } from "react-scroll";
import { WHITEPAPER } from "@/constants/routes";

interface NavLinksProps {
  onClose: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ onClose }) => {
  const navLinks = [
    {
      name: "About",
      href: "about",
    },
    {
      name: "Kekenomics & Utility",
      href: "tokenomics",
    },
    {
      name: "Community",
      href: "community",
    },
    {
      name: "Contact us",
      href: "contact",
    },
    {
      name: "Green paper",
      href: WHITEPAPER,
    },
  ];

  return (
    <StyledNavLinks>
      {navLinks.map((link, index) => {
        if (link.href.includes("https")) {
          return (
            <li key={`nav-link-${index}`}>
              <a href={link.href} target="_blank">
                {link.name}
              </a>
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
        <Button variant="contained" color="primary" type="button">
          Buy Token
        </Button>
      </li>
      <li>
        <Button variant="outlined" color="primary" type="button">
          Connect Wallet
        </Button>
      </li>
    </StyledNavLinks>
  );
};

export default NavLinks;
