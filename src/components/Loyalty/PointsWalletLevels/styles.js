import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 13px;
  margin-top: 0px;
`

export const LevelWrapper = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 17px;
  ${({ isTitle }) => isTitle && css`
    margin-bottom: 9px;
  `}
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
  width: 60px;
  margin: 0px 12px;

  > input {
    width: 100%;
  }
  span {
    font-size: 14px;
    line-height: 24px;
  }

  @media (min-width: 576px) {
    width: 95px;
    margin: 0px 24px;
  }
`

export const PointsWrapper = styled.div`
  width: 60px;
  > input {
    width: 100%;
  }
  span {
    font-size: 14px;
    line-height: 24px;
  }

  @media (min-width: 576px) {
    width: 95px;
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
    margin-left: 17px;
    ${props => props.theme.rtl && css`
      margin-right: 17px;
      margin-left: 0px;
    `}
  }
`

export const AddSubOption = styled.span`
  user-select: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.colors.lightGray};
  margin-top: 6px;
`
