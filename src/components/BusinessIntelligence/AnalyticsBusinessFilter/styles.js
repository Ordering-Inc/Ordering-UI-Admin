import styled, { css } from 'styled-components'

export const AnalyticsBusinessFilterContainer = styled.div``

export const BusinessFilterOption = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding: 10px 0;
  cursor: pointer;

  svg {
    font-size: 18px;
    color: ${props => props.theme.colors.secundaryLight};

    &.fill {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const BusinessName = styled.span`
  margin-left: 10px;
  ${props => props.theme?.rtl && css`
    margin-right: 10px;
    margin-left: 0;
  `}
  font-size: 15px;
  color: ${props => props.theme?.colors.headingColor};
`

export const FilterBtnWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  position: sticky;
  top: 100%;

  button {
    height: 42px;
  }
`

export const SearchWrapper = styled.div`
  margin-bottom: 25px;
`
