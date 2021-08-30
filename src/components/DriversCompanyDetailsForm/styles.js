import styled from 'styled-components'

export const DetailsContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`

export const Header = styled.div`
  margin-bottom: 35px;
  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
  }
`

export const FormContainer = styled.form`
  min-height: calc(100% - 70px);
  button[type='submit'] {
    position: sticky;
    top: 100%;
    height: 42px;
  }
`

export const GroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    width: calc(50% - 15px);
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  label {
    font-size: 14px;
  }

  div {
    font-size: 14px;
  }

  .select {
    padding-top: 4px;
    padding-bottom: 4px;
    border: none;
    background-color: ${props => props.theme.colors.secundary};
  }
`

export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
`
