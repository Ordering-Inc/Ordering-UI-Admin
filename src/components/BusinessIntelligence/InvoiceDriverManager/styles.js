import styled, { css } from 'styled-components'

export const InvoiceDriversContainer = styled.div`
  position: relative;
  padding: 20px;
  width: 100%;
`

export const DetailsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;

  h2 {
    font-weight: bold;
    font-size: 20px;
    margin: 0;
    color: ${props => props.theme?.colors.headingColor};
  }

  ${props => props.theme?.rtl ? css`
    padding-left: 60px;
  ` : css`
    padding-right: 60px;
  `}
`
export const DetailsList = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme?.colors.borderColor};
`

export const Tab = styled.div`
  padding: 10px 0px;
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  white-space: nowrap;
  font-size: 14px;
  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}

  ${({ active }) => active && css`
    border-bottom: 1px solid;
    font-weight: 500;
  `}

  ${({ active }) => !active && css`
    color: #909BA9;
  `}
`

export const Form = styled.form`
  display: none;
`

export const InvoicePdfWrapper = styled.div`
  display: none;
`

export const LoadingWrapper = styled.div`
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100vh;
`
