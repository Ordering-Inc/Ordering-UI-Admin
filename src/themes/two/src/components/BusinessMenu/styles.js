import styled, { css } from 'styled-components'

export const MenuContainer = styled.div`
`
export const Title = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.colors.headingColor};
`

export const MeunItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #E9ECEF;
`

export const MenuName = styled.span`
  flex: 1;
  color: ${props => props.theme.colors.headingColor};
`

export const EnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};

    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

export const ActionsWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-right: 35px;
  ` : css`
    margin-left: 35px;
  `}
  button {
    background: #F8F9FA !important;
    border: none;
    padding: 0px;
    svg {
      color: ${props => props.theme.colors.headingColor};
    }

    &:after {
      display: none;
    }
  }
`
