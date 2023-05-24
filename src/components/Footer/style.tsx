import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 0 20px;

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const BotaoHome = styled.button`
  background-color: ${({ theme }) => theme.main};
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    margin: 20px;
  }
`;

export const ArrowTop = styled(AiOutlineArrowUp)`
  font-size: 2em;
  font-weight: 500;
`;
