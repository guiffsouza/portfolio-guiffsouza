import styled from "styled-components"

export const Titulo = styled.h2`
  ${()=>{
    return {
      fontWeight: '700',
      fontSize: '40px',
      color: "#FFF",
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
}

export const Content = styled.div<ContentProps>`
  ${({column, row, border = false}) => {
    return {
      gridRow: row,
      gridColumn: column,
      borderRight: border ? '1px solid #5A5757' : 'none',
      borderBottom: border ? '1px solid #5A5757' : 'none',
      height: "100%",
      position: "relative",
    }
  }}
`