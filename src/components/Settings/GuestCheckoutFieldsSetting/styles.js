import styled, { css } from 'styled-components'

export const CheckoutFieldsDetailsContainer = styled.div`
  padding: 26px 15px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 26px 40px;
  }
`

export const SelectWrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 20px;
  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 10px;
  }
  > div {
    width: 100%;
    border: none;

    > div:first-child {
      background-color: ${props => props.theme.colors.secundary};
      height: 43px;
      border: none;
      border-radius: 7.6px;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: ${props => props.theme.colors.secundaryContrast};
    }
    .list {
      background-color: ${props => props.theme.colors.secundary};
      border: none;

      .list-wrapper {
        > div {
          padding: 6px 10px;
          &:hover {
            background-color: #f2f5f7;
          }
        }
      }
    }
  }
`

export const Option = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.colors.secundaryContrast};
  text-transform: lowercase;
  &::first-letter {
    text-transform: uppercase;
  }
`

export const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  ${({ isHeader }) => isHeader && css`
    border-bottom: 1px solid ${props => props.theme.colors.borderColor};
    margin-bottom: 15px;
    > div {
      font-weight: 700;
      font-size: 14px;
    }
  `}

  .name {
    flex: 1;
    font-size: 14px;
  }

  .required {
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .status {
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .guest {
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  ${props => props.theme?.rtl ? css`
    margin-left: 40px;
  ` : css`
    margin-right: 40px;
  `}

  h1 {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 0;
  }
`

export const InfoWrapper = styled.div`
  position: relative;
  ${props => props.theme?.rtl ? css`
    margin-left: -8px;
    margin-right: 8px;
  ` : css`
    margin-right: -8px;
    margin-left: 8px;
  `}

  > button {
    height: 25px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
  &:hover > div {
    /* display: block; */
    visibility: visible;
    opacity: 1;
  }
`

export const InfoContent = styled.div`
  position: absolute;
  top: 100%;
  z-index: 999;
  background: ${props => props.theme.colors.backgroundInfo};
  border: 1px solid ${props => props.theme.colors.primary};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 8px 12px;
  font-size: 12px;
  line-height: 18px;
  min-width: 150px;
  transition: all 0.3s linear;
  visibility: hidden;
  opacity: 0;
  right: 0px;
  ${props => props.theme.rtl && css`
    left: 0px;
    right: initial;
  `}

  @media (min-width: 576px) {
    min-width: 330px;
    padding: 12px 15px;
  }
`
