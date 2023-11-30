import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;
`

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.colors.warning100};
  padding: 20px;
  border-radius: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`

export const Icon = styled.div`
  flex: 1;
  max-width: 5%;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 10px;
  }
`

export const Content = styled.div`
  flex: 2;
  max-width: 80%;
  text-align: left;

  h1, p {
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }

  h1 {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }
`

export const ButtonWrap = styled.div`
  flex: 1;
  max-width: 15%;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 10px;
  }
`
