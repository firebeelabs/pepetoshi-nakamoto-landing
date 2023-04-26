import styled from "@emotion/styled";

export type FeatureColor = "primary" | "secondary" | "third" | "fourth";

const getColor = (color: FeatureColor) => {
  switch (color) {
    case "primary":
      return "#a7de50";
    case "secondary":
      return "#8BC842";
    case "third":
      return "#67AC31";
    case "fourth":
    default:
      return "#569F29";
  }
};

export const StyledFeature = styled.div<{ color: FeatureColor }>`
  padding: 16px 40px 16px 16px;
  background: ${(props) => getColor(props.color)};
  border-radius: 24px;

  ${(props) => props.theme.breakpoints.down("md")} {
    padding: 16px;
  }
`;

export const StyledImage = styled.div`
  width: 100%;
  aspect-ratio: 1.83 / 1;
  height: auto;
  position: relative;

  img {
    max-width: 100%;
  }
`;
