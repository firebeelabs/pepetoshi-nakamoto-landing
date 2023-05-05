import styled from "@emotion/styled";

export const StyledImage = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 2.34/1;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const StyledGame = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1/0.6;
  position: relative;

  canvas {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;
