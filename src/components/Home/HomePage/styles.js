import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const HomeContainer = styled.div`
  position: relative;
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  max-height: 100vh;
  overflow: auto;
  @media print {
    display: none;
  }
  @media (min-width: 768px) {
    padding: 20px 25px;
  }
  @media (min-width: 800px) {
    padding-right: 100px;
  }
  @media (min-width: 1440px) {
    padding-right: 180px;
  }
`
export const Breadcrumb = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 10px 0 50px 0;
  h1 {
    font-weight: bold;
    font-size: 20px;
    margin: 0;
    color: ${props => props.theme.colors.headingColor};
  }
  > button {
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
      margin-right: -8px;
    ` : css`
      margin-right: 8px;
      margin-left: -8px;
    `}
    svg {
      width: 25px;
      height: 25px;
    }
  }
`
export const HeaderContainer = styled.div`
  margin-bottom: 25px;
`
export const WelcomeMsg = styled.h1`
  font-weight: bold;
  font-size: 28px;
  color: ${props => props.theme.colors.headingColor};
  @media(min-width: 768px) {
    font-size: 32px;
  }
`
export const GuideMsg = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.headingColor};
`
export const Reports = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 21px;
  margin-bottom: 5vw;
  @media(min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media(min-width: 1400px) {
    margin-bottom: 65px;
  }
`
export const VideoAndReportsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media(min-width: 800px) {
    flex-direction: ${({ isRowDirection }) => isRowDirection ? 'row' : 'column'}
  }
`
export const VideoOnBoardingWrapper = styled.div`
  margin-right: 24px;
  ${props => props.theme?.rtl && css`
    margin-left: 24px;
    margin-right: 0;
  `}
  width: 100%;
  @media (min-width: 800px) {
    width: 53%;
    height: inherit;
  }
`
export const HideAndShowWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.headingColor};
  span {
    font-weight: 600;
    font-size: 16px;
    margin-right: 12px;
    ${props => props.theme?.rtl && css`
      margin-left: 12px;
      margin-right: 0;
    `}
  }
  svg {
    font-size: 16px;
    cursor: pointer;
  }
`
export const VideoOnBoardingContainer = styled.div`
  margin-top: 35px;
  height: 300px;
  @media (min-width: 800px) {
    height: calc(100% - 54px);
  }
`
export const IframeWrapper = styled.div`
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
  }
`
export const FirstStoreToSellWrapper = styled.div`
  margin-top: 70px;
  .home-store-title {
    margin-bottom: 30px;
  }
`
export const FirstStoreToSellContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  transition: max-height 0.6s ease 0s;
  max-height: 0;
  overflow: hidden;
  ${({ active }) => active && css`
    max-height: 1000px;
  `}
  > div {
    width: 100%;
  }
  @media (min-width: 800px) {
    > div {
      width: 45%;
    }
  }
`
export const OrderingHelpButton = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
    font-weight: 500;
    font-size: 12px;
    color: ${props => props.theme?.colors.headingColor};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  button {
    white-space: nowrap;
    margin-left: 15px;
    width: 105px;
    min-width: 105px;
    height: 44px;
    ${props => props.theme?.rtl && css`
      margin-right: 15px;
      margin-left: 0;
    `}
  }
`
export const SalesGraphContainer = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  padding: 10px;
  padding-top: 20px;
  padding-bottom: 6px;
  @media (min-width: 768px) {
    padding: 20px 20px 10px;
  }
  @media (min-width: 800px) {
    ${({ isFullWidth }) => isFullWidth ? css`
      width: 100%;
    ` : css`
      width: 49%;
    `}
  }
`
export const ChartHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    text-transform: uppercase;
    margin: 0;
    font-size: 14px;
    color: ${props => props.theme?.colors.headingColor};
    margin-bottom: 15px;
  }
  h3 {
    margin: 0;
    font-weight: 500;
    font-size: 20px;
    color: ${props => props.theme?.colors.headingColor};
    margin-bottom: 15px;
  }
`
export const OrdersAndSalesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
  > div {
    width: 100%;
  }
  @media (min-width: 800px) {
    margin-top: 0px;
    ${({ isDirection }) => isDirection
    ? css`
      flex-direction: row;
      > div {
        width: 48%;
      }
    ` : css`
      width: 46%;
      flex-direction: column;
      > div {
        width: 100%;
      }
    `}
  }
`
export const OrdersOrSalesContainer = styled.div`
  padding: 13px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  margin-bottom: 20px;
  @media (min-width: 800px) {
    margin-bottom: 0px;
  }

  @media (min-width: 1200px) {
    padding: 20px;
  }
`
export const DetailsContent = styled.div`
  p {
    text-transform: uppercase;
    font-size: 14px;
    color: ${props => props.theme?.colors.headingColor};
    margin-bottom: 8px;
  }
  h2 {
    font-weight: 500;
    font-size: 24px;
    color: ${props => props.theme?.colors.headingColor};
    margin: 0;
    @media (min-width: 800px) {
      font-size: 28px;
    }
  }
`
export const BoxIconContainer = styled.div`
  width: 63px;
  height: 63px;
  background: #D4F2FF;
  border-radius: 7.6px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 28px;
    color: ${props => props.theme?.colors.primary};
  }
  ${({ isSales }) => isSales && css`
    background: #E3FEF3;
    svg {
      color: #00D27A;
    }
  `}

  @media (min-width: 1200px) {
    width: 5vw;
    height: 5vw;

    svg {
      font-size: 2vw;
      color: ${props => props.theme?.colors.primary};
    }
  }
`
export const ParagraphHeaders = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-weight: 600;
    font-size: 16px;
    margin: 0;
    color: ${props => props.theme?.colors.headingColor};
  }
  button {
    border-radius: 7.6px;
    height: 44px;
  }
`
export const AssistanceWidgets = styled.div`
  width: 100%;
  position: relative;
  margin-top: 20px;
`
export const AssistanceTitle = styled.div`
  text-align: center;
  margin-bottom: 55px;
  h1 {
    font-size: 24px;
    span {
      color: ${props => props.theme?.colors.primary};
    }
  }
  @media (min-width: 800px) {
    h1 {
      font-size: 28px;
    }
  }
`
export const AssistanceBody = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const WidgeBlock = styled.div`
  text-align: center;
  margin-bottom: 20px;
  h3 {
    font-size: 20px;
  }
  p {
    font-size: 14px;
  }
  button {
    border-radius: 7.6px;
    width: 296px;
    padding: 10px;
    line-height: 20px;
  }

  @media (min-width: 1024px) {
    max-width:45%;
  }
`

export const FeedbackWidgets = styled.div`
  margin-top: 20px;

  > a {
    margin-top: 20px;
    border-radius: 7.6px;
    color: ${props => props.theme.colors.primary};
    transition: all 0.3s linear;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const FeedbackContainer = styled.div`
  margin: 20px auto 0px auto;
  margin-bottom: 30px;
  width: fit-content;
  h2 {
    font-size: 24px;
    text-align: center;
  }
  p {
    font-size: 14px;
    text-align: center;
    margin-bottom: 3px;
  }
  button {
    border-radius: 7.6px;
    height: 44px;
    margin: 0 auto;
  }
  @media (min-width: 800px) {
    h2 {
      font-size: 28px;
    }
    p {
      font-size: 16px;
      text-align: left;
      &.center {
        text-align: center;
      }
    }
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const ProjectStatusContainer = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 60px;

  > img {
    max-height: 250px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const ProjectInfoWrapper = styled.div`
  padding: 20px 30px;
`
export const GreetingText = styled.h1`
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  margin: 0;
`
export const ProjectStatusDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
`
export const ProjectCurrentStatus = styled.div`
  width: fit-content;
  /* margin-top: 15px; */
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.colors.warning};
  background-color: ${(props) => lighten(0.4, props.theme.colors.warning)};
  ${({ isActive }) => isActive && css`
    color: ${props => props.theme.colors.success};
    background-color: ${(props) => lighten(0.5, props.theme.colors.success)};
  `}
`

export const ProjectStatusWrapper = styled.div`
  display: flex;
  align-items: center;

  > button {
    height: 44px;
    margin-left: 15px;
    ${props => props.theme.rtl && css`
      margin-right: 15px;
      margin-left: 0px;
    `}
  }
`

export const OrderingButtonWrapper = styled.div`
  position: absolute;
  width: calc(100% - 125px);
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.lightPrimary};
  padding: 14px 24px;
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: 8px;
  margin-left: 30px;
  ${props => props.theme.rtl && css`
    left: 0;
    right: initial;
  `}

  span {
    color: ${props => props.theme.colors.primary};
    font-weight: 700;
    font-size: 20px;
  }

  button {
    height: 44px;
    width: 180px;
    margin: 0;
    border-radius: 8px;
  }

  @media (min-width: 800px) {
    button {
      margin-right: 76px;
      ${props => props.theme.rtl && css`
        margin-right: 0;
        margin-left: 76px;
      `}
    }
  }

  @media (min-width: 1200px) {
    width: calc(100% - 130px);
    button {
      width: 216px;
    }
  }

  @media (min-width: 1440px) {
    button {
      margin-right: 156px;
      ${props => props.theme.rtl && css`
        margin-right: 0;
        margin-left: 156px;
      `}
    }
  }
`

export const OrderingButtonBlock = styled.div`
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  padding: 42px 20px;
  margin-bottom: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-weight: 700;
    font-size: 24px;
    margin: 0;
    text-align: center;
    span {
      color: ${props => props.theme.colors.primary};
    }
  }
  button {
    margin-top: 22px;
    width: 214px;
    height: 44px;
    border-radius: 8px;
  }
`

export const CloseButtonWrapper = styled.div`
  position: sticky;
  top: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    height: 44px;
    border-radius: 8px;
    width: 100%;
  }
`

export const HubspotFormWrapper = styled.div`
  min-height: 445px;
  position: relative;
`

export const OnboardingLessonsContainer = styled.div`
  background-color: ${props => props.theme.colors.lightPrimary};
  padding: 50px 15px;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    text-align: center;
  }
  p {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    margin: 8px 0 17px 0;
  }
  button {
    border-radius: 7.6px;
    padding: 10px;
    line-height: 20px;
    min-width: 216px;
  }
`
