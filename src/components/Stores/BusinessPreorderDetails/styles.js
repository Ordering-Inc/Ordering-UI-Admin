import styled from 'styled-components'

export const BusinessPreorderContainer = styled.div`
  padding: 20px;
  height: 100%;
  margin-bottom: 20px;
  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 5px;
    margin-bottom: 48px;
  }

  > button {
    height: 44px;
    position: sticky;
    top: 100%;
    margin: 20px 0;
  }
`

export const PreorderTimeWrapper = styled.div`
  padding: 5px 0;

  p {
    font-size: 14px;
    &.name {
      margin: 0;
    }
    &.description {
      color: ${props => props.theme.colors.lightGray};
      margin: 5px 0 18px;
    }
  }
  button {
    margin-top: 20px;
    margin-bottom: 10px;
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
    color: ${props => props.theme?.colors.headingColor};
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    &::-ms-expand {
      display: none;
    }
  }
`

export const Margin = styled.div`
  height: 20px;
`
