import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: calc(100% - 130px);
  > button {
    position: sticky;
    top: 100%;
    margin-top: 30px;
    height: 44px;
  }
`
export const TimesContainer = styled.div`
  height: calc(100% - 150px);
  overflow: auto;
  margin-top: 10px;
  padding: 0 2px;
`
export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  margin-top: 0;
`
export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .select {
    ${props => props.theme?.rtl ? css`
      margin-left: 2px;
    ` : css`
      margin-right: 2px;
    `}
    font-size: 14px;
    background: ${props => props.theme.colors.secundary};
    border: none;
    > div:first-child {
      padding-top: 5px;
      padding-bottom: 5px;
    }
    .list {
      > div {
        white-space: nowrap;
      }
    }
  }
`
export const TimeItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  font-size: 14px;
`
export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  ${props => props.theme?.rtl ? css`
    border-right: 1px solid ${props => props.theme.colors.borderColor};
  ` : css`
    border-left: 1px solid ${props => props.theme.colors.borderColor};
  `}
  input {
    margin: 0 15px;
    padding: 10px 0;
    width: 50px;
    text-align: center;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  }
`
