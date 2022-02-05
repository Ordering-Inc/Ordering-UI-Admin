import styled, { css } from 'styled-components'

export const BusinessMenuBasicContainer = styled.div`
  max-height: calc(100vh - 200px);
  overflow: auto;
  padding: 0 5px;
  input:not([type='checkbox']),
  textarea {
    width: 100%;
  }
  > button {
    height: 40px;
    margin-top: 50px;
  }
`

export const FieldName = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.headingColor};
  padding: 30px 0 10px;
  margin: 0;
  ${({ isBorderBottom }) => isBorderBottom && css`
    border-bottom: 1px solid #E9ECEF;
  `}
`

export const OrderType = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 12px 0;

  ${(props) => !props.noBorder && css`
    border-bottom: 1px solid #E9ECEF;
  `}

  svg {
    font-size: 20px;
    color: ${({ theme, active }) => active ? theme.colors.primary : theme.colors.lightGray};
  }

  span {
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
    ${props => props.theme?.rtl ? css`
      margin-right: 10px;
    ` : css`
      margin-left: 10px;
    `}
  }
`

export const ScheduleCheckboxContainer = styled.div`
  display: flex;
  width: 20%;

  h4 {
    color: ${props => props.theme.colors.headingColor};
    font-size: 18px;
    font-weight: 600;
    ${props => props.theme?.rtl ? css`
      margin: 0 10px 0 0;
    ` : css`
      margin: 0 0 0 10px;
    `}
  }
`

export const ScheduleContainer = styled.div`
`

export const ScheduleSection = styled.div`
  border-top: 1px solid #E9ECEF;
  margin-top: 10px;
`
