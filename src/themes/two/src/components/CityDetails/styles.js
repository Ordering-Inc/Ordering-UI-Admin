import styled, { css } from 'styled-components'

export const CityDetailsContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  > button {
    position: sticky;
    top: 100%;
    margin-bottom: 20px;
    height: 42px;
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 0;
    ${props => props.theme?.rtl ? css`
      margin-left: 15px;
    ` : css`
      margin-right: 15px;
    `}
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;

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
