import styled, { css } from 'styled-components'

export const BusinessListingContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  overflow: hidden;
  margin-top: 60px;

  @media print {
    display: none;
  }

  @media (min-width: 760px) {
    margin-top: 0px;
  }
`

export const ViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #CCC;
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
  }

  ${({ active }) => active && css`
    color: ${props => props.theme.colors.primary};
  `}
`
