import styled from "styled-components";
import { Banner2 } from "../../../services/imagens";

export const BackgroundMain = styled.main`
  background-image: url(${Banner2});
  background-color: ${({ theme }) => theme.bodyBackground};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;
  display: flex;
  position: relative;
  align-items: center;
  z-index: -1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(14, 14, 14, 52.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }

  @media screen and (max-width: 500px) {
    height: 85vh;
  }
`;

export const Margin = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
`;

export const BoxMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
`;

export const BoxTexto = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: nowrap;
  z-index: 8;

  p {
    color: white;
    line-height: 22px;
    font-size: 2em;
    margin-top: 20px;
    text-align: center;

    @media screen and (max-width: 900px) {
      line-height: normal;
    }

    @media screen and (max-width: 400px) {
      font-size: 1.4em;
    }
  }

  h1 {
    color: white;
    font-size: 3em;
    font-weight: 700;
    text-align: center;

    @media screen and (max-width: 400px) {
      font-size: 1.7em;
    }
  }
  span {
    color: ${({ theme }) => theme.main};
  }
`;
