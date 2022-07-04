import styled from 'styled-components'

export const BusinessOwnerSelectorWrapper = styled.div`
  & > .select {
    width: 100%;
    & > .list {
      width: 100%;
      & > .list-wrapper > div > div {
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
`
export const Option = styled.div`
  color: ${props => props.theme.colors.secundaryContrast};
  white-space: nowrap;
  font-size: 14px;
`
