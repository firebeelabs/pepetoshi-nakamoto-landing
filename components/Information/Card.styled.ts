import styled from "@emotion/styled";

export const StyledCard = styled.div`
  background: #0c3308;
  border-radius: 24px;
  padding: 48px;
  height: 100%;

  ${(props) => props.theme.breakpoints.down("md")} {
    padding: 24px;
  }
`;
