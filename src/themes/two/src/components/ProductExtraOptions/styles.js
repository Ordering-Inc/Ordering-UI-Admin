import styled, { css } from 'styled-components'

export const MainContainer = styled.div`
  overflow: auto;
  transition: 0.3s;

  > button {
    margin: 20px 0;
  }

  @media (min-width: 1000px) {
    width: 0;
    ${props => props.theme?.rtl ? css`
      border-right: 1px solid #E9ECEF;
    ` : css`
      border-left: 1px solid #E9ECEF;
    `}
  }
`

export const OptionsContainer = styled.div`
  padding: 20px;
  border-bottom: 13px solid ${props => props.theme.colors.secundary};
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 24px;
    color: ${props => props.theme.colors.headingColor};
  }

  > svg {
    display: none;
  }

  @media (min-width: 1000px) {
    > svg {
      display: block;
      cursor: pointer;
      font-size: 24px;
      color: ${props => props.theme.colors.headingColor};
      ${props => props.theme?.rtl ? css`
        margin-right: 10px;
      ` : css`
        margin-left: 10px;
      `}
    }
  }
`

export const OptionsTable = styled.table`
  width: 100%;
  overflow: auto;
  th, td {
    font-size: 14px;
    color: ${props => props.theme.colors.headingColor};
    padding: 12px 0;
    &:last-child {
      width: 160px;
    }

    > input {
      width: 60px;
      padding: 5px;
      ${props => props.theme?.rtl ? css`
        margin-left: 5px;
      ` : css`
        margin-right: 5px;
      `}
      border: none;
      outline: none;
      &:focus {
        border: 1px dashed ${props => props.theme.colors.lightGray};
      }
    }
  }

  th {
    font-weight: 700;
  }

  thead, tbody {
    border-bottom: 1px solid #E9ECEF;
  }
`

export const OptionNameContainer = styled.div`
  display: flex;
  align-items: center;
  > input {
    flex: 1;
    padding: 5px 0;
    margin: 0 5px;
    border: none;
    outline: none;
    &:focus {
      border: 1px dashed ${props => props.theme.colors.lightGray};
    }
  }
`

export const OptionImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  overflow: hidden;
  cursor: -webkit-grab;
  cursor: grab;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  position: relative;

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

export const UploadImageIconContainer = styled.div`
  position: absolute;
  top: 0px;
  background: rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ small }) => small ? css`
    padding: 4px;
  ` : css`
    padding: 8px;
  `}
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

export const SkeletonWrapper = styled.div`
  span{
    height: 100%;
    position: relative;
    top: -2.5px;
  }
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const EnableWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;

  span {
    font-size: 14px;

    ${props => props.theme?.rtl ? css`
      padding-left: 10px;
    ` : css`
      padding-right: 10px;
    `}
  }
`

export const DropDownWrapper = styled.div`
  ${props => props.theme?.rtl ? css`
    margin-right: 35px;
    ` : css`
    margin-left: 35px;
  `}
  button {
    background: #F8F9FA !important;
    border: none;
    padding: 0px;
    svg {
      color: ${props => props.theme.colors.headingColor};
    }

    &:after {
      display: none;
    }
  }

  > div {
    > div {
      border: 1px solid #E9ECEF;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
      border-radius: 8px;

      a:last-child {
        color: #E63757;
      }
    }
  }
`
