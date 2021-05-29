import styled from 'styled-components'

export const OrderContentHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    flex-direction: column;
    row-gap: 10px;
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
  color: ${(props) => props.theme.colors.textBlackContrast};
  font-size: 24px;
  font-weight: 500;
  margin: 0px;
  text-transform: capitalize;

  @media (max-width: 560px) {
    width: 100%;
    margin-bottom: 10px;
  }
`
export const TopRightSection = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    justify-content: flex-end;
  }
`
export const FilterButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  margin-right: 40px;
  margin-left: 10px;
  font-size: 24px;
  padding: 0px;
  color: #1C202E;

  &:active {
    opacity: 0.5;
  }

  @media (max-width: 1400px) {
    margin-right: 10px;
  }
`
export const WrapperSearchAndFilter = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`
