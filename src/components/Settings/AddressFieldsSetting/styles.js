import styled, { css } from 'styled-components'

export const AddressFieldsDetailsContainer = styled.div`
  padding: 26px 40px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;

  h1 {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 10px;
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
