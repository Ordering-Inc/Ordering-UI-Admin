import styled, { css } from 'styled-components'

export const BusinessListingContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  overflow: hidden;

  @media print {
    display: none;
  }
`

export const ViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  margin-top: 10px;
`

export const WrapperView = styled.div`
  display: flex;
  > span:first-child {
    ${props => props.theme?.rtl ? css`
      margin-left: 10px;
    ` : css`
      margin-right: 10px;
    `}
  }
`

export const ViewMethodButton = styled.span`
  cursor: pointer;
  color: ${props => props.theme.colors.headingColor};

  svg {
    font-size: 20px;
    transition: all .2s ease-in;
  }

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.primary};
  `}

  &:hover {
    svg {
      font-size: 24px;
    }
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  > div {
    width: 100%;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    align-items: center;
    ${({ isSelect }) => isSelect && css`
      > div {
        width: calc(100% - 100px);
      }
    `}
  }

  > button {
    height: 42px;
    display: flex;
    align-items: center;
    svg {
      min-width: 14px;
      margin-left: 5px;
      ${props => props.theme.rtl && css`
        margin-left: 0px;
        margin-right: 5px;
      `}
    }
  }
`
