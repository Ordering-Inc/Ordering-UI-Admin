import styled, { css } from 'styled-components'

export const DriversContainer = styled.div`
  flex: 1;
  transition: all 0.5s;
  padding: 20px;
  box-sizing: border-box;
  max-height: 100vh;
  overflow-x: hidden;

  @media print {
    display: none;
  }
`

export const DriversHeader = styled.div`
  display: flex;
  flex-direction: column;

  > div:last-child {
    margin-top: 20px;
  }

  input {
    background: ${props => props.theme.colors.secundary};
    border: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > div:last-child {
      margin-top: 0px;
    }
  }
`

export const HeaderTitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  h1 {
    color: ${(props) => props.theme.colors.headingColor};
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    margin: 0px;
    text-transform: capitalize;
  }

  > button {
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
      margin-right: -8px;
    ` : css`
      margin-right: 8px;
      margin-left: -8px;
    `}

    svg {
      width: 25px;
      height: 25px;
    }
  }
`

export const DriversContent = styled.div`
`
export const SearchWrapper = styled.div`
    position: relative;
`

export const WarningMessage = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  z-index: 12;
  top: -130%;
  width: 100%;
  background: ${props => props.theme.colors.warning100};
  border: 1px solid ${props => props.theme.colors.warning};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 6px 15px;
  box-sizing: border-box;
  margin: 10px 0px 0px 0px !important;

  right: 0px;
  ${props => props.theme?.rtl && css`
    left: 0px;
    right: initial;
  `}

  svg {
    font-size: 20px;
    color: ${props => props.theme.colors.warning};
  }

  span {
    font-size: 12px;
    line-height: 18px;
    color: ${props => props.theme.colors.headingColor};
    margin: 0 10px;
    flex: 1;
  }

  a {
    font-size: 12px;
    white-space: nowrap;
  }

  @media (min-width: 768px) {
    padding: 8px 20px;
    font-size: 14px;
    line-height: 24px;
    right: 105%;
    top: -10px;
    width: fit-content;

    span {
      white-space: nowrap;
    }
  }
`
