import styled, { css } from 'styled-components'

export const PopMenuContatiner = styled.div`
  position: absolute;
  left:0px;
  background-color: #fff;
  width: 240px;
  border: 1px solid #E9ECEF;
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);
  border-radius: 7.6px;
  padding: 8px;
  z-index: 999;
`
export const SelectHeaderContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const BusinessSearch = styled.div`
  display: flex;
  margin-bottom: 5px;
  padding: 5px;

  > div {
   width: 100%;

   > input {
    background: ${props => props.theme.colors.secundary};
   }
  }
`
export const OptionItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 7.6px;
  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }
  img {
    min-height: 38px;
    min-width: 38px;
    height: 38px;
    width: 38px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
export const BusinessList = styled.div`
`
export const WrapperPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  >div>div{
    margin: 0;
    button {
      width: 20px;
      height: 20px;
      font-size: 12px;
    }
  }
`
