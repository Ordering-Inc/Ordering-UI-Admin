import styled, { css } from 'styled-components'

export const Container = styled.div`
  min-height: 500px;
  > h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 26px;
  }

  > button {
    height: 44px;
    position: sticky;
    top: 100%;
    margin-top: 30px;
  }
`
export const BusinessSelectorContainer = styled.div`
  position: relative;
  margin-bottom: 29px;
  
  > div:not(:first-child) {
    width: 100%;
    margin-top: 5px;
  }
`
export const Label = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin: 16px 0px;
`
export const NoSelectedBusiness = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`
export const Option = styled.div`
  display: flex;
  align-items: center;
  
  img {
    min-height: 38px;
    min-width: 38px;
    height: 38px;
    width: 38px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border: 1px solid ${props => props.theme.colors.borderColor};
    margin-right: 8px;
    ${props => props.theme?.rtl && css`
      margin-right: 0px;
      margin-left: 8px;
    `}
  }
  span {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    max-width: 170px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color: ${props => props.theme.colors.textGray};
    b {
      font-size: 14px;
      line-height: 20px;
      font-weight: 400;
      color: ${props => props.theme.colors.textBlack};
    }
  }
`
export const BusinessSelectWrapper = styled.div`
  .select {
    width: 100%;
    > div:first-child {
      margin-top: 4px;
      margin-bottom: 4px;
    }
  }
`
