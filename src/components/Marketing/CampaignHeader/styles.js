import styled, { css } from 'styled-components'

export const CampaignHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  width: 100%;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 993px) {
    ${({ isDisableControl }) => !isDisableControl && css`
      flex-direction: column;
    `}
  }
`
export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderTitle = styled.p`
  color: ${(props) => props.theme.colors.headingColor};
  font-size: 20px;
  font-weight: bold;
  margin: 0px;
  text-transform: capitalize;
  white-space: nowrap;

  @media (max-width: 560px) {
    width: calc(100% - 50px);
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

export const WrapperSearch = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  input {
    background: ${props => props.theme.colors.secundary};
    border: none !important;
  }

  > button {
    height: 41px;
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
    ` : css`
      margin-right: 8px;
    `}
  }

  @media (min-width: 760px) {
    margin: 20px 0 10px 0;
  }

  @media (min-width: 992px) {
    margin: 0px;
  }
`
