import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  align-items: center;
  gap: 40px;
`;

export const BoxTitulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row: 1;
  align-self: flex-start;
`;
