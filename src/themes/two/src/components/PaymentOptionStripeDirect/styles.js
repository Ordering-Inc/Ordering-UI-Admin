import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  overflow: auto;
  transition: 0.3s;
  box-sizing: border-box;
  width: 0;
  display: flex;
  flex-direction: column;
  ${props => props.theme?.rtl ? css`
    border-right: 1px solid #E9ECEF;
  ` : css`
    border-left: 1px solid #E9ECEF;
  `}

  > button {
    position: sticky;
    top: 100%;
    width: fit-content;
    height: 42px;
    margin-bottom: 20px;
  }
`

export const SandboxWrapper = styled.div`
  cursor: pointer;
  margin-top: 30px;
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.headingColor};
  span {
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }

  svg {
    font-size: 20px;
    color: ${props => props.theme.colors.lightGray};

    &.fill {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const FieldName = styled.p`
  color: ${props => props.theme.colors.headingColor};
  margin: 30px 0 10px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 24px;
    color: ${props => props.theme.colors.headingColor};
    font-weight: 600;
  }
`

export const CloseButton = styled.div`
  display: flex;
  align-items: center;
  > svg {
    cursor: pointer;
    font-size: 24px;
    color: ${props => props.theme.colors.headingColor};
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`
