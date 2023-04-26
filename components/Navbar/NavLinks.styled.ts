import styled from "@emotion/styled";

export const StyledNavLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    display: inline-block;

    margin-right: 32px;

    ${(props) => props.theme.breakpoints.down("md")} {
      display: block;
      margin-right: 0;
      margin-bottom: 24px;
    }

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
    transition: opacity 350ms;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }
`;
