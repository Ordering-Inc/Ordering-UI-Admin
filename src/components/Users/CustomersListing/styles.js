import styled, { css } from 'styled-components'

export const UsersListingContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;

  @media print {
    display: none;
  }
`
export const ActionsContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
export const VerifiedStatusFilterContainer = styled.div`
  display: flex;
  align-items: center;
  button {
    white-space: nowrap;
    font-size: 12px;
    height: 32px;
    display: flex;
    align-items: center;
    ${props => props.theme?.rtl ? css`
      margin-left: 12px;
    ` : css`
      margin-right: 12px;
    `}
    svg {
      font-size: 20px;

      ${props => props.theme?.rtl ? css`
        margin-right: 10px;
      ` : css`
        margin-left: 10px;
      `}
    }
  }
`
export const ActionButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  button {
    height: 44px;
  }
  > * {
    &:not(:last-child) {
      ${props => props.theme?.rtl ? css`
        margin-left: 15px;
      ` : css`
        margin-right: 15px;
      `}
    }
  }

  @media (min-width: 768px) {
    margin-top: 0;
  }
`
