import styled from "@emotion/styled";

export const StyledUtility = styled.div`
  background: #104a0b;
  border-radius: 24px;
  padding: 24px;
  display: flex;
  align-items: center;
  min-height: 192px;

  ${(props) => props.theme.breakpoints.up("md")} {
    height: 100%;
    min-height: auto;
  }
`;
