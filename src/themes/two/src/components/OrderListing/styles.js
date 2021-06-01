import styled, { css } from 'styled-components'

export const WrapperNoneOrders = styled.div`
  overflow: auto;

  img {
    width: 250px;
  }

  ${({ small }) => small && css`
    img {
      width: 150px;
    }
  `}    
`
export const InnerNoneOrdersContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
`

export const WrapperOrderListContent = styled.div`
`
