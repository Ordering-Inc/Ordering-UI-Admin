import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const ImportersListingContainer = styled.div`

`
export const Header = styled.div`
  display: flex;
  width: 94%;
  justify-content: space-between;
  margin-right: auto;
  margin-bottom: 60px;
  ${props => props.theme?.rtl && css`
    margin-right: unset;
    margin-left: auto;
 `}
`
export const Title = styled.div`
  color: rgb(52, 64, 80);
  font-size: 24px;
  margin: 0px 10px 0px 0px;
  font-weight: 600;
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

export const NewImporterWrapper = styled.div`
  position: fixed;
  width: 100vw;
  top: 0;
  height: 100%;
  overflow-y: scroll;
  padding: 35px 20px 20px;
  box-sizing: border-box;
  right: 0;
  border-left: 1px solid ${props => props.theme.colors.borderColor};
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  ${props => props.theme?.rtl && css`
    right: unset;
    left: 0;
    border-left: none;
    border-right: 1px solid ${props => props.theme.colors.borderColor};
 `}
  @media (min-width: 768px) {
    width: 500px;
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
export const ImportCSVForm = styled.div`
    position: fixed;
    width: 500px;
    height: 100%;
    right: 0;
    top: 0;
    background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
`
