import React from "react";
import Container from "../Container/Container";
import { StyledSection } from "./Section.styled";

interface SectionProps {
  children: React.ReactNode;
  color?: "primary" | "secondary";
  id?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  color = "primary",
  id,
}) => {
  return (
    <StyledSection color={color} id={id}>
      <Container>{children}</Container>
    </StyledSection>
  );
};

export default Section;
