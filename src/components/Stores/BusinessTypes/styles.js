import styled, { css } from 'styled-components'

export const Container = styled.div`
`

export const AddNewBusinessTypeContainer = styled.div``

export const AddNewBusinessTypeTitle = styled.div`
  cursor: pointer;
  color: ${props => props.theme.colors.lightGray};
  font-size: 14px;
  padding: 15px;
`

export const BusinessTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #E9ECEF;
  transition: all 0.3s;

  &:hover {
    background: ${props => props.theme.colors.secundary};
  }

  ${({ active }) => active && css`
    background: #F5F9FF;
    > div {
      border-bottom: 1px solid ${props => props.theme.colors.primary};
      border-top: 1px solid ${props => props.theme.colors.primary};
    }
  `}
`

export const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
  }
`

export const BusinessTypeInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 9px 0;
  flex: 1;

  svg {
    font-size: 20px;
  }

  span {
    font-size: 14px;
    line-height: 24px;
    margin-left: 14px;

    ${props => props.theme.rtl && css`
      margin-right: 14px;
      margin-left: 0px;
    `}
  }
`

export const LogoWrapper = styled.div`
  width: 32px;
  height: 32px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  min-width: 32px;
  margin-left: 23px;

  ${props => props.theme.rtl && css`
    margin-right: 23px;
    margin-left: 0px;
  `}

  img {
    width: 100%;
    height: 100%;
    border-radius: 7.6px;
    object-fit: cover;
  }
`

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${props => props.theme.colors.secundaryLight};
    font-size: 16px;

    &.fill {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const BusinessTypeWrapper = styled.div`
  border-top: 1px solid #E9ECEF;
`

export const SearchWrapper = styled.div`
  margin-bottom: 20px;
`
