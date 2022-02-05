import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100% - 130px);
  > button {
    position: sticky;
    top: 100%;
  }
`
export const WrapperShortDescription = styled.div`
  label {
    color: ${props => props.theme.colors.headingColor};
    font-size: 14px;
    margin-bottom: 5px;
  }
  input,
  textarea {
    color: ${props => props.theme.colors.headingColor};
    width: 100%;
  }
`
export const WrapperDescription = styled(WrapperShortDescription)`
  margin-top: 35px;
`
