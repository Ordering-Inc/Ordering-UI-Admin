import styled from 'styled-components'

export const BusinessMoreDetailContainer = styled.div`
  box-sizing: border-box;
  @media (min-width: 576px) {
    padding: 20px;
  }
`
export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors?.headingColor};
  margin-bottom: 30px;
`

export const ToggleItemWrapper = styled.div`
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid #E9ECEF;
  font-weight: 500;
`

export const AccordionTitle = styled.div`
  text-transform: capitalize;
`

export const ContentWrapper = styled.div`
  padding: 10px;
`

export const TaxManagerWrapper = styled.div`
  padding: 10px;
`
