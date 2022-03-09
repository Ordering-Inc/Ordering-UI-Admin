import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100% - 130px);
  > button {
    position: sticky;
    top: 100%;
    margin-top: 30px;
    height: 44px;
  }
`
export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 0;
`

export const TimeSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  label {
    font-size: 14px;
    margin-bottom: 11px;
  }
`
export const TimeBlock = styled.div`
  display: flex;
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;
  width: fit-content;
  padding: 8px 11px;
  color: ${props => props.theme.colors.secundaryLight};
  
  > select {
    margin: 0 5px;
    border: none;
    outline: none;
    color: ${props => props.theme.colors.secundaryLight};

    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    &::-ms-expand {
      display: none;
    }
  }
`
export const FormControl = styled.div`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 15px;
    font-size: 14px;
  }
`
