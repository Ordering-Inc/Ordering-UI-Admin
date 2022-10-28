import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  max-height: 100vh;
  overflow: auto;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }
`
export const UserInfoContainer = styled.div`
  padding-top: 30px;
  display: flex;
`
export const UserImage = styled.div`
  border-radius: 8px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  width: 216px;
  height: 216px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }
`
export const UserInfoWrapper = styled.div`
  margin: 0 26px;
  p {
    &.name {
      font-size: 20px;
      font-weight: 600;
      margin: 0;
    }
    &.email {
      font-size: 14px;
      line-height: 24px;
      margin: 12px 0;
    }
    &.phone {
      font-size: 14px;
      line-height: 24px;
      margin: 0;
    }
  }
`
export const ButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 26px;

  button {
    height: 44px;
  }
`
