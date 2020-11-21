import styled, { css } from 'styled-components'

export const SwitchContainer = styled.div`
  display: flex;
  border: 1px solid #D3D3D3;
  border-radius: 6px;
  padding: 5px;
  margin-left: 60px;
  
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
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.3s;

  ${({ active }) => active && css`
    background-color: #000;
    color: #fff;
  `}

  @media (max-width: 560px) {
    width: 80px;
  }
`
