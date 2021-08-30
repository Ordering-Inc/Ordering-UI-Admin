import styled, { css } from 'styled-components'

export const DetailContainerWrapper = styled.div`
  display: flex;
  width: 0;
  position: fixed;
  box-shadow: -4px 0px 7px #ccc;

  ${({ isDriverOrders }) => isDriverOrders && css`
    position: absolute;
    box-shadow: none;

    ${props => props.theme?.rtl ? css`
      border-right: 1px solid #CCC;
    ` : css`
      border-left: 1px solid #CCC;
    `}
  `}
  background: #FFF;
  height: 100vh;
  top: 0px;
  z-index: 1001;
  overflow-x: hidden;
  transition: 0.3s;

  ${props => props.theme?.rtl ? css`
    left: 0px;
    ` : css`
    right: 0px;
  `}
  @media print {
    box-shadow: none;
  }
`

export const DetailContainer = styled.div`
  width: 100%;
  padding: 20px;
`

export const DetailHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0 15px 0;

  svg {
    font-size: 16px;
    color: ${props => props.theme?.colors.headingColor};
    cursor: pointer;
  }
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  h2 {
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.theme?.colors.headingColor};
    margin: 0;
    margin-right: 20px;

    ${props => props.theme?.rtl && css`
      margin-left: 20px;
      margin-right: 0;
    `}
  }
`

export const HeaderTabContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #CCC;
`

export const Tab = styled.div`
  padding: 10px 0px;
  font-size: 14px;
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  white-space: nowrap;
  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}

  ${({ active }) => active && css`
    border-bottom: 2px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: #909BA9;
  `}
`
