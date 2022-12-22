import styled, { css } from 'styled-components'

export const BusinessListingContainer = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  overflow: hidden;

  ${({ isAdd }) => isAdd && css`
    max-height: 100vh;
    overflow: auto;
  `}

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

export const EmptyBusinessWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 70px);

  > img {
    width: 90%;
    max-width: 500px;
  }
  h2 {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 30px;
    margin-top: 0px;
    text-align: center;
    max-width: 600px;
    color: ${props => props.theme.colors.lightGray};
  }
  button {
    height: 44px;
  }
  @media (min-width: 576px) {
    > img {
      width: 60%;
    }
  }
`
