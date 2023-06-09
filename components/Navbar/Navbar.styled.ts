import styled from "@emotion/styled";
import Button from "../Button/Button";
import Menu from "@mui/material/Menu";

export const StyledNavbar = styled.div<{ withBg?: boolean }>`
  padding: ${(props) => (props.withBg ? "32px 40px" : "32px 0")};
  background: ${(props) => (props.withBg ? "#0b3108" : "transparent")};
`;

export const StyledToggleButton = styled(Button)`
  width: 40px;
  height: 40px;
  min-width: 40px;
  background: #0c3308;
  border: 2px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 0 !important;
  padding: 0 !important;

  &:hover {
    background: #0c3308 !important;
  }

  .MuiSvgIcon-root {
    font-size: 20px;
  }

  .MuiSvgIcon-fontSizeSmall {
    font-size: 12px;
  }
`;

export const StyledMobileMenu = styled(Menu)`
  top: 48px;
  left: 0 !important;
  width: 100vw !important;
  border-radius: 0 !important;

  .MuiMenu-paper {
    border-radius: 0 !important;
    left: 0 !important;
    max-width: 100vw !important;
    box-shadow: none;
    background: #0c3308;
  }
  .MuiList-root {
    height: calc(100vh - 120px);
    border-radius: 0 !important;
    width: 100vw !important;
    padding: 24px;
  }
`;
