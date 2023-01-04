import styled from 'styled-components'

export const Container = styled.div`
  > h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 8px;
  }
  > p {
    width: 100%;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    > p {
      width: 80%;
    }
  }
`

export const FileUploadBox = styled.div`
  height: 210px;
  margin-top: 35px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.borderColor};
  position: relative;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  img, div {
    width: 100%;
    overflow: hidden;
    height: 100%;
  }
  img {
    object-fit: contain;
  }
`

export const UploadIconBox = styled.div`
  position: absolute;
  top: 0px;
  > div {
    color: ${props => props.theme.colors.secundaryLight};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    svg {
      width: 43px;
      font-size: 40px;
    }
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      margin-bottom: 0;
      margin-top: 8px;
    }
  }
`

export const Or = styled.h6`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin: 27px 0;
`

export const FormControl = styled.div`
  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 13px;
  }
  input {
    width: 100%;
    border-radius: 8px;
    height: 44px;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  > button {
    width: 100%;
    margin-top: 15px;
    height: 44px;
    border-radius: 8px;
  }

  @media (min-width: 576px) {
    justify-content: space-between;
    flex-direction: row;
    > button {
      width: 48%;
    }
  }
`

export const PdfIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: 150px;
    color: ${props => props.theme.colors.danger};
  }
`
