import styled, { css } from 'styled-components'

export const NotificationSettingContainer = styled.div``

export const AccordionTitle = styled.div`
  color: ${props => props.theme?.colors.headingColor};
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme?.colors.borderColor};
  padding: 10px 5px;
`

export const GeneralWrapper = styled.div`
  padding-top: 20px;
`

export const ToggleItemWrapper = styled.div`
  background: transparent;

  ${({ active }) => active && css`
    background: ${props => props.theme?.colors.borderColor};
  `}
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  label {
    margin-bottom: 0 !important;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
  }
  button {
    height: 25px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`
