import React from "react";
import Button from "../Button/Button";
import { StyledNavLinks } from "./NavLinks.styled";

const NavLinks = () => {
  const navLinks = [
    {
      name: "About",
    },
    {
      name: "Tokenomics & Utility",
    },
    {
      name: "Community",
    },
    {
      name: "Contact us",
    },
    {
      name: "Whitepaper",
    },
  ];

  return (
    <StyledNavLinks>
      {navLinks.map((link, index) => (
        <li key={`nav-link-${index}`}>
          <a>{link.name}</a>
        </li>
      ))}
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
