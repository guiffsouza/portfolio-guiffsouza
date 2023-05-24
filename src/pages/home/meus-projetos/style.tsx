import styled from "styled-components";
import { BsGithub } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface BoxGridProps {
  margin: string;
  width: string;
}

export const BoxGrid = styled.div<BoxGridProps>`
  ${({ margin, width }) => {
    return {
      position: "relative",
      width: `${width}px`,
      display: "flex",
      marginLeft: `${margin}px`,
      transition: "all ease-in-out 0.3s",
    };
  }}

  @media screen and (max-width: 900px) {
    width: auto;
    flex-direction: column;
    padding: 20px;
  }

  @media screen and (max-width: 400px) {
    width: auto;
    flex-direction: column;
    padding: 10px;
  }
`;

export const Container = styled.div`
  padding: 40px 0;
`;

interface BoxArrowProps {
  position: string;
  hover: boolean;
}

export const BoxArrow = styled.div<BoxArrowProps>`
  height: 300px;
  background-color: ${({ theme }) => theme.black};
  position: absolute;
  z-index: 9;
  top: 50%;
  margin-top: -60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ease-in-out 0.3s;

  ${({ position, hover }) => {
    return {
      [position]: "-50px",
      filter: hover ? "opacity(0.5)" : "opacity(0)",
      ":hover": {
        filter: "opacity(0.5)",
      },
    };
  }}
`;

export const ArrowLeft = styled(AiOutlineArrowLeft)`
  font-size: 3em;
  color: ${({ theme }) => theme.main};

  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.borda};
  }
`;

export const ArrowRight = styled(AiOutlineArrowRight)`
  font-size: 3em;
  color: ${({ theme }) => theme.main};

  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.borda};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  grid-template-rows: 1fr 2fr;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  margin-right: 80px;

  @media screen and (max-width: 900px) {
    display: flex;
    background-color: ${({ theme }) => theme.black};
    margin-top: 10px;
    margin-right: 0;
    width: auto;
    gap: 0;
    padding: 20px;
  }

  @media screen and (max-width: 400px) {
    justify-content: center;
    align-items: center;
  }
`;

interface ImageProps {
  image: string;
}

export const Image = styled.div<ImageProps>`
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  height: 300px;
  border-radius: 20px;

  @media screen and (max-width: 900px) {
    display: flex;
  }
`;

export const BoxTexto = styled.div`
  width: 100%;
  h1 {
    color: ${({ theme }) => theme.white};
    font-size: 2em;
    font-weight: 600;
    margin-bottom: 20px;
  }
  p {
    color: ${({ theme }) => theme.borda};
    line-height: 30px;
    font-size: 1.5em;
    margin-bottom: 20px;

    @media screen and (max-width: 900px) {
      color: ${({ theme }) => theme.white};
      font-weight: 300;
    }

    @media screen and (max-width: 400px) {
      font-size: 1em;
    }
  }
  span {
    color: ${({ theme }) => theme.white};
    font-weight: 600;
  }
`;

export const BoxIcon = styled.div`
  position: absolute;
  right: 10px;
  a {
    text-decoration: none;
  }

  @media screen and (max-width: 400px) {
    top: 0;
    right: 0;
  }
`;

export const GitHubIcon = styled(BsGithub)`
  color: ${({ theme }) => theme.borda};
  font-size: 2em;
  :hover {
    color: ${({ theme }) => theme.main};
  }
`;
