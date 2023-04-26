import React from "react";
import { StyledCard } from "./Card.styled";
import Typography from "@mui/material/Typography";

interface CardProps {
  card: {
    title: string;
    description: string;
  };
}

const Card: React.FC<CardProps> = ({ card }) => {
  return (
    <StyledCard>
      <Typography variant="h4" color="primary" textAlign="center" mb={2}>
        {card.title}
      </Typography>
      <Typography
        variant="body1"
        color="white"
        fontSize={18}
        textAlign={{ xs: "center", md: "left" }}
      >
        {card.description}
      </Typography>
    </StyledCard>
  );
};

export default Card;
