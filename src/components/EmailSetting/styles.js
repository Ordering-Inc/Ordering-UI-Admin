import styled, { css } from 'styled-components'

export const EmailSettingsContainer = styled.div``

export const AccordionTitle = styled.div`
  color: ${props => props.theme?.colors.headingColor};
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme?.colors.borderColor};
  padding: 10px 5px;
`

export const GeneralWrapper = styled.div`
  padding-top: 15px;
`

export const ToggleItemWrapper = styled.div`
  background: transparent;

  ${({ active }) => active && css`
    background: ${props => props.theme?.colors.borderColor};
  `}
`
