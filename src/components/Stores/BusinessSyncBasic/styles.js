import styled from 'styled-components'

export const Container = styled.div``

export const LogoWrapper = styled.div`
  width: 216px;
  height: 216px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    width: 100%;
  }
`

export const Description = styled.div`
  margin-top: 36px;
  margin-bottom: 50px;
  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin: 0px;
    span {
      font-weight: bold;
    }
  }
`

export const GetStarted = styled.div`
  h2 {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 10px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-top: 0px;
    margin-bottom: 8px;
    color: ${props => props.theme.colors.lightGray};
  }
  button {
    border-radius: 8px;
    height: 44px;
  }
`

export const YoutubeVideoWrapper = styled.div`
  margin-top: 50px;
  padding-bottom: 30px;
`

export const YoutubeVideoInner = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  border-radius: 7.6px;
  background-color: ${props => props.theme.colors.secundaryDarkContrast};

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`
