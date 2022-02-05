import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: calc(100% - 160px);
  margin-bottom: 35px;
`

export const SearchBarWrapper = styled.div`
  margin-bottom: 10px;
`

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  button:first-child {
    ${props => props.theme?.rtl ? css`
      margin-left: 7px;
    ` : css`
      margin-right: 7px;
    `}
  }
`

export const GroupsContainer = styled.div`
  height: calc(100% - 130px);
  overflow: auto;
`

export const GroupWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  p {
    margin: 0px;
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      padding-right: 15px;
    ` : css`
      padding-left: 15px;
    `}
  }

  ${({ isDisabed }) => isDisabed && css`
    pointer-events: none;
  `}
`
