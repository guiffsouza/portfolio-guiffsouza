import styled from "styled-components";

interface ContentProps {
  column: string;
  row: string;
  rowMobile: string;
  borderRight?: boolean;
  borderBottom?: boolean;
}

export const Content = styled.div<ContentProps>`
  ${({ theme, column, row, borderRight = false, borderBottom = false }) => {
    return {
      gridRow: row,
      gridColumn: column,
      borderRight: borderRight ? `1px solid ${theme.borda}` : "none",
      borderBottom: borderBottom ? `1px solid ${theme.borda}` : "none",
      height: "100%",
      position: "relative",
    };
  }}

  @media screen and (max-width: 900px) {
    grid-column: 1;
    grid-row: ${({ rowMobile }) => rowMobile};
  }
`;
