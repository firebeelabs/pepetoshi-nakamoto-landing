import Button, { ButtonProps } from "@mui/material/Button";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface StyledButtonProps extends ButtonProps {
  iconBackgroundColor?: string;
}

export const StyledButton = styled(Button)<StyledButtonProps>`
  box-shadow: none !important;
  text-transform: uppercase;
  height: 56px;
  padding: 0 24px;
  border-radius: 16px;
  text-transform: uppercase;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-weight: 700;
  overflow: hidden;
  padding-left: ${(props) => (props.startIcon ? "72px" : "24px")};

  .MuiButton-startIcon {
    position: absolute;
    height: 57px;
    width: 57px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -1px;
    left: -1px;
    background: ${(props) => props.iconBackgroundColor || "black"};
    margin: 0;
    z-index: 2;
  }

  .MuiSvgIcon-root {
    z-index: 2;
    font-size: 28px;
  }

  ${(props) =>
    props.variant === "outlined" &&
    css`
      border-width: 3px !important;
    `};
`;
