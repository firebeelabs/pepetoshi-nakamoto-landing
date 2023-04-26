import styled from "@emotion/styled";

export const StyledSection = styled.div<{ color: "primary" | "secondary" }>`
  padding: 128px 0;
  background: ${(props) =>
    props.color === "primary" ? "transparent" : "#0c3308"};

  ${(props) => props.theme.breakpoints.down("md")} {
    padding: 64px 0;
  }
`;
