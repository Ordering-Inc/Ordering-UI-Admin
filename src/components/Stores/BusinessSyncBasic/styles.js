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

export const GuideStep = styled.div`
  margin-bottom: 30px;
  h4 {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 7px;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${props => props.theme.colors.lightGray};
    a {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const YoutubeVideoWrapper = styled.div`
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
