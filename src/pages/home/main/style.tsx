import styled from "styled-components";
import { ImageBackgroundMain } from "../../../services/imagens";

export const BackgroundMain = styled.main`
  background-image: url(${ImageBackgroundMain});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 90vh;
  display: flex;
  align-items: center;
`

export const Margin = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
`

export const BoxMain = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const Linha = styled.div`
  padding: 20px 0 ;
  :last-child{
    padding: 0;
  }
`

export const BoxTexto = styled.div`
  max-width: 500px;
  :last-child{
    margin-top: 20px;
    margin-left: 40px;
  }
  
  p{
    color: white;
    line-height: 22px;
    max-width: 400px;
  }

  h1{
    color: white;
    font-size: 2.3em;
    font-weight: 700;
    line-height: 61px;
  }
  span{
    color: #ff5b50;
  }
`

export const Galeria = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 20px;
`

interface BoxImgProps {
  image: string;
  column: string;
  row: string;
}

export const BoxImg = styled.div<BoxImgProps>`
  background-image: url(${({image}) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  grid-column: ${({column}) => column};
  grid-row: ${({row}) => row};
  width: 100%;
  height: 198px;
  width: calc((1200px - 60px - 8px)/ 4);
  border: 1px solid #fff;
`