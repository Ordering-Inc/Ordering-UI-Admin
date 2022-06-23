import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const MappingListContainer = styled.div`
  margin-top: 15px;
`
export const MappingWrapper = styled.div`
  border: 1px solid ${props => props.theme.colors.borderColor};
  border-radius: 8px;
  > div:first-child {
    border-top: none;
  }
  > div:last-child {
    border-bottom: none;
  }
`
export const MappingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.secundary};
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary} !important;
    border-top: 1px solid ${props => props.theme.colors.primary};
    border-bottom: 1px solid ${props => props.theme.colors.primary};
  `}

  > span {
    font-size: 14px;
  }
`
export const AddNewMappingButton = styled.div`
  width: fit-content;
  cursor: pointer;
  margin: 20px 0;
  font-size: 14px;
  color: ${props => props.theme.colors.lightGray};
  &:hover {
    color: ${props => darken(0.05, props.theme.colors.primary)};
  }
`
