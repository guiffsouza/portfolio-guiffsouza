import styled from "styled-components"

interface TituloProps {
  variant?: 'white' | 'black' | 'red';
}

export const Titulo = styled.h2<TituloProps>`
  ${({theme, variant = 'white'})=>{
    return {
      fontWeight: '700',
      fontSize: '40px',
      color: theme[variant],
      textAlign: 'center',
    }
  }}

  span{
    color: #ff5b50;
  }
`

interface ContentProps {
  column: string;
  row: string;
  border?: boolean;
  variant: string;
}

export const Content = styled.div<ContentProps>`
  ${({variant, theme, column, row, border = false}) => {
    return {
      gridRow: row,
      gridColumn: column,
      borderRight: border ? `1px solid ${theme[variant]}` : 'none',
      borderBottom: border ? `1px solid ${theme[variant]}` : 'none',
      height: "100%",
      position: "relative",
    }
  }}
`