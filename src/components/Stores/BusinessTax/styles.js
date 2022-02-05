import styled from 'styled-components'

export const BusinessTaxContainer = styled.div`
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
`

export const Label = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 14px;
  color: ${props => props.theme?.colors.headingColor};
`

export const SelectWrapper = styled.div`
  position: relative;

  .select {
    font-size: 14px;
    background: ${props => props.theme.colors?.secundary};
    height: 44px;
    border: 1px solid ${props => props.theme.colors?.secundary};
  }

  .list {
    width: 100%;
  }
`
