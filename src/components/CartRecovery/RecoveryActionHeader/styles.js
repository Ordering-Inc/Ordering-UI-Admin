import styled, { css } from 'styled-components'

export const ActionHeadercontainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  width: 100%;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 993px) {
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
  }
`

export const InfoWrapper = styled.div`
  position: relative;
  ${props => props.theme?.rtl ? css`
    margin-left: -8px;
    margin-right: 8px;
  ` : css`
    margin-right: -8px;
    margin-left: 8px;
  `}

  > button {
    height: 25px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
  &:hover > div {
    /* display: block; */
    visibility: visible;
    opacity: 1;
  }
`

export const InfoContent = styled.div`
  position: absolute;
  top: 100%;
  z-index: 999;
  background: ${props => props.theme.colors.backgroundInfo};
  border: 1px solid ${props => props.theme.colors.primary};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 8px 12px;
  font-size: 12px;
  line-height: 18px;
  min-width: 150px;
  transition: all 0.3s linear;
  visibility: hidden;
  opacity: 0;
  /* display: none; */
  right: 0px;
  ${props => props.theme.rtl && css`
    left: 0px;
    right: initial;
  `}

  @media (min-width: 576px) {
    min-width: 350px;
    padding: 12px 15px;
    left: 0px;
    ${props => props.theme.rtl && css`
      right: 0px;
      left: initial;
    `}
  }

  @media (min-width: 993px) {
    min-width: 535px;
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
  justify-content: flex-end;
  flex-direction: column;
  
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`

export const WrapperSearch = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  input {
    background: ${props => props.theme.colors.secundary};
    border: none !important;
  }

  > button {
    height: 41px;
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
    ` : css`
      margin-right: 8px;
    `}
  }

  @media (min-width: 760px) {
    margin: 20px 0 10px 0;
  }

  @media (min-width: 992px) {
    margin: 0px;
  }
`
