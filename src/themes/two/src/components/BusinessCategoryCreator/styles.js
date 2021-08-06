import styled, { css } from 'styled-components'

export const CreateBusinessCategoryContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 7.5px;
  margin-bottom: 15px;
  transition: all 0.3s;
  cursor: pointer;
  height: 70px;
`

export const InputCategoryName = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-weight: 500;
  font-size: 12px;
  color: ${props => props.theme.colors?.headingColor};
`

export const CategoryImage = styled.div`
  width: 41px;
  height: 41px;
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
`

export const UploadImageIconContainer = styled.div`
  position: absolute;
  top: 0px;
  background-color: ${props => props.theme.colors.borderColor};
  ${({ isImage }) => isImage && css`
    opacity: 0.2;
  `}
  padding: 4px;
`

export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ADB5BD;
  span {
    margin: 0;
  }

  svg {   
    width: 16px;
  }
`
