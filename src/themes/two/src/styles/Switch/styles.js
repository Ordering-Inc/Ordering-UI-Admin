import styled from 'styled-components'

export const ToggleSwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 17px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + span {
      background-color: ${props => props.theme.colors.primary};
    }
    &:focus + span {
      box-shadow: 0 0 1px ${props => props.theme.colors.primary};
    }
    &:checked + span:before {
      -webkit-transform: translateX(15px);
      -ms-transform: translateX(15px);
      transform: translateX(15px);
    }
  }
`

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 15px;

  &:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`
