import styled from 'styled-components'

export const DeadlineSettingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0 10px 0;
`

export const TopContainer = styled.div`
  width: 80%;
  padding: 0 27px 0 21px;
  box-sizing: border-box;
`

export const BorderContainer = styled.div`
  border-left: 13px solid #F2F2F2;
  border-right: 13px solid #F2F2F2;
  border-top: 13px solid #F2F2F2;

  display: flex;
  justify-content: center;
  font-size: 20px;
  padding-top: 5px;
  padding-bottom: 15px;
  color: #FFBF12;
`

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`

export const DeadlineInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ color }) => color};
`

export const Input = styled.input.attrs({
  type: 'number'
})`
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  outline: none;
  width: 55px;
  height: 50px;
  font-size: 24px;
  text-align: center;
  box-sizing: border-box;
  box-shadow: 0px 0px 1px #00000029;
  border: 1px solid;
  border-color: ${({ borderColor }) => borderColor};
  border-radius: 9px;
  color: #ADADAD;
`
