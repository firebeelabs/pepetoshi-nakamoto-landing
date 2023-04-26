import React from "react";
import { StyledUtility } from "./Utility.styled";
import Typography from "@mui/material/Typography";

interface UtilityProps {
  utility: string;
}

const Utility: React.FC<UtilityProps> = ({ utility }) => {
  return (
    <StyledUtility>
      <Typography variant="body1" color="white" textAlign="center">
        {utility}
      </Typography>
    </StyledUtility>
  );
};

export default Utility;
