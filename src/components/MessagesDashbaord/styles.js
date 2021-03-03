import styled, { css } from 'styled-components'

export const MessagesManagerContainer = styled.div`
  display: flex;
  margin-top: 20px;
  height: calc(100vh - 224px);;
  background: #FAFAFA;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  padding: 15px;

  @media (max-width: 1200px) {
    height: calc(100vh - 274px);;
  }

  @media (max-width: 576px) {
    height: calc(100vh - 65px);
  }
`
export const OrdersOpenButton = styled.button`
  display: block;
  position: absolute;
  top: 20px;
  border: none;
  outline: none;
  background: transparent;
  z-index: 100;
  cursor: pointer;

  svg {
    font-size: 30px;
    color: ${props => props.theme.colors.btnDarkBlue};
  }

  @media (min-width: 992px) {
    display: none;
  }
`
export const OrdersCloseButton = styled.button`
  display: block;
  position: absolute;
  top: 20px;
  border: none;
  outline: none;
  background: transparent;
  z-index: 100;
  cursor: pointer;

  svg {
    font-size: 30px;
    color: ${props => props.theme.colors.btnDarkBlue};
  }

  @media (min-width: 992px) {
    display: none;
  }
  @media (max-width: 576px) {
    position: absolute;
    top: 20px
  }
`
export const WrapperOrdersAndUser = styled.div`
  width: 350px;
  background: #fff;
  left: 10px;
  top: 15px;
  height: 100%;
  overflow: hidden;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 12px;

  @media (max-width: 992px) {
    position: absolute;
    z-index: 10;
    height: calc(100% - 30px);
  }
`
export const WrapperTab = styled.div`
  position: relative;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #F2F2F2;
`
export const Tab = styled.div`
  width: 50%;
  text-align: center;
  color: #C3C3C3;
  cursor: pointer;
  font-weight: 500;

  ${({ active }) => active && css`
    color: #1C202E;
  `}
`
export const WrapperSortContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  > div {
    border-radius: 3px;
    &:first-child {
      border: 1px solid #F2F2F2;
      padding: 0 10px;
    }
    &:last-child {
      border: none;
    }
  }
`
export const OrderAndUserListContainer = styled.div`
  overflow: auto;
  height: calc(100% - 90px);
`
export const WrapperMessage = styled.div`
  flex: 1;
`
export const MessageOrderDetailContainer = styled.div`
  width: 420px;
  border-left: 1px solid #D8D8D8;
  overflow: auto;

  @media(max-width: 1300px) {
    display: block;
    position: absolute;
    right: 0px;
    background: #fff;
    height: calc(100% - 30px);
    border: 1px solid #D8D8D8;
    box-shadow: -3px 3px 6px #00000029;
    z-index: 100;
  }
`
