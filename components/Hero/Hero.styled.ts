import styled from "@emotion/styled";

export const StyledHero = styled.div`
  padding: 0 40px;
  max-height: 844px;
  position: relative;
  overflow: hidden;

  h5 {
    text-shadow: 0px 12px 29px 0px #00000099;
  }

  h1 {
    text-shadow: 0px 10.72791576385498px 39.335689544677734px 0px #00000040;
  }

  border-bottom: 9px solid #caf861;

  ${(props) => props.theme.breakpoints.down("md")} {
    min-height: auto;
    height: 500px;
  }
`;

export const StyledBackground = styled.div`
  position: absolute;
  z-index: -1;
  display: none;

  ${(props) => props.theme.breakpoints.up("md")} {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: auto;
    height: auto;
    display: block;
  }
`;

export const StyledPepetoshi = styled.div`
  position: absolute;
  bottom: -430px;
  left: calc(50% - 32px);
  transform: translateX(-50%);
  width: 726px;
  height: 692px;
  z-index: 3;

  ${(props) => props.theme.breakpoints.down("md")} {
    width: 363px;
    height: 346px;
    bottom: -270px;
  }

  ${(props) => props.theme.breakpoints.down("xl")} {
    width: 504px;
    height: 576px;
    bottom: -270px;
  }
`;

export const StyledContent = styled.div`
  padding-top: 64px;
  padding-bottom: 256px;

  ${(props) => props.theme.breakpoints.down("md")} {
    padding: 24px 0 !important;
  }
`;
