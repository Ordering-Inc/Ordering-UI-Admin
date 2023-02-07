import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  overflow: auto;
  transition: 0.3s;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (min-width: 1000px) {
    width: 0;
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid ${props => props.theme.colors.borderColor};
    ` : css`
      border-left: 1px solid ${props => props.theme.colors.borderColor};
    `}
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 32px;
    height: 32px;
    object-fit: cover;
    margin-right: 18px;
    ${props => props.theme.rtl && css`
      margin-left: 18px;
      margin-right: 0;
    `}
  }

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    margin: 0;
  }
`

export const Tabs = styled.div`
  display: flex;
  margin-bottom: 24px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const Tab = styled.div`
  padding-bottom: 13px;
  margin-right: 30px;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${props => props.theme.colors.lightGray};
  cursor: pointer;
  ${props => props.theme.rtl && css`
    margin-left: 30px;
    margin-right: 0;
  `}

  ${({ active }) => active && css`
    font-weight: 600;
    color: ${props => props.theme.colors.headingColor};
    border-bottom: 1px solid ${props => props.theme.colors.headingColor};
  `}
`

export const FacebookProfileContainer = styled.div`
  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${props => props.theme.colors.lightGray};
    margin-bottom: 23px;
    margin-top: 0;
  }
`

export const Step = styled.div`
  margin-bottom: 27px;
  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 12px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.lightGray};
  }
  img {
    width: 100%;
  }

  @media (min-width: 576px) {
    img {
      display: block;
      width: 90%;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 24px;
    }
  }
`

export const CopyInputWrapper = styled.div`
  display: flex;
  align-items: center;
  input {
    flex: 1;
    height: 44px;
  }
  button {
    margin-left: 15px;
    ${props => props.theme.rtl && css`
      margin-left: 0;
      margin-right: 15px;
    `}
  }
`

export const FacebookPostContainer = styled(FacebookProfileContainer)``
