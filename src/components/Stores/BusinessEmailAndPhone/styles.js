import styled from 'styled-components'

export const BusinessEmailAndPhoneContainer = styled.div`
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
`

export const Label = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 14px;
  color: ${props => props.theme?.colors.headingColor};
`
export const SectionTitle = styled.div`
  text-transform: capitalize;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`
export const OrdersAppPushContainer = styled.div`
  margin-top: 44px;
  margin-bottom: 60px;
  p {
    margin-top: 0;
    margin-bottom: 15px;
    font-size: 13px;
    color: ${props => props.theme?.colors.lightGray};
  }
`
