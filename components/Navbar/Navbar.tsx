import React from "react";
import Stack from "@mui/material/Stack";
import { StyledNavbar } from "./Navbar.styled";
import Image from "next/image";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <StyledNavbar>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Image
          src="/images/logo.svg"
          alt="Pepetoshi Nakamoto Logo"
          width={56}
          height={56}
        />
        <NavLinks />
      </Stack>
    </StyledNavbar>
  );
};

export default Navbar;
