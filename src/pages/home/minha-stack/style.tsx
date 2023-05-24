import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  gap: 40px;
  padding: 40px 0;

  @media screen and (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;
