import styled, { css } from 'styled-components'

export const TagsListContainer = styled.div`
  padding: 5px 0;
`
export const SearchBarWrapper = styled.div`
  margin-bottom: 15px;
`
export const SelectButtonGroup = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  button {
    font-size: 12px;

    &:first-child {
      ${props => props.theme?.rtl ? css`
        margin-left: 16px;
      ` : css`
        margin-right: 16px;
      `}
    }
  }
`
export const TagsListWrapper = styled.div`
`
export const ProductTagWrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ isSkeleton }) => !isSkeleton && css`
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.colors.lightPrimary};
    }
  `}

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary};
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  `}

  > div {
    display: flex;
    align-items: center;
  }

  span.tag-name {
    font-size: 14px;
  }
`
export const TagImageWrapper = styled.div`
  margin: 0 14px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.gray};

  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  svg {
    font-size: 16px;
  }
`
export const AddNewLabel = styled.div`
  width: fit-content;
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.theme.colors.lightGray};
  margin: 15px 0;
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
