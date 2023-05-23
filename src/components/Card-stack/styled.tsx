import styled from "styled-components";

interface BackgroundCardProps {
  variant: string;
  column: string;
  row: string;
}

export const BackgroundCardStack = styled.div<BackgroundCardProps>`
  ${({ theme, variant, column, row }) => {
    return {
      backgroundColor: theme[variant],
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      width: "350px",
      height: "150px",
      margin: "10px",
      gridColumn: column,
      gridRow: row,
    };
  }}
`;
export const BoxTexto = styled.div`
  margin: 10px;
`;

export const Texto = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 20px;
`;

export const BoxImg = styled.div`
  max-width: 95px;
  img {
    border-radius: 500px;
    width: 100%;
  }
`;
