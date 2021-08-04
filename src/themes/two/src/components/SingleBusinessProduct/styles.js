import styled, { css } from 'styled-components'

export const BusinessActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`

export const SingleListBusinessContainer = styled.tbody`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${props => props.theme.colors.lightPrimary};
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
    td {
      border-top: 1px solid ${props => props.theme.colors.primary};
      border-bottom: 1px solid ${props => props.theme.colors.primary};
    }
  `}
  .business {
    padding-right: 20px;
  }

  &:hover {
    input, textarea {
      background: ${props => props.theme.colors.lightPrimary};
    }
    .action-btn {
      display: block;
    }
  }
`

export const BusinessGeneralInfo = styled.div`
  display: flex;
  align-items: center;
  ${props => props.theme?.rtl ? css`
  border-left: 1px solid #E9ECEF;
` : css`
  border-right: 1px solid #E9ECEF;
`}
  p {
    margin: 0;
  }
  input {
    font-weight: 500;
    font-size: 13px;
    color: ${props => props.theme.colors.headingColor};
    border: 1px solid transparent;
    outline: none;
    transition: all 0.3s;
    border-radius: 3px;
    padding: 5px;
  }
  &:hover {
    input {
      border: 1px solid ${props => props.theme.colors.lightGray};
      background: white;
    }
  }
`
export const WrapperImage = styled.div`
  max-width: 38px;
  max-height: 38px;
  min-width: 38px;
  height: 38px;
  width: 38px;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
  border-radius: 10px;
  ${props => props.theme?.rtl ? css`
    margin-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
`

export const InfoBlock = styled.div`
  input, textarea {
    font-weight: 500;
    font-size: 13px;
    color: ${props => props.theme.colors.headingColor};
    border: 1px solid transparent;
    outline: none;
    transition: all 0.3s;
    border-radius: 3px;
    padding: 5px;
    &.product_description {
      font-size: 12px;
      color: ${props => props.theme.colors.lightGray};
      resize: none;
      width: 100%;
    }
  }
  &:hover {
    > input, textarea {
      border: 1px solid ${props => props.theme.colors.lightGray};
      background: white;
    }
  }
`

export const BusinessEnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  span {
    font-size: 14px;
    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

export const ActionSelectorWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100px;
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
      background: ${props => props.theme.colors.secundary} !important;
      border-color: unset !important;
      box-shadow: none !important;
    }
    >div {
      border: 1px solid ${props => props.theme.colors.borderColor};
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

export const ProductTypeImage = styled.div`
  min-height: 38px;
  min-width: 38px;
  height: 38px;
  width: 38px;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
  ${props => props.theme?.rtl ? css`
  maring-left: 10px;
  ` : css`
    margin-right: 10px;
  `}
  ${({ disabled }) => disabled && css`
    pointer-events: none;
  `}
  img,
  div {
    width: 100%;
    border-radius: 8px;
    height: 100%;
    overflow: hidden;
  };
  img{
    object-fit: cover;
  }
`

export const UploadWrapper = styled.div`
  border-radius: 5px;
  background: ${props => props.theme.colors.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: white;
  }
`

export const DragableContainer = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: grab;
  }
  &:active {
    cursor: grabbing;
  }
`

export const DragImageWrapper = styled.div`
  img {
    ${props => props.theme?.rtl ? css`
      margin-left: 14px;
    ` : css`
      margin-right: 14px;
    `}
  }
`
