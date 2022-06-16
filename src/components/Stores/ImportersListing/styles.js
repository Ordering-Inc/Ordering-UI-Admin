import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const ImportersListingContainer = styled.div`
  width: 100%;
  padding: 30px 20px;
  overflow-x: hidden;
`
export const Header = styled.div`
  display: flex;
  width: 94%;
  justify-content: space-between;
  margin-right: auto;
  margin-bottom: 25px;
  ${props => props.theme?.rtl && css`
    margin-right: unset;
    margin-left: auto;
 `}
`
export const Title = styled.div`
  font-size: 20px;
  margin: 0px 10px 0px 0px;
  font-weight: 700;
`

export const ActionButtons = styled.div`
  display: flex;

  button {
    height: 41px;
    width: 90px;
    white-space: nowrap;
    ${props => props.theme?.rtl ? css`
      margin-left: 15px;
    ` : css`
      margin-right: 15px;
    `}
    
    svg {
      ${props => props.theme?.rtl ? css`
        margin-right: 8px;
      ` : css`
        margin-left: 8px;
      `}      
    }

    @media (min-width: 768px) {
      width: unset;
    }
  }
`

export const ImportersList = styled.div`

`

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;
  #not-found-source {
    height: auto;
    h1 {
      font-size: 18px;
      margin-top: 25px;
    }
  }
`
export const ButtonAddNewImporter = styled.div`
  display: inline-flex;
  width: fit-content;
  cursor: pointer;
  color: rgb(144, 155, 169);
  font-size: 14px;
  margin-top: 20px;
  &:hover {
    color: ${props => darken(0.05, props.theme.colors.primary)};
  }
`
