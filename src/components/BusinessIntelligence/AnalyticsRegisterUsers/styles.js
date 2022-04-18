import styled, { css } from 'styled-components'

export const Container = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  padding: 20px;
  height: 100%;
`

export const RegisterUserChartWrapper = styled.div``

export const RegisterUsersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    margin: 0;
    font-size: 14px;
    color: ${props => props.theme?.colors.headingColor};
    text-transform: uppercase;
  }
`

export const ActionBlock = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 16px;
    color: #212121;
    cursor: pointer;

    &.download-view {
      margin-left: 15px;
      ${props => props.theme?.rtl && css`
        margin-right: 15px;
        margin-left: 0;
      `}
    }
  }

  ${({ disabled }) => disabled && css`
    svg {
      color: ${props => props.theme?.colors.disabled};
      cursor: not-allowed;
      pointer-events: none;
    }
  `}
`

export const EmptyContent = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`
