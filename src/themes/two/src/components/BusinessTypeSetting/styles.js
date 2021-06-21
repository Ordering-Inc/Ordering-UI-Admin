import styled, { css } from 'styled-components'

export const Container = styled.div`
`

export const BusinessType = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #E9ECEF;
  padding: 15px 0;

  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 24px;
  }

  span {
    ${props => props.theme?.rtl ? css`
      marign-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`
