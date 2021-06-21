import styled from 'styled-components'

export const Container = styled.div`
`

export const WrapperMap = styled.div`
  width: 100%;
  height: 150px;
  > div {
    position: relative !important;
    width: 100% !important;
    height: 100% !important;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    height: 180px;
  }
`

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  > div {
    width: 48%;
  }
`

export const WrapperCitySelector = styled.div`
  > p {
    color: ${props => props.theme.colors.headingColor};
    margin-bottom: 5px;
  }
  > div {
    background: #F8F9FA;
    border: none;
  }
`

export const WrapperTimezone = styled.div`
  p {
    &:first-child {
      color: ${props => props.theme.colors.headingColor};
      margin-bottom: 5px;
    }
    &:last-child {
      margin: 0;
      padding: 10px 0;
    }
  }
`
