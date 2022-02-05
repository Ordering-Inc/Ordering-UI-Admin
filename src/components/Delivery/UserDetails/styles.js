import styled, { css } from 'styled-components'

export const UserName = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.headingColor};
`

export const SavedPlaces = styled.div`
  text-align: center;
  height: calc(100% - 100px);
  margin-top: 25px;
  padding-bottom: 0px;
  overflow: auto;
  display: flex;
    
  > div:first-child {
    position: relative;
    display: flex;
    box-sizing: border-box;
    flex: 1;

    > button{
      width: auto;
      align-self: center;
      position: absolute;
      bottom: 0px;

      ${props => props.theme?.rtl ? css`
        right: 0px;
      ` : css`
        left: 0px;
      `}
    }

    > ul {
      margin-top: 0px;
      max-height: calc(100% - 70px);
      overflow: auto;
    }
  }


  @media (min-width: 768px){
    ul{
      width: 100%;
    }
    >div {
      > button {
        width: 65%;
      }
    }
  }
`

export const PersonalizationWrapper = styled.div`
  height: calc(100% - 60px);
  > div {
    padding: 35px 0px 25px;
  }
`
