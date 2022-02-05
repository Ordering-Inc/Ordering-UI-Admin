import styled from 'styled-components'

export const BusinessEmailAndPhoneContainer = styled.div`
  padding: 10px;
`

export const FormControl = styled.div`
  margin-bottom: 20px;

  input[type=text] {
    border: 1px solid #DEE2E6;
    box-sizing: border-box;
    border-radius: 7.6px;
    height: 44px;
    width: 100%;
  }

  .info {
    font-size: 13px;
    color: ${props => props.theme?.colors.headingColor};
  }
`

export const Label = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 14px;
  color: ${props => props.theme?.colors.headingColor};
`
