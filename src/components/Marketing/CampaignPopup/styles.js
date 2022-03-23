import styled, { css } from 'styled-components'

export const Container = styled.div``

export const InputWrapper = styled.div`
  label {
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 24px;
  }
  input, textarea {
    width: 100%;
  }
  textarea {
    height: 80px;
  }
  margin-bottom: 35px;

  .select {
    border: 1px solid ${props => props.theme.colors.gray};
  }
`

export const EmailPreviewWrapper = styled.div`
  max-width: 317px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${props => props.theme.colors.borderColor};

  ${({ isSkeleton }) => isSkeleton && css`
    border: none;
    background: ${props => props.theme.colors.borderColor};
    height: 200px;
  `}
`

export const EmailPreviewHeader = styled.div`
  width: 100%;
  height: 17px;
  background: ${props => props.theme.colors.secundaryDarkContrast};
`

export const PointGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 4px;
  height: 100%;
  > div {
    width: 7px;
    height: 7px;
    min-width: 7px;
    border-radius: 50%;
    background-color: #CED4DA;
    margin: 0px 4px;
  }
`

export const EmailPreviewContent = styled.div`
  background: rgba(20, 20, 20, 0.17);
  padding: 13px 30px;

  > h2 {
    margin-top: 0px;
    margin-bottom: 10px;
    text-align: center;
    font-weight: 700;
    font-size: 14px;
  }
  p {
    margin: 0px;
    font-weight: 400;
    font-size: 12px;
  }
`

export const ButtonWrapper = styled.div`
  position: sticky;
  top: 100%;
  padding-bottom: 15px;

  button {
    margin-top: 20px;
    height: 44px;
    border-radius: 8px;
  }
`

export const PopupContent = styled.div`
  border-radius: 8px;
  padding: 12px;
  background-color: ${props => props.theme.colors.white};

  > p {
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
  }
`

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;

  > h1 {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    margin: 0px;
  }

  svg {
    min-width: 16px;
    font-size: 16px;
    margin-left: 10px;

    ${props => props.theme.rtl && css`
      margin-left: 0px;
      margin-right: 10px;
    `}
  }
`

export const PopupButtonWrapper = styled.div`
  margin-top: 50px;
  button {
    width: 100%;
  }
`
