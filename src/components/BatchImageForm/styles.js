import styled, { css } from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  width: 100%;
`
export const Title = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  margin-bottom: 20px;
  h2 {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    margin: 0;
    color: ${props => props.theme.colors?.headingColor};
  }
  @media (min-width: 768px) {
    margin-bottom: 25px;
    h2 {
      font-size: 24px;
    }
  }
`
export const UploadConditions = styled.div`
  display: block;
`
export const ConditionTitle = styled.p`
  margin: 0;
  margin-bottom: 9px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: ${props => props.theme.colors?.headingColor};
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 28px;
  }
`
export const Conditions = styled.ol`
  padding-left: 15px;
  li {
    margin: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    color: ${props => props.theme.colors?.headingColor};
  }
  @media (min-width: 768px) {
    padding-left: 20px;
    li {
      font-size: 16px;
    }
  }
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 30px;
  }
`
export const BatchUploadForm = styled.form`
  width: 100%;
  height: fit-content;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 50%;
  }
`
export const ImageIssue = styled.div`
  position: relative;
  width: 100%;
  p {
    margin: 0;
    margin-bottom: 9px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
  }
  ul {
    padding-left: 0px;
    margin-bottom: 0;
    list-style-type: circle;
    li {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 14px;
      line-height: 24px;
    }
  }

  @media (min-width: 768px) {
    width: 50%;
    padding: 0 20px;
    border-left: 1px solid #E9ECEF;
    margin-left: 25px;
    &:after {
      content:'';
      position: absolute;
      left: -1px;
      bottom: 0;
      background-color: #fff;
      width: 2px;
      height: 55px;
    }
  }
  
`
export const ImageInput = styled.div`
  padding: 20px;
  @media (min-width: 768px) {
    padding: 0px;
  }
`
export const BatchImages = styled.div`
  position:relative;
  width: 100%;
  .multiple-image-uploader {
    position: relative;
    width: 100%;
    padding-top: 75%; 
  }
`
export const SkeletonWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 11px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 20;
  .loader-wrapper {
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
  }
  .loader {
      width: 30px;
      height: 30px;
      top: 50%;
      left: 50%;
      border-radius: 60px;
      animation: loader 0.8s linear infinite;
      -webkit-animation: loader 0.8s linear infinite;
  }

  @keyframes loader {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
      border: 4px solid #2C7BE5;
      border-left-color: transparent;
    }
    50% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
      border: 4px solid ${() => darken(0.06, '#2C7BE5')};
      border-left-color: transparent;
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
      border: 4px solid ${() => darken(0.03, '#2C7BE5')};
      border-left-color: transparent;
    }
  }
`
export const UploadImageIconContainer = styled.div`
  background: #E9ECEF;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  position:  absolute;
  padding:10px;
  border-radius: 7.6px;
`
export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #ADB5BD;
  border: 1px dashed #fff;
  width: 100%;
  height: 100%;
  span {
    margin: 0;
  }
  svg {   
    width: 45px;
    height: 45px;
  }
`
export const Action = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  padding-top: 0;

  button {
    width: 100%;
    @media (min-width: 768px) {
      width: fit-content;
    }
  }

  @media (min-width: 768px) {
    padding: 0px;
    padding-top: 20px;
  }
`
export const IssueBoard = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  border-radius: 7.6px;
  padding: 10px;
  border: 1px ridge #f2f2f2;
  max-height: 150px;
  overflow-y: auto;
  ${props => props.emptyboard && css`
    min-height: 75px;
  `}
`
export const UploadedImages = styled.div`
  position: absolute;
  width: 100%;
  padding: 11px;
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  z-index: 20;
  img {
    width: 18.6%;
    min-height: 24%;
    object-fit: cover;
    margin: 2px;
  }

`
