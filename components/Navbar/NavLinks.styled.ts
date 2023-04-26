import styled from "@emotion/styled";

export const StyledNavLinks = styled.ul`
  list-style-type: none;

  li {
    display: inline-block;
    margin-right: 32px;

    &:last-of-type {
      margin-right: 0;
    }
  }

  a {
    font-size: 16px;
    line-height: 20px;
    font-weight: 700;
    text-transform: uppercase;
    color: white;
  }
`;
