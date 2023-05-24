import styled from "styled-components";

interface BackgroundStyleProps {
  color: string;
}

export const BackgroundStyle = styled.section<BackgroundStyleProps>`
  ${({ theme, color }) => {
    return {
      backgroundColor: theme[color],
      overflowX: "hidden",
      position: "relative",
    };
  }}
`;

export const Margin = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
  position: relative;

  :first-child() {
    padding-bottom: 0;
  }
`;
