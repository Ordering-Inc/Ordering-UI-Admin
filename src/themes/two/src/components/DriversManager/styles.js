import styled from 'styled-components'

export const DriversHeader = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    flex: 1;
    color: ${(props) => props.theme.colors.headingColor};
    font-size: 24px;
    font-weight: 500;
    margin: 0px;
    text-transform: capitalize;
  }

  > div {
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > div {
      margin-top: 0px;
    }
  }
`

export const DriversContainer = styled.div`
  flex: 1;
  transition: all 0.5s;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 60px;

  @media (min-width: 760px) {
    margin-top: 0px;
  }

  @media print {
    display: none;
  }
`
export const DriversContent = styled.div`
`
