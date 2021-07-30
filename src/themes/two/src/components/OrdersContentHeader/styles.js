import styled, { css } from 'styled-components'

export const OrderContentHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 1200px) {
    ${({ isDisableControl }) => !isDisableControl && css`
      flex-direction: column;
    `}
  }
`
export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`
export const HeaderTitle = styled.p`
  color: ${(props) => props.theme.colors.headingColor};
  font-size: 24px;
  font-weight: 700;
  margin: 0px;
  text-transform: capitalize;
  white-space: nowrap;

  @media (max-width: 560px) {
    width: 100%;
    margin-bottom: 10px;
  }
`
export const TopRightSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
  }
`
export const FilterButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  font-size: 24px;
  padding: 0px;
  color: ${props => props.theme.colors.secundaryContrast};

  &:active {
    opacity: 0.5;
  }

  ${props => props.theme?.rtl ? css`
    margin-right: 10px;
  ` : css`
    margin-left: 10px;
  `}
`
export const WrapperSearchAndFilter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
    > div {
      width: 100%;

      input {
        width: 100%;
      }
    }
  `}

  input {
    background: ${props => props.theme.colors.secundary};
    border: none;
  }

  @media (min-width: 760px) {
    margin: 20px 0 10px 0;
  }

  @media (min-width: 992px) {
    margin: 0px;
  }
`
