import styled, { css } from 'styled-components'

export const UserName = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.colors.headingColor};
`

export const SavedPlaces = styled.div`
  text-align: center;
  height: calc(100% - 100px);
  padding-bottom: 0px;
  overflow: auto;
  display: flex;
    
  > div:first-child {
    position: relative;
    display: flex;
    box-sizing: border-box;
    padding: 0px 20px;
    flex: 1;

    > button{
      width: auto;
      align-self: center;
      position: absolute;
      bottom: 0px;

      ${props => props.theme?.rtl ? css`
        right: 20px;
      ` : css`
        left: 20px;
      `}
    }

    > ul {
      margin-top: 0px;
      max-height: calc(100% - 80px);
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