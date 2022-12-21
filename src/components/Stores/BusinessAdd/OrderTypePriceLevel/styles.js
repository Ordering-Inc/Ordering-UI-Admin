import styled, { css } from 'styled-components'

export const Container = styled.div`
  h2 {  
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 25px;
  }
`

export const PriceLevelContainer = styled.div`
  h2 {
    margin-bottom: 15px;
  }
`

export const PriceLevelList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + 20px);
  margin-left: -10px;

  ${props => props.theme.rtl && css`
    margin-right: -10px;
    margin-left: 0px;
  `}

  > div {
    width: calc(33.33% - 20px);
    margin: 10px;
  }

  @media (min-width: 576px) {
    > div {
      width: calc(20% - 20px);
    }
  }
`

export const PriceLevelItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
    transition: all 0.3s linear;
    min-width: 16px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    margin-left: 8px;
    ${props => props.theme.rtl && css`
      margin-right: 8px;
      margin-left: 0px;
    `}
  }

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors.primary};
    }
  `}
`
