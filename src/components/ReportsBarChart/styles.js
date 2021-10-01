import styled, { css } from 'styled-components'

export const ReportsBarChartContainer = styled.div``

export const ChartWrapper = styled.div`
  min-height: 300px;
`

export const EmptyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h2 {
    font-weight: 600;
    font-size: 12px;
    margin: 0;
    text-transform: uppercase;
  }

  svg {
    font-size: 16px;
    color: #212121;
    cursor: pointer;
  }

  ${({ active }) => !active && css`
    svg {
      cursor: not-allowed;
    }
  `}
`
