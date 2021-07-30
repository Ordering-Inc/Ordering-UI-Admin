import styled, { css } from 'styled-components'

export const Container = styled.div`
`

export const BusinessVideoPathWrapper = styled.div`
  border-bottom: 1px solid #E9ECEF;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.headingColor};
  
  span {
    max-width: calc(100% - 40px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
  }
  svg {
    font-size: 20px;
    cursor: pointer;
  }
`

export const BusinessAddVideoWrapper = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: calc(100% - 60px);
  }
`

export const AddButton = styled.a`
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  ${({ disabled }) => disabled && css`
    pointer-events: none;
    opacity: 0.6;
  `}
  svg {
    font-size: 20px;
  }
`
