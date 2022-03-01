import styled, { css } from 'styled-components'

export const WrapperNoneOrders = styled.div`
  overflow: auto;

  `
export const InnerNoneOrdersContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  img {
    width: 250px;
  }

  ${({ small }) => small && css`
    img {
      width: 150px;
    }
  `}

  @media (min-width: 768px) {
    img {
      width: 305px;
    }
    ${({ small }) => small && css`
      img {
        width: 250px;
      }
    `}
  }
`

export const WrapperOrderListContent = styled.div`
  ${({ maxHeight }) => maxHeight && css`
    height: 100%;
  `}
`
