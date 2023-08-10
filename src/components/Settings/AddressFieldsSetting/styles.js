import styled, { css } from 'styled-components'

export const SitesListContainer = styled.div`
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
`

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  h1 {
    font-weight: 700;
    font-size: 20px;
    margin: 0;
  }
  margin-right: 35px;
  ${props => props.theme.rtl && css`
    margin-left: 35px;
    margin-right: 0;
  `}
`

export const SitesWrapper = styled.div`
  margin-top: 35px;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;
  overflow: hidden;
  > div:first-child {
    border-top: none !important;
  }
  > div:last-child {
    border-bottom: none !important;
  } 
`
export const SiteItem = styled.div`
  cursor: pointer;
  padding: 12px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.lightGray};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }
  span {
    font-size: 14px;
  }
  svg {
    font-size: 20px;
  }
  ${({ active }) => active && css`
    color: ${props => props.theme.colors.headingColor};
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary} !important;
    background-color: ${props => props.theme.colors.lightPrimary};
  `}
`

export const AddressFieldsDetailsContainer = styled.div`
  padding: 26px 40px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;

  h1 {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 10px;
  }
`

export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  ${({ isHeader }) => isHeader && css`
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    margin-bottom: 15px;
    > div {
      font-weight: 700;
      font-size: 14px;
    }
  `}

  .name {
    flex: 1;
    font-size: 14px;
  }

  .required {
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .status {
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
