import styled from "@emotion/styled";

export const StyledImage = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 0.95;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 400px;

  ${(props) => props.theme.breakpoints.down("lg")} {
    display: none;
  }
`;
