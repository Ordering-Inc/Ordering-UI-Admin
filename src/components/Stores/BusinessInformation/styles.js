import styled, { css } from 'styled-components'

export const FormInput = styled.form`
  margin-top: 20px;
  min-height: calc(100vh - 150px);
`

export const HeaderImage = styled.div`
  width: 100%;
  height: 150px;
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
    object-fit: cover;
  }

  @media (min-width: 768px) {
    height: 180px;
  }
`

export const SkeletonWrapper = styled.div`
  span{
    height: 100%;
    position: relative;
    top: -2.5px;
  }
`

export const UploadImageIconContainer = styled.div`
  position: absolute;
  top: 0px;
  background: rgba(0,0,0,0.2);
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
  color: #FFF;
  border: 1px dashed #fff;
  span {
    margin: 0;
  }

  svg {   
    ${({ small }) => small ? css`
      width: 25px;
      height: 25px;
    ` : css`
      width: 45px;
      height: 45px;
    `}
  }
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    color: ${props => props.theme.colors.headingColor};
    margin-bottom: 10px;
    font-size: 14px;
    position: relative;
    > span {
      position: absolute;
      right: 0px;
      font-size: 12px;
      line-height: 18px;
      color: #03459E;
      top: 3px;
      ${props => props.theme?.rtl && css`
        left: 0px;
        right: initial;
      `}
    }
  }

  input,
  textarea {
    color: ${props => props.theme.colors.headingColor};
  }
`

export const ActionsForm = styled.div`
  position: sticky;
  top: 100%;
  margin-top: 15px;
  > button {
    height: 44px;
  }
`

export const LogoImage = styled.div`
  transform: translate3d(20px, -30px, 0px);
  height: 60px;
  width: 60px;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  filter: drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));

  ${({ isEdit }) => !isEdit && css`
    pointer-event: none;
  `}

  img,
  div {
    width: 100%;
    border-radius: 8px;
    height: 100%;
    overflow: hidden;
  };

  img{
    object-fit: cover;
  }
`

export const PhoneWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  > div {
    width: 100%;
  }
  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
    > div {
      width: 48%;
    }
  }
`

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 120px;
  width: 100%;
  margin-bottom: 15px;
  > span {
    font-size: 14px;
  }
`

export const RibbonSwitchWrapper = styled(SwitchWrapper)`
  padding-top: 15px;
  margin-bottom: 0px;
  > span {
    font-weight: 600;
  }
`

export const ColorShapeWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const ColorWrapper = styled.div`
  margin-top: 24px;

  > label {
    font-weight: 400;
    font-size: 14px;
    margin-bottom: 7px;
  }
`

export const ShapeWrapper = styled(ColorWrapper)`
  > label {
    font-weight: 400;
    font-size: 14px;
  }
`

export const ShapeContentWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const ShapeBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  > div {
    width: 76px;
    height: 36px;
    border: 1px solid ${props => props.theme.colors.borderColor};
    margin-bottom: 15px;
    transition: all 0.3s linear;
  }

  svg {
    font-size: 16px;
    color: ${props => props.theme.colors.secundaryLight};
    transition: all 0.3s linear;
  }

  ${({ shapeRect }) => shapeRect && css`
     > div {
       border-radius: 7.6px;
     }
    margin: 0px 20px;
  `}

  ${({ round }) => round && css`
     > div {
       border-radius: 50px;
     }
  `}

  ${({ active }) => active && css`
    > div {
      border: 1px solid ${props => props.theme.colors.primary};
    }

    svg {
      color: ${props => props.theme.colors.primary};
    }
  `}
`

// export const PriceFilterWrapper = styled.div`
//   > label {
//     font-weight: 600;
//     font-size: 16px;
//     line-height: 24px;
//     margin-bottom: 0px;
//   }
// `

// export const PriceFilterListWrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   width: calc(100% + 20px);
//   margin-left: -10px;

//   > div {
//     width: calc(20% - 20px);
//     margin: 10px;
//   }
// `

// export const PriceFilterItem = styled.div`
//   display: flex;
//   align-items: center;

//   svg {
//     font-size: 16px;
//     color: ${props => props.theme.colors.secundaryLight};
//     transition: all 0.3s linear;
//     min-width: 16px;
//   }

//   span {
//     font-weight: 400;
//     font-size: 14px;
//     margin-left: 8px;
//     ${props => props.theme.rtl && css`
//       margin-right: 8px;
//       margin-left: 0px;
//     `}
//   }

//   ${({ active }) => active && css`
//     svg {
//       color: ${props => props.theme.colors.primary};
//     }
//   `}
// `
