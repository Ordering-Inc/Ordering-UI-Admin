import styled from 'styled-components'

export const DriversHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme.colors.headingColor};
    font-size: 24px;
    font-weight: 500;
    margin: 0px;
    text-transform: capitalize;
  }
`

export const DriversContainer = styled.div`
  width: 100%;
  transition: all 0.5s;
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
  margin-top: 60px;

  @media (min-width: 760px) {
    margin-top: 0px;
    padding: 20px;
  }

  @media print {
    display: none;
  }
`
export const DriversContent = styled.div`
`
