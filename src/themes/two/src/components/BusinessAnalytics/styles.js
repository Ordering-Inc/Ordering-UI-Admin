import styled from "styled-components"

export const BusinessAnalyticsContainer = styled.div`
  width: 100%;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  padding: 20px;
`

export const BusinessAnalyticsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }

  h1 {
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.theme.colors.headingColor};
  }
`
