import styled, { css } from 'styled-components'

export const ModalContainer = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  p {
    text-align: center;
    font-size: 20px;
    margin: 0px;

    span {
      color: ${props => props.theme.colors.primary};
      font-weight: 600;
    }
  }
  animation: fadeIn 200ms;

  @keyframes fadeIn {
    from {
      transform: scale(2);
    }
  
    to {
      transform: scale(1);
    }
  }
`
export const ToastWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 39px;
  }

  > div {
    display: flex;
    flex-direction: column;
    color: #344050;
    ${props => props.theme?.rtl ? css`
      margin-right: 15px;
    ` : css`
      margin-left: 15px;
    `}
    span {
      &:first-child {
        font-size: 14px;
        line-height: 21px;
        font-weight: 500;
        margin-bottom: 2px;
      }
      &:last-child {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
`
