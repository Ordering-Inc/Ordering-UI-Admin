import styled, { css } from 'styled-components'

export const BusinessGprsPrintersContainer = styled.div`
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

export const SwitchboxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;

  > span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      margin-left: 50px;
    ` : css`
      margin-right: 50px;
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
export const SectionTitle = styled.div`
  text-transform: capitalize;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`
