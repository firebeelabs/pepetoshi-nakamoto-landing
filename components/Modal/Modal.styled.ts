import styled from "@emotion/styled";

export const StyledModalContainer = styled.div`
  position: absolute;
  background: #204512;
  border-radius: 16px;
  padding: 32px;
  max-width: calc(100% - 106px);
  width: 100%;
  top: 48px;
  margin: 0 16px;
  border: 3px solid #caf861;

  ${(props) => props.theme.breakpoints.up("md")} {
    width: 600px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StyledCloseButton = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  color: white;
  cursor: pointer;
  transition: opacity 350ms;

  &:hover {
    opacity: 0.6;
  }
`;
