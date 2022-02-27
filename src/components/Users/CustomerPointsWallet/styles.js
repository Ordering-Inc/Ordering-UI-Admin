import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  width: 100%;

  > h1 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 40px;
  }
`

export const PointsWalletContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const PointsWrapper = styled.div`
  h2 {
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    margin: 0px;
  }
  p {
    margin: 0px;
    font-size: 14px;
    line-height: 24px;
  }
`

export const EqualWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  margin: 0px 30px;
`

export const LevelWrapper = styled.div`
  margin-top: 50px;
  > h1 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 25px;
    margin-top: 0px;
  }
  img {
    object-fit: cover;
    max-width: 350px;
    width: 100%;
  }
`
