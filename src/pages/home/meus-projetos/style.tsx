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
`;

export const Container = styled.div`
  padding: 20px 0;
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
  margin-top: -100px;
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
  padding: 20px 0;
  max-width: 1200px;
  width: 100%;
  margin-right: 80px;
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
  min-height: 300px;
  border-radius: 20px;
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
    font-size: 1.3em;
    margin-bottom: 20px;
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
`;

export const GitHubIcon = styled(BsGithub)`
  color: ${({ theme }) => theme.borda};
  font-size: 2em;
  :hover {
    color: #ff5b50;
  }
`;
