import styled, { css } from 'styled-components'

export const BusinessGprsPrintersContainer = styled.div`
  padding: 10px;
`

export const FormControl = styled.div`
  margin-bottom: 20px;

  > textarea {
    box-sizing: border-box;
    width: 100%;
  }
`

export const Label = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 14px;
  color: ${props => props.theme?.colors.headingColor};
`

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-right: 15px;
    ` : css`
      margin-left: 15px;
    `}
  }
`

export const SelectWrapper = styled.div`
  position: relative;

  .select {
    font-size: 14px;
    background: ${props => props.theme.colors?.secundary};
    height: 44px;
    border: 1px solid ${props => props.theme.colors?.secundary};
  }

  .list {
    width: 100%;
  }
`
