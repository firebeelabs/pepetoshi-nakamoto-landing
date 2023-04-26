import styled from "@emotion/styled";

export const StyledFeature = styled.div`
  padding: 24px;
  border: 1px solid #a7de50;
  border-radius: 24px;

  ${(props) => props.theme.breakpoints.up("md")} {
    height: 100%;
  }
`;

export const StyledImage = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
`;
