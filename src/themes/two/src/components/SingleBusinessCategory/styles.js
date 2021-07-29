import styled, { css } from 'styled-components'

export const SingleCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 7.5px;
  margin-bottom: 15px;
  transition: all 0.3s;
  cursor: pointer;
  height: 75px;

  &:hover {
    background: #E9F2FE;

    input {
      background-color: #E9F2FE;
    }
  }

  ${({ active }) => active && css`
    border: 1px solid #2C7BE5;
    box-sizing: border-box;
    .actions-btn {
      display: block;
    }
  `}

  .img-section {
    min-width: 41px !important;
    min-height: 41px !important;
  }
`

export const CategoryContent = styled.div`
  flex-grow: 1;
  color: ${props => props.theme.colors.headingColor};
  ${props => props.theme?.rtl ? css`
      padding-right: 13px;
    ` : css`
      padding-left: 13px;
    `}
  input {
    width: 100%;
    outline: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    border-radius: 3px;
    transition: all 0.3s;
    border: 1px solid transparent;
    padding: 2px 5px;
    color: ${props => props.theme.colors.headingColor};
    &:focus {
      background-color: #FFF;
      border: 1px solid ${props => props.theme.colors.headingColor};
    }
  }
`

export const CategoryActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
  > div:first-child {
    padding: 0 5px;
  }
`

export const CategoryEnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
    font-size: 12px;
    margin: 0px;
    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

export const ActionSelectorWrapper = styled.div`
  height: 26px;
  ${props => props.theme?.rtl ? css`
    margin-right: 35px;
    ` : css`
    margin-left: 35px;
  `}
  button {
    background: transparent !important;
    border: none;
    padding: 0px;
    &:active,
    &:focus {
      border-color: unset !important;
      box-shadow: none !important;
    }
    svg {
      color: ${props => props.theme.colors.headingColor};
    }
    &:after {
      display: none;
    }
  }

  .show {
    button {
      background: #F8F9FA !important;
      border-color: unset !important;
      box-shadow: none !important;
    }
    > div {
      border: 1px solid #E9ECEF;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
    }
  }

  > div {
    border-radius: 8px;
    > div {
      a:last-child {
        color: #E63757;
      }
    }
  }
`
