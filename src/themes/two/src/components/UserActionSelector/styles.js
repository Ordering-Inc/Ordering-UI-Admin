import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  svg {
    display: none;
  }
  .select {
    border: none;

    > div:first-child {
      padding: 0px;
    }
  }
  .list {
    .options {
      border: 1px solid #E9ECEF;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
      border-radius: 8px;
    }
  }
`

export const Option = styled.div`
  ${({ isColor }) => isColor && css`
    color: #E63757;
  `}
`

export const PlaceHolder = styled.div`
  border-radius: 8px;
  padding: 5px 8px;
  &:hover {
    background: #F8F9FA;
  }
  svg {
    font-size: 24px;
    display: block;
  }
`
