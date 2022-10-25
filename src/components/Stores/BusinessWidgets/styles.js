import styled from 'styled-components'

export const Container = styled.div``

export const PopupContainer = styled.div`
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 20px;
  }
`

export const FormGroup = styled.div`
  margin-bottom: 30px;
  label {
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 11px;
  }
  input, textarea {
    width: 100%;
  }
`

export const SelectWrapper = styled.div`
  font-size: 14px;
  .select {
    border: none;
    background: ${props => props.theme.colors.secundary};
    padding: 11px 0;
  }
`

export const InlineContainer = styled.div`
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 20px;
  }
`

export const GuideLink = styled.div`
  button {
    border-radius: 8px;
    height: 44px;
  }
`

export const ConfigMessage = styled.div`
  font-size: 14px;
  span {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
    cursor: pointer;
    display: block;
  }
`
