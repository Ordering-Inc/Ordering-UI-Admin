import styled, { css } from 'styled-components'

export const OrderStatusTypeSelectWrapper = styled.div`
  .list-wrapper {
    min-width: 297px;
  }

  .orderStatus {
    width: 100%;
  }

  .search-bar-container {
    padding: 10px 11px;
    width: 100%;
    input {
      border-radius: 7.6px;
      width: 100%;
    }
  }
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  column-gap: 5px;  

  ${({ noPadding }) => noPadding && css`
    padding: 0px;
  `}

  img {
    width: 15px;
  }

  p {
    margin: 0px;
    white-space: nowrap;
  }
`

export const PlaceholderTitle = styled(Option)`
  padding: 10px;
`
