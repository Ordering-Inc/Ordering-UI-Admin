import styled, { css } from 'styled-components'

export const Container = styled.div`
  flex: 1;
  padding: 25px 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;
`

export const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;

  > h1 {
    font-weight: 700;
    font-size: 20px;
    color: ${props => props.theme.colors.headingColor};
    margin: 0px;
    line-height: 32px;
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

export const WebsiteWrapper = styled.div`
  margin-top: 30px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  > img {
    width: 100%;
    margin-top: 20px;
    max-height: 600px;
    object-fit: cover;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    padding: 40px;

    img {
      margin-top: 0px;
      width: 42%;
    }
  }

  @media (min-width: 1200px) {
    img {
      width: 35%;
    }
    margin-right: 50px;
    ${props => props.theme.rtl && css`
      margin-left: 50px;
      margin-right: 0px;
    `}
  }
`

export const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    margin-top: 0px;
    margin-bottom: 7px;
    text-transform: capitalize;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin: 0px;
  }

  @media (min-width: 769px) {
    margin-right: 40px;
    ${props => props.theme.rtl && css`
      margin-left: 40px;
      margin-right: 0px;
    `}
  }
`

export const MoreSettingsHeader = styled.div`
  margin-top: 70px;
  margin-bottom: 35px;
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    margin-top: 0px;
    margin-bottom: 8px;
    text-align: center;
    span {
      color: ${props => props.theme.colors.primary};
    }
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 34px;
  }
`

export const FormWrapper = styled.div`
  > button {
    height: 44px;
    margin-top: 20px;
  }
`

export const InputFormWrapper = styled.div`
  padding: 25px 38px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  margin-bottom: 30px;
  h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 0px;
  }
`

export const InnerBlock = styled.div`
  width: 100%;
  max-width: 647px;
`

export const FormGroup = styled.div`
  margin-top: 27px;
  label {
    display: block;
    margin-bottom: 12px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
  > input, textarea {
    width: 100%;
  }
  .custom-domain {
    width: 330px;
  }
  button {
    height: 44px;
  }
`

export const TemporalDomail = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  > a {
    color: ${props => props.theme.colors.primary};
  }

  ${({ isDisabled }) => isDisabled && css`
    pointer-events: none;
    color: ${props => props.theme.colors.disabled};
    > a {
      color: ${props => props.theme.colors.disabled};
    }
  `}

  ${({ marginBottom }) => marginBottom && css`
    margin-bottom: 10px;
  `}
`

export const ImageFormGroup = styled.div`
  margin-top: 30px;
`

export const LogoImage = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));

  img,
  div {
    width: 100%;
    border-radius: 8px;
    height: 100%;
    overflow: hidden;
  };

  img{
    object-fit: contain;
  }
`

export const BackgroundImage = styled(LogoImage)`
  height: 213px;
  max-width: 320px;

  @media (min-width: 768px) {
    height: 427px;
    max-width: 640px;
  }
`

export const UploadImageIconContainer = styled.div`
  position: absolute;
  top: 0px;
  background: ${props => props.theme.colors.secundaryDarkContrast};
  ${({ bgimage }) => bgimage && css`
    background: transparent;
    svg, span {
      color: ${props => props.theme.colors.white};
    }
    border: 1px dashed ${props => props.theme.colors.secundaryDarkContrast};
  `}
  ${({ small }) => small ? css`
    padding: 4px;
  ` : css`
    padding: 8px;
  `}
`

export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.colors.disabled};
  span {
    margin-top: 14px;
    font-size: 14px;
  }

  svg {   
    width: 52px;
    height: 45px;
  }
`

export const ImgInfoWrapper = styled.div`
  margin-top: 15px;
  h4 {
    font-size: 14px;
    line-height: 24px;
    font-weight: 400;
    margin: 0px;
  }
  p {
    font-size: 12px;
    line-height: 18px;
    margin-top: 2px;
    margin-bottom: 0px;
    color: ${props => props.theme.colors.secundaryContrast};
  }
`

export const CheckBoxWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
    &.active {
      color: ${props => props.theme.colors.primary};
    }
    margin-right: 20px;
    ${props => props.theme.rtl && css`
      margin-left: 20px;
      margin-right: 0px;
    `}
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    user-select: none;
  }
`

export const ColorPickerWrapper = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    margin-top: 25px;
    > p {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      margin-top: 0px;
      margin-bottom: 9px;
    }
  }

  @media (min-width: 769px) {
    flex-direction: row;
  }
`

export const ContentWrapper = styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      margin-top: 0px;
      margin-bottom: 20px;
    }
    button {
      width: 200px;
      height: 44px;
    }
  }
  @media (min-width: 769px) {
    flex-direction: row;
  }
`

export const WebsiteButtonWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  button {
    height: 44px;
  }
`

export const TabWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const Tab = styled.div`
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${props => props.theme.colors.lightGray};
  padding-bottom: 14px;
  transition: all 0.2s ease-out;
  :not(:last-child) {
    margin-right: 32px;
  }
  ${({ active }) => active && css`
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    padding-bottom: 13px;
    color: ${props => props.theme.colors.headingColor};
    border-bottom: 1px solid ${props => props.theme.colors.headingColor};
  `}
`

export const HeaderInfoWrapper = styled.div`
  position: relative;
  ${props => props.theme?.rtl ? css`
    margin-left: -8px;
    margin-right: 8px;
  ` : css`
    margin-right: -8px;
    margin-left: 8px;
  `}

  > button {
    height: 25px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
  &:hover > div {
    /* display: block; */
    visibility: visible;
    opacity: 1;
  }
`

export const InfoContent = styled.div`
  position: absolute;
  top: 100%;
  z-index: 999;
  background: ${props => props.theme.colors.backgroundInfo};
  border: 1px solid ${props => props.theme.colors.primary};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 8px 12px;
  font-size: 12px;
  line-height: 18px;
  min-width: 150px;
  transition: all 0.3s linear;
  visibility: hidden;
  opacity: 0;
  right: 0px;
  ${props => props.theme.rtl && css`
    left: 0px;
    right: initial;
  `}

  > a {
    color: ${props => props.theme.colors.primary};
    margin: 0 5px;
  }

  @media (min-width: 576px) {
    min-width: 350px;
    padding: 12px 15px;
    left: 0px;
    ${props => props.theme.rtl && css`
      right: 0px;
      left: initial;
    `}
  }

  @media (min-width: 993px) {
    min-width: 535px;
  }
`
export const RadioItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  cursor: pointer;

  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
    &.active {
      color: ${props => props.theme.colors.primary};
    }
    margin-right: 20px;
    ${props => props.theme.rtl && css`
      margin-left: 20px;
      margin-right: 0px;
    `}
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`

export const CustomeDomainDesc = styled.p`
  margin-top: 5px;
  margin-bottom: 0px;
  font-weight: 400;
  font-size: 12px;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const CustomDomainInfo = styled.div`
  position: relative;

  > button {
    height: 21px;
    svg {
      width: 13px;
      height: 13px;
      color: ${props => props.theme.colors.headingColor};
    }
  }
  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
`

export const CustomDomainInfoContent = styled.div`
  position: absolute;
  top: 100%;
  z-index: 999;
  background: ${props => props.theme.colors.backgroundInfo};
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 8px 12px;
  font-size: 12px;
  line-height: 18px;
  min-width: 150px;
  transition: all 0.3s linear;
  visibility: hidden;
  opacity: 0;
  right: -100px;
  ${props => props.theme.rtl && css`
    left: 0px;s
    right: initial;
  `}

  span {
    display: block;
  }

  a {
    color: ${props => props.theme.colors.primary};
    padding-left: 5px;
  }

  @media (min-width: 576px) {
    min-width: 350px;
    padding: 10px 16px;
    left: 0px;
    ${props => props.theme.rtl && css`
      right: 0px;
      left: initial;
    `}
  }
`
export const Option = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 7.6px;
  img {
    min-height: 38px;
    min-width: 38px;
    height: 38px;
    width: 38px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    ${props => props.theme?.rtl ? css`
      margin-left: 8px;
    ` : css`
      margin-right: 8px;
    `}
  }
  > span {
    max-width: 200px;
    font-size: 14px;
    font-weight: 700;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  @media (min-width: 768px) {
    > span {
      max-width: 560px;
    }
  }
`
export const SelectWrapper = styled.div`
  margin-bottom: 20px;

  .select {
    width: 100%;
    background: ${props => props.theme.colors.secundary};
    border: none;
    font-size: 14px;

    > div:first-child {
      padding-top: 4px;
      padding-bottom: 4px;
    }
  }
`
