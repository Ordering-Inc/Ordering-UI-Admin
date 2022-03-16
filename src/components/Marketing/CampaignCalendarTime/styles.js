import styled, { css } from 'styled-components'

export const DateTimeWrapper = styled.div`
  position: relative;

  .react-datepicker-wrapper {
    position: absolute;
    left: 0px;
    visibility: hidden;
    input {
      height: 44px;
    }
  }

  > button {
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
    height: 44px;
    z-index: 2;
    background: ${props => props.theme.colors.secundary};
    border: none;
    border-radius: 7.6px;
    color: ${props => props.theme.colors.headingColor};

    svg {
      font-size: 16px;
      margin-right: 12px;
      color: ${props => props.theme.colors.lightGray};

      ${props => props.theme.rtl && css`
        margin-left: 12px;
        margin-right: 0;
      `}
    }
  }
`
