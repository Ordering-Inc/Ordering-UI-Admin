import styled from 'styled-components'
import { darken } from 'polished'

export const ProdcutVideosContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-x: hidden;
  
  > h1 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 20px;
    padding: 10px 0;
  }

`
export const GalleryVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const GalleryVideos = styled.div`
  margin-bottom: 18px;
  border-top: 1px solid ${props => props.theme.colors.borderColor};
`

export const AddNewVideo = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    flex: 1;
    border: 1px solid #DEE2E6;
    box-sizing: border-box;
    border-radius: 7.6px;
    font-size: 13px;
    padding: 6px 12px;
  }

  button {
    border-radius: 7.6px;
    font-size: 13px;
    height: 34pxpx;
  }
`
export const GalleryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  button {
    background: transparent !important;
    border: none;
    color: ${props => darken(0.1, props.theme.colors.danger)};
    font-size: 12px;

    &:hover {
      color: ${props => props.theme.colors.danger};
    }
  }
`
export const GalleryURL = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  max-width: 80%;
  text-overflow: ellipsis;
  color: ${props => props.theme.colors.headingColor};
`
