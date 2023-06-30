import styled, { css } from 'styled-components'

export const CheckoutFieldsDetailsContainer = styled.div`
  padding: 26px 15px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;

  h1 {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 10px;
    ${props => props.theme?.rtl ? css`
      margin-left: 40px;
    ` : css`
      margin-right: 40px;
    `}
  }

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
`
