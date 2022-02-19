import styled from 'styled-components'

export const Container = styled.div`
  padding: 15px 5px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }

  > button {
    height: 44px;
    margin-top: 180px;
  }
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 27px 0;

  label {
    margin-bottom: 10px;
    font-size: 14px;
  }

  .select {
    > div:first-child {
      padding-top: 4px;
      padding-bottom: 4px;
      font-size: 14px;
    }
  }
`
export const Option = styled.div`
  color: ${props => props.theme.colors.secundaryContrast};
  font-size: 14px;
  white-space: nowrap;
`
