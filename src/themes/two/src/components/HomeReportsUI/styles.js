import styled, { css } from 'styled-components'

export const HomeReportsContainer = styled.div`
  margin-top: 23px;
  width: 100%;

  @media (min-width: 800px) {
    width: 45%;
    ${({ isDirection }) => isDirection ? css`
      margin-top: 0;
    ` : css`
      margin-top: 23px;
      width: 100%;
    `}
  }
`

export const HomeReportsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 600;
    font-size: 16px;
    color: ${props => props.theme?.colors.headingColor};
  }

  button {
    border-radius: 7.6px;
  }
`

export const ReportsContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 800px) {
    ${({ isDirection }) => isDirection ? css`
      flex-direction: column;
    ` : css`
      flex-direction: row-reverse;
      justify-content: space-between;
    `}
  }
`

export const OrdersAndSalesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  > div {
    width: 100%;
  }

  @media (min-width: 800px) {
    ${({ isDirection }) => isDirection ? css`
      flex-direction: row;
      > div {
        width: 48%;
      }
    ` : css`
      width: 45%;
      flex-direction: column;
      > div {
        width: 100%;
      }
    `}
  }
`

export const SalesChartWrapper = styled.div`
  margin-top: 21px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  padding: 17px 25px;

  @media (min-width: 800px) {
    ${({ isFullWidth }) => isFullWidth ? css`
      width: 100%;
    ` : css`
      width: 45%;
    `}
  }

`

export const OrdersOrSalesContainer = styled.div`
  margin-top: 21px;
  padding: 14px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
`

export const DetailsContent = styled.div`
  p {
    text-transform: uppercase;
    font-size: 14px;
    color: ${props => props.theme?.colors.headingColor};
    margin: 0;
  }

  h2 {
    font-weight: 500;
    font-size: 28px;
    color: ${props => props.theme?.colors.headingColor};
    margin: 0;
  }
`

export const BoxIconContainer = styled.div`
  width: 63px;
  height: 63px;
  background: #D4F2FF;
  border-radius: 7.6px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 27px;
    color: ${props => props.theme?.colors.primary};
  }

  ${({ isSales }) => isSales && css`
    background: #E3FEF3;
    svg {
      color: #00D27A;
    }
  `}
`

export const ChartHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  p {
    text-transform: uppercase;
    margin: 0;
    font-size: 14px;
    color: ${props => props.theme?.colors.headingColor};
    margin-bottom: 15px;
  }

  h3 {
    margin: 0;
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.theme?.colors.headingColor};
    margin-bottom: 15px;
  }
`
