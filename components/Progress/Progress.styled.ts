import LinearProgress from "@mui/material/LinearProgress";
import styled from "@emotion/styled";

export const StyledLinearProgress = styled(LinearProgress)`
  background: rgba(9, 43, 6, 0.2);
  height: 8px;
  border-radius: 8px;

  .MuiLinearProgress-bar {
    background: rgba(9, 43, 6, 0.8);
    border-radius: 8px;
  }
`;
