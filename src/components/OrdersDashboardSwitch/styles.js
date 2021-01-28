import styled, { css } from 'styled-components'

export const SwitchContainer = styled.div`
  display: flex;
  border: 1px solid #D3D3D3;
  border-radius: 6px;
  padding: 5px;
  margin-left: 60px;
  position: relative;

  @media (max-width: 1400px) {
    margin-left: 20px;
  }

  @media (max-width: 600px) {
    margin-left: 0px;
  }
`

export const SwitchItem = styled.div`
  width: 110px;
  text-align: center;
  font-size: 13px;
  text-transform: capitalize;
  padding: 4px 0;
  cursor: pointer;
  transition: all 0.3s;
  box-sizing: border-box;

  ${({ horizontalBorder }) => horizontalBorder && css`
    border-left: 1px solid;
    border-right: 1px solid;
    border-color: #C3C3C3;
  `}

  ${({ active }) => active && css`
    color: #fff;
  `}

  @media (max-width: 560px) {
    width: 80px;
  }
`
export const SwitchPane = styled.div`
  position: absolute;
  background-color: #000;
  width: 110px;
  height: 28px;
  z-index: -1;
  border-radius: 2px;
  transition: all 0.3s ease;
  ${({ deliveryDashboard }) => deliveryDashboard && css`
    margin-left: 110px;
  `}
  ${({ messages }) => messages && css`
    margin-left: 220px;
  `}

  @media (max-width: 560px) {
    width: 80px;

    ${({ deliveryDashboard }) => deliveryDashboard && css`
      margin-left: 80px;
    `}
    ${({ messages }) => messages && css`
      margin-left: 160px;
    `}
  }
`
