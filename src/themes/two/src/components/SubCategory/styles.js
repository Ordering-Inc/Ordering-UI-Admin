import styled from "styled-components"

export const SubCategoryContainer = styled.div``

export const GeneralContainer = styled.div`
  margin-top: 15px;
`

export const GeneralTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  p {
    margin: 0;
    font-weight: 600;
    font-size: 16px;
    color: #344050;
  }
`

export const GeneralDescription = styled.p`
  font-size: 12px;
  color: #344050;
`

export const ImageContainer = styled.div`
  width: 315px;
  height: 187px;
  background: #E9ECEF;
  border-radius: 7.6px
`

export const FormContainer = styled.form`
  margin-top: 20px;

  button {
    background: #0d6efd !important;
    color: white !important;
  }
`

export const FormGroupText = styled.div`
  margin-bottom: 20px;

  label {
    margin-bottom: 10px;
    font-size: 14px;
    color: #344050;
  }

  input[type='text'] {
    font-size: 14px;
    height: 44px;
    border: 1px solid #DEE2E6;
    box-sizing: border-box;
    border-radius: 7.6px;
  }
`

export const FormGroupCheck = styled.div`
  margin-bottom: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid #E9ECEF;

  input {
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border-radius: 2px;
    margin-right: 10px;
  }
  label {
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #344050;
  }
`

export const FormGroupWrapper = styled.div`
  padding-top: 20px;
`

export const DropDownContainer = styled.div``

export const DropDownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 14px;
    color: #344050;
    margin: 0;
  }
`

export const Required = styled.span`
  font-weight: 600;
  font-size: 10px;
  color: #E63757;
`

export const DropDownContent = styled.div`
  padding: 10px 16px;
  p {
    font-size: 14px;
    color: #748194;
  }
  .select {
    border: none;
    width: 100%;
  }
`

export const Option = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
    font-size: 13px;
    line-height: 2;
    font-weight: 500;
`

export const SkeletonWrapper = styled.div`
  margin-top: 25px;
`