import styled, { css } from 'styled-components'

export const WalletsListContainer = styled.div`
  > h2 {
    font-size: 20px;
    font-weight: 700;
    margin: 30px 0 10px 0;
  }
`
export const WalletOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  cursor: pointer;
  padding: 16px 0;

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  ${({ disabled }) => disabled && css`
    cursor: initial;
    svg {
      cursor: pointer;
    }
  `}

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  `}

  > svg {
    font-size: 13px;
    color: ${props => props.theme.colors.secundaryLight};
  }
`
export const WalletName = styled.span`
  color: ${props => props.theme.colors.headingColor};
  font-size: 14px;
  flex: 1;
  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
`
export const Option = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 13px;
  line-height: 2;
  font-weight: 500;
`
export const DetailsContainer = styled.div`
  width: 100%;
  padding: 25px 20px;
  overflow: auto;

  > h2 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 20px;

    ${props => props.theme?.rtl ? css`
      margin-left: 40px;
    ` : css`
      margin-right: 40px;
    `}
  }

  .select {
    width: 100%;
    > div:first-child {
      padding: 8px 15px;
    }
  }
`
