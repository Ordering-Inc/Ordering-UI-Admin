import styled, { css } from 'styled-components'

export const OrderContentHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 1200px) {
    ${({ isDisableControl }) => !isDisableControl && css`
      flex-direction: column;
    `}
  }
`
export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: fit-content;

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

    &.tour_btn {
      ${props => props.theme?.rtl ? css`
        margin-left: -8px;
        margin-right: 8px;
      ` : css`
        margin-right: -8px;
        margin-left: 8px;
      `}
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`
export const HeaderTitle = styled.p`
  color: ${(props) => props.theme.colors.headingColor};
  font-size: 20px;
  font-weight: bold;
  margin: 0px;
  text-transform: capitalize;
  white-space: nowrap;

  @media (max-width: 560px) {
    width: calc(100% - 50px);
  }
`
export const TopRightSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: nowrap;
  margin: 5px 0px 10px 15px;

  ${({ isCustomLayout }) => !isCustomLayout && css`
    justify-content: flex-end;
  `}

  ${({ isCustomLayout }) => isCustomLayout && css`
    .websocket-container {
      padding-bottom: 10px;
    }
  `}

  @media (min-width: 799px) {
    flex-direction: ${({ isCustomLayout }) => (isCustomLayout) ? 'column-reverse' : 'row'};
    align-items: ${({ isCustomLayout }) => (isCustomLayout) ? 'flex-start' : 'center'};
  }
`

export const WrapperHeaderFilterGroup = styled.div`
  width: 100%;
  max-width: 850px
`
export const SLAControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 0px;
  }
`

export const WrapperSearchAndFilter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 10px;

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
    > div {
      width: 100%;

      input {
        width: 100%;
      }
    }
  `}

  input {
    background: ${props => props.theme.colors.secundary};
    border: none;
  }

  > button {
    ${props => props.theme?.rtl ? css`
      margin-right: 8px;
    ` : css`
      margin-left: 8px;
    `}
  }

  @media (min-width: 760px) {
    margin: 20px 0 10px 0;
  }

  @media (min-width: 992px) {
    ${({ fullWidth }) => !fullWidth && css`
      margin: 0px;
    `}
  }
`
