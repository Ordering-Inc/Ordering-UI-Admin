import styled from 'styled-components'

export const OrderDetailsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;

  > div:first-child {
    color: ${props => props.theme.colors?.headingColor};
    width: 100%;
    h1 {
      font-size: 24px;
      margin: 0px;
      font-weight: 700;
    }

    p {
      font-size: 14px;
      margin: 0px;
    }
  }

  > div:not(:first-child) {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    > div:not(:first-child) {
      margin-bottom: 0px;
    }
  }
`

export const ButtonLink = styled.div`
  cursor: pointer;
  padding: 5px;
  margin: 0 5px;

  &:hover {
    background-color: ${props => props.theme.colors?.secundary};
    border-radius: 5px;
  }

  svg {
    color: ${props => props.theme.colors?.secundaryContrast};
    font-size: 24px;
  }
`
