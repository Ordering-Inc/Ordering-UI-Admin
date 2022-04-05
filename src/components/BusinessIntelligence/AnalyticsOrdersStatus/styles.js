import styled, { css } from 'styled-components'

export const Container = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  padding: 20px;
`

export const OrderStatusHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

  p {
    margin: 0;
    font-size: 14px;
    color: ${props => props.theme?.colors.headingColor};
    text-transform: uppercase;
  }
`

export const ActionBlock = styled.div`
  svg {
    font-size: 16px;
    color: #212121;
    cursor: pointer;
  }

  ${({ disabled }) => disabled && css`
    svg {
      color: ${props => props.theme?.colors.disabled};
      cursor: not-allowed;
      pointer-events: none;
    }
  `}
`

export const BarChartWrapper = styled.div`
  min-height: 350px;
`

export const OrderStatusFooter = styled.div`
  margin-top: 25px;

  h2 {
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.theme.colors.headingColor};
    margin: 0;
  }

  p {
    font-size: 14px;
    color: #909BA9;
    margin: 0;
  }
`

export const EmptyContent = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
