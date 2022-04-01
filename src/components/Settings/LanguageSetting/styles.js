import styled, { css } from 'styled-components'

export const LanguageDetailsContainer = styled.div`
  padding: 26px 40px;
  margin-bottom: 30px;
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

  .default {
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    svg {
      cursor: pointer;
      font-size: 20px;
    }
  }

  .checked {
    svg {
      color: ${props => props.theme.colors.primary};
    }
  }

  .status {
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
