import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import {
  StyledMobileMenu,
  StyledNavbar,
  StyledToggleButton,
} from "./Navbar.styled";
import Image from "next/image";
import NavLinks from "./NavLinks";
import { Theme, useMediaQuery } from "@mui/material";
import { CloseIcon, MenuIcon } from "@/theme/icons";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <StyledNavbar>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Image
          src="/images/logo.svg"
          alt="Pepetoshi Nakamoto Logo"
          width={56}
          height={56}
        />
        {isMobile && (
          <>
            <StyledToggleButton
              variant="contained"
              color="info"
              type="button"
              onClick={handleClick}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </StyledToggleButton>
            <StyledMobileMenu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <NavLinks onClose={handleClose} />
            </StyledMobileMenu>
          </>
        )}
        {!isMobile && <NavLinks onClose={handleClose} />}
      </Stack>
    </StyledNavbar>
  );
};

export default Navbar;
