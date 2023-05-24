import styled from "styled-components";

interface TituloProps {
  variant?: "white" | "main";
}

export const TituloStyle = styled.h2<TituloProps>`
  ${({ theme, variant = "white" }) => {
    return {
      fontWeight: "700",
      fontSize: "40px",
      color: theme[variant],
      textAlign: "center",
      padding: "40px 0",
    };
  }}

  @media screen and (max-width: 400px) {
    font-size: 30px;
  }

  span {
    color: ${({ theme }) => theme.main};
  }
`;
