import styled from 'styled-components'

export const Container = styled.div`
  > button {
    position: sticky;
    top: 100%;
  }
`

export const WrapperMap = styled.div`
  width: 100%;
  height: 250px;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    height: 300px;
  }
`
