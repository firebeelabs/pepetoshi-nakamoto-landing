import styled from "@emotion/styled";

export const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  background: #caf861;
  margin: 24px 0;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    top: -10px;
    background: #caf861;
    box-shadow: 0px 0px 28px #caf861;
    transform: rotate(45deg);
  }
`;
