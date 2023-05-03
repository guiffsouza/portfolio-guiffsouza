import styled from "styled-components";

export const BoxHomePage = styled.div`
  height: auto;
  padding: 20px 0;
`

export const BoxCardStack = styled.div`
  display: grid;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  align-items: center;
`

export const BoxTitulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row: 1;
`

export const Titulo = styled.h2`
  ${()=>{
    return {
      fontWeight: '700',
      fontSize: '40px',
      color: "#FFF",
      textAlign: 'center',
      ":last-child": {
        marginLeft: '15px',
        color: "#ff5b50",
      }
    }
  }}
`