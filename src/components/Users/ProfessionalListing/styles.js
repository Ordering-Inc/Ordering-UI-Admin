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

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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

  @media (min-width: 992px) {
    margin-top: 0;
  }
`
