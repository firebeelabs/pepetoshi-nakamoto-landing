import styled from "@emotion/styled";

export const StyledHero = styled.div`
  padding: 0 40px;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  h5 {
    text-shadow: 0px 12px 29px 0px #00000099;
  }

  h1 {
    text-shadow: 0px 10.72791576385498px 39.335689544677734px 0px #00000040;
  }
`;

export const StyledBackground = styled.div`
  position: absolute;
  width: 1000px;
  height: 1000px;
  top: 0;
  left: -50%;
  transform: translateX(-10%);
  z-index: -1;

  ${(props) => props.theme.breakpoints.up("md")} {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transform: translateX(0);
    width: auto;
    height: auto;
  }
`;

export const StyledPepetoshi = styled.div`
  position: absolute;
  bottom: -25%;
  left: calc(50% - 32px);
  transform: translateX(-50%);
  width: 45vw;
  height: auto;
  aspect-ratio: 1 / 1.05;
  z-index: 3;
`;
