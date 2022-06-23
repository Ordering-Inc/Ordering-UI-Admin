import styled, { css } from 'styled-components'

export const Container = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
  ${({ isTitle }) => isTitle && css`
    margin-bottom: 9px;
  `}
  min-width: 450px;
`

export const OriginalImageWrapper = styled.div`
  width: 43px;
  margin-right: 15px;

  ${props => props.theme.rtl && css`
    margin-left: 15px;
    margin-right: 0px;
  `}

  span {
    font-size: 14px;
    line-height: 24px;
  }
`

export const ImageWrapper = styled(OriginalImageWrapper)`
  padding-left: 2px;
  ${props => props.theme.rtl && css`
    padding-left: 0px;
    padding-right: 2px;
  `}

  img,
  div {
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content:center;
    box-shadow: 0px 1px 4px rgb(0 0 0 / 10%);
    height: 43px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.secundaryDarkContrast};
    position: relative;
    cursor: -webkit-grab;
    cursor: grab;
    filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
    svg {
      color: #ADB5BD;
      font-size: 16px;
    }
  };

  img{
    object-fit: cover;
  }
`

export const LevelNameWrapper = styled.div`
  flex: 1;
  > input {
    width: 100%;
  }
  span {
    font-size: 14px;
    line-height: 24px;
  }
`

export const LastWrapper = styled.div`
  width: 135px;
  margin: 0px 12px;

  > input {
    width: 100%;
  }
  span {
    font-size: 14px;
    line-height: 24px;
    white-space: nowrap;
  }

  @media (min-width: 576px) {
    margin: 0px 15px;
  }
`

export const PointsWrapper = styled.div`
  width: 110px;
  > input {
    width: 100%;
  }
  span {
    font-size: 14px;
    line-height: 24px;
  }
`

export const ButtonWrapper = styled.div`
  width: 30px;
  margin-left: 10px;
  ${props => props.theme.rtl && css`
    margin-right: 10px;
    margin-left: 0px;
  `}

  @media (min-width: 576px) {
    margin-left: 15px;
    ${props => props.theme.rtl && css`
      margin-right: 15px;
      margin-left: 0px;
    `}
  }
`
