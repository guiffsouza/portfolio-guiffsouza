import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  height: 150px;
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
`;

export const ArrowTop = styled(AiOutlineArrowUp)`
  font-size: 2em;
  font-weight: 500;
`;
