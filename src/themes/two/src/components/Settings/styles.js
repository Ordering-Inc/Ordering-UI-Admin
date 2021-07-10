import styled from 'styled-components'

export const BasicSettingsContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  transition: all 0.5s;
  overflow: hidden;
  margin-top: 60px;

  @media print {
    display: none;
  }

  @media (min-width: 760px) {
    margin-top: 0px;
  }
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 20px;
  color: #344050;
  margin-top: 20px;
`

export const ContentWrapper = styled.div`
  .category {
    transition: all 0.3s;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      background: #eae9f1;
    }
  }
`
