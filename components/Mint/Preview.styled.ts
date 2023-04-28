import styled from "@emotion/styled";

export const StyledPreview = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 32px;
    filter: drop-shadow(0px 68px 100px #082205);
  }
`;
