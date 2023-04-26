import React from "react";
import Container from "../Container/Container";
import { StyledSection } from "./Section.styled";

interface SectionProps {
  children: React.ReactNode;
  color?: "primary" | "secondary";
}

const Section: React.FC<SectionProps> = ({ children, color = "primary" }) => {
  return (
    <StyledSection color={color}>
      <Container>{children}</Container>
    </StyledSection>
  );
};

export default Section;
