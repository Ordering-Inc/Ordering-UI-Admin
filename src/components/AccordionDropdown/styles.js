import styled, { css } from 'styled-components'

export const CategoryTab = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  border-radius: 7.5px;
  transition: all 0.3s;
  cursor: pointer;
  font-size: 14px;
  margin-left: ${props => props.categorySpace ?? 0}px;

  &:hover {
    background: ${props => props.theme.colors.lightPrimary};
  }

  ${({ active }) => active && css`
    background: ${props => props.theme.colors.lightPrimary};
    border: 1px solid ${props => props.theme.colors.primary};
    box-sizing: border-box;
    .actions-btn {
      display: block;
    }
  `}

  ${({ isAccept }) => isAccept && css`
    background: ${props => props.theme.colors.borderColor};
  `}

  .img-section {
    min-width: 41px !important;
    min-height: 41px !important;
  }
`

export const CategoryEnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding-right: 5px;
  span {
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
    font-size: 12px;
    margin: 0px;
    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

export const CategoryInfoWrapper = styled.div`
  flex: 1;
  span{
    margin-left: 5px;
  }
`

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`
