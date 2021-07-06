import styled, { css } from 'styled-components'

export const PropertiesContainer = styled.div`
  height: 100%;
  overflow-x: hidden;
  h1 {
    color: ${props => props.theme.colors.headingColor};
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 30px;
    margin: 0px;
    border-bottom: 1px solid #E9ECEF;
  }

  > input {
    width: 100%;
    margin: 20px 0;
  }
  @media (min-width: 1000px) {
    padding: 20px;
  }
`

export const PropertyOption = styled.div`
  border-bottom: 1px solid #E9ECEF;
  padding: 12px 0;
  display: flex;
  align-items: center;

  svg {
    font-size: 20px;
    color: ${props => props.theme.colors.lightGray};
  }

  ${({ active }) => active && css`
    svg {
      color: ${props => props.theme.colors.primary};
    }
  `}

  span {
    color: ${props => props.theme.colors.headingColor};
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`
