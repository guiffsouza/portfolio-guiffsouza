import styled from "styled-components";

export const BackgroundStyle = styled.section`
  ${({theme})=>{
    return {
      backgroundColor: theme.bodyBackground,
    }
  }}
`

export const Margin = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
`