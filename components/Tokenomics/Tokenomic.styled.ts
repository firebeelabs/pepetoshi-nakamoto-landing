import styled from "@emotion/styled";

export const StyledTokenomic = styled.div`
  background: #104a0b;
  border-radius: 24px;
  padding: 24px 16px;

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
