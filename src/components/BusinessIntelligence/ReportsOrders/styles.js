import styled, { css } from 'styled-components'

export const ReportsOrdersContainer = styled.div`
  padding: 35px 15px;
  width: 100%;
  overflow: auto;

  @media (min-width: 700px) {
    padding: 35px;
  }
`

export const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme?.colors.headingColor};
  margin-top: 0;
  margin-bottom: 30px;
`

export const ButtonActionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

export const CalendarWrapper = styled.div`
  position: relative;

  > button {
    margin-top: 5px;
    padding: 7px 15px;
    color: ${props => props.theme?.colors.secundaryContrast};
    background: ${props => props.theme?.colors.secundary};
    border-radius: 7.6px;
    border: none;
    text-align: left;
    margin-left: 10px;

    ${props => props.theme?.rtl && css`
      margin-right: 10px;
      margin-left: 0;
    `}

    svg {
      font-size: 16px;
      margin-right: 12px;

      ${props => props.theme.rtl && css`
        margin-right: 0px;
        margin-left: 12px;
      `}
    }
  }
`

export const BrandBusinessWrapper = styled(CalendarWrapper)`
  display: flex;

  > button {
    margin-right: 10px;
    margin-left: 0;

  ${props => props.theme?.rtl && css`
    margin-left: 10px;
    margin-right: 0;
  `}
  }
`

export const ChartBlockWrapper = styled.div`
  width: 100%;
  margin-top: 25px;
  padding: 20px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
`

export const ChartTitleBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  > h2 {
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

export const ChartWrapper = styled.div`
  min-height: 350px;
`

export const EmptyContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`

export const ChartFooterContainer = styled.div`
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
