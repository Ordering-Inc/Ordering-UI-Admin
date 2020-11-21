import styled from 'styled-components'

export const OverViewContainer = styled.div`
  position: fixed;
  width: 140px;
  right: 0px;
  top: 68px;
  min-height: calc(100vh - 68px);
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0px 15px;
  box-sizing: border-box;
  transition: all 0.5s;
  z-index: 100;
  
  @media (max-width: 1400px) {
    right: -140px;
    box-shadow: -2px 2px 5px #00000029;
  }
`
export const OverViewTitle = styled.p`
  color: ${({ theme }) => theme?.colors?.textBlack};
  text-transform: capitalize;
  font-size: 15px;
  padding: 30px 0;
  margin: 0px;
`
export const OverViewItemContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 45px;
`
export const OverViewItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`
export const OverViewStatusTitle = styled.p`
  color: ${({ theme }) => theme?.colors?.textBlackContrast};
  font-size: 16px;
  text-transform: capitalize;
  font-weight: 500;
  margin: 0px;
`
export const OverViewStatusValue = styled.p`
  color: ${({ theme }) => theme?.colors?.textBlack};
  font-size: 24px;
  font-weight: 600;
  margin: 0px;
`
