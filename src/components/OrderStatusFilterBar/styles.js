import styled, { css } from 'styled-components'

export const OrderStatusFilterBarContainer = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`
export const OrderStatusFilterInner = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  padding: 40px 6px;
  height: calc(100vh - 125px);
  box-sizing: border-box;
`

export const OrderStautsFilterItemContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

`

export const OrderStatusFilterItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.5;

  ${({ active }) => active && css`
    opacity: 1;
  `}

  img {
    width: 20px;
    height: 20px;
  }

  span {
    text-transform: capitalize;
    color: #151824;
    font-size: 16px;
  }

  @media (max-width: 992px) {
    width: 30px;

    span {
      display: none;
    }
  }

`
