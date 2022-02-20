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

  &:hover {
    .action-btn {
      display: block;
    }
  }

  ${({ isAccept }) => isAccept && css`
    background-color: #F8F9FA;
    tr {
      border-top: 1px solid ${props => props.theme.colors.headingColor};
    }
  `}
`

export const BusinessGeneralInfo = styled.div`
  flex: 1;
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
  div.product_name {
    flex: 1;
    font-weight: 500;
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
    margin: 0 10px;
    white-space: nowrap;
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
  div {
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
    transition: all 0.3s;
    &.product_description {
      word-break: break-word;
      font-size: 10px;
      color: ${props => props.theme.colors.lightGray};
      resize: none;
      width: 100%;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    &.product_price {
      white-space: nowrap;
    }
    &.product_tax,
    &.product_fee {
      white-space: nowrap;
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
`

export const DragImageWrapper = styled.div`
  img {
    ${props => props.theme?.rtl ? css`
      margin-left: 14px;
    ` : css`
      margin-right: 14px;
    `}
    &:hover {
      cursor: grab;
    }
  }
`
