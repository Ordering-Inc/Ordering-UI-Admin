import styled, { css } from 'styled-components'

export const GroupOrdersContainer = styled.div`
  width: 100%;
  padding: 20px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 15px;
  }
`

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  > label {
    font-size: 14px;
    margin-bottom: 12px;
  }
`

export const UseMapsApiCheckboxContainer = styled.div`
  display: flex;

  > input {
    margin-top: 5px;
  }
`

export const MapsApiDescriptionContainer = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-right: 10px;
  ` : css`
    margin-left: 10px;
  `}
  p {
    margin: 0px;
    &:first-child {
      font-size: 14px;
    }
    &:not(:first-child) {
      font-size: 12px;
      color: ${props => props.theme.colors.lightGray};

      a {
        color: ${props => props.theme.colors.primary};
        margin: 0 7px;
        white-space: nowrap;
      }
    }
  }
`

export const MaxTimeInputsContainer = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 75px;
  }

  strong {
    margin: 0 20px;
  }
`

export const IconImage = styled.div`
  -webkit-mask: url(${({ url }) => url}) no-repeat center;
  mask: url(${({ url }) => url}) no-repeat center;
  width: 92px;
  height: 24px;
  background-color: ${props => props.theme.colors.secundaryLight};
`

export const MaxTimeBusinessInputContainer = styled.div`
  display: flex;
  align-items: center;

  > input {
    flex: 1;
    ${props => props.theme?.rtl ? css`
      margin-right: 25px;
    ` : css`
      margin-left: 25px;
    `}
  }
`

export const FieldRowContainer = styled.div`
  display: flex;
  align-items: center;

  > div:first-child {
    ${props => props.theme?.rtl ? css`
      margin-left: 25px;
    ` : css`
      margin-right: 25px;
    `}
  }
`
