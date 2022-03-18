import styled, { css } from 'styled-components'

export const Container = styled.div``

export const InputWrapper = styled.div`
  margin-bottom: 25px;

  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
  }

  > div {
    width: 100%;
    border: none;

    > div:first-child {
      background-color: ${props => props.theme.colors.secundary};
      height: 43px;
      border: none;
      border-radius: 7.6px;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      color: ${props => props.theme.colors.secundaryContrast};
    }
    .list {
      background-color: ${props => props.theme.colors.secundary};
      border: none;
      
      .search-bar-container {
        padding: 10px;
        input {
          background-color: transparent;
          height: 44px;
        }
      }

      .list-wrapper {
        > div {
          padding: 6px 10px;
          &:hover {
            background-color: #f2f5f7;
          }
        }
      }
    }
  }
`

export const Option = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.colors.secundaryContrast};
`

export const AudienceWrapper = styled.div`
  > h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 15px;
  }
`

export const DynamicWrapper = styled.div`
  border-top: 1px solid ${props => props.theme.colors.borderColor};
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  padding: 12px 0px;
`

export const RadioCheckWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  ${({ isBottom }) => isBottom && css`
    margin-bottom: 10px;
  `}

  svg {
    margin-right: 15px;
    ${props => props.theme?.rtl && css`
      margin-left: 15px;
      margin-right: 0px;
    `}
    color: ${props => props.theme.colors.secundaryLight};
    &.fill {
      color: ${props => props.theme.colors.primary};
    }
  }

  span {
    user-select: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 22px;

  > .campaign-enabled {
    margin-bottom: 0px;
    font-size: 14px;
    line-height: 24px;
    margin-right: 7px;
    ${props => props.theme.rtl && css`
      margin-left: 7px;
      margin-right: 0px;
    `}
  }
`

export const DynamicContentWrapper = styled.div`
  padding-left: 30px;

  ${props => props.theme.rtl && css`
    padding-right: 30px;
    padding-left: 0px;
  `}

  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-top: 5px;
    margin-bottom: 0px;
    color: ${props => props.theme.colors.lightGray};

    span {
      color: ${props => props.theme.colors.headingColor};
    }
  }
`

export const FixedWrapper = styled.div`
  padding: 12px 0px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const FixedContent = styled.div`
  padding-left: 30px;

  ${props => props.theme.rtl && css`
    padding-right: 30px;
    padding-left: 0px;
  `}
  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-top: 5px;
    margin-bottom: 0px;
    color: ${props => props.theme.colors.lightGray};
  }
  h3 {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    margin-top: 20px;
    margin-bottom: 17px;
  }
`

export const FixedStatusWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;

  > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    text-transform: capitalize;
  }
`

export const StatusPoint = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #FFC700;
  margin: 0px 13px;
`

export const ScheduleForLateWrapper = styled.div`
  padding-left: 30px;
  padding-top: 18px;

  ${props => props.theme.rtl && css`
    padding-right: 30px;
    padding-left: 0px;
  `}
`

export const ButtonWrapper = styled.div`
  position: sticky;
  top: 100%;
  padding-bottom: 15px;

  button {
    margin-top: 20px;
    height: 44px;
    border-radius: 8px;
  }
`

export const RulesWrapper = styled.div`
  margin-top: 35px;

  > h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 0px;
  }
  > p {
    font-weight: 400;
    margin: 0px;
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 20px;
    span {
      color: ${props => props.theme.colors.lightGray};
    }
  }
`

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  ${({ borderTop }) => borderTop && css`
    border-top: 1px solid ${props => props.theme.colors.borderColor};
  `}
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    svg {
      color: ${props => props.theme.colors.primary};
    }
    span {
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      margin-left: 20px;

      ${props => props.theme.rtl && css`
        margin-left: 0px;
        margin-right: 20px;
      `}
    }
  }
`
