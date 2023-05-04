import styled from "styled-components";
import { BsGithub } from "react-icons/bs";

export const Container = styled.div`
  padding: 20px 0;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 1fr 2fr;
  gap: 20px;
`


interface ImageProps {
  image: string
}

export const Image = styled.div<ImageProps>`
  background-image: url(${({image}) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  border-radius: 20px;
`

export const BoxTexto = styled.div`

  width: 100%;
  h1{
    color: #fff;
    font-size: 2em;
    font-weight: 600;
    margin-bottom: 20px;
  }
  p{
    color: #5A5757;
    line-height: 30px;
    font-size: 1.3em;
    margin-bottom: 20px;
  }
  span{
    color: #fff;
    font-weight: 600;
  }
`

export const BoxIcon = styled.div`
  position: absolute;
  right: 10px;
  a {
    text-decoration: none;
  }
`

export const GitHubIcon = styled(BsGithub)`
  color: #5A5757;
  font-size: 2em;
  :hover{
    color: #ff5b50;
  }
`