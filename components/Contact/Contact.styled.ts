import styled from "@emotion/styled";

export const StyledContact = styled.div`
  background: rgba(202, 248, 97, 0.1);
  border: 3px solid #caf861;
  border-radius: 32px;
  padding: 64px;

  ${(props) => props.theme.breakpoints.down("md")} {
    padding: 24px;
  }
`;
