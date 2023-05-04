import { css } from "@emotion/react";

export const globalStyles = css`
  body {
    margin: 0;
    background: #104a0b;
    font-family: "Rubik", sans-serif;
  }

  ol {
    padding: 0;
    margin: 0;
    padding-left: 16px;
  }

  li {
    font-family: "Rubik", sans-serif;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 8px;
  }

  li:last-of-type {
    margin-bottom: 0;
  }
`;
