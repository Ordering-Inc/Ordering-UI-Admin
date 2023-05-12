import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 0 0 29px 0;
  }
`

export const SectionContainer = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);
  border-radius: 7.6px;
  padding: 25px 38px;
  margin: 25px 20px 34px 20px;

  > div {
    max-width: 1024px;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  position: sticky;
  z-index: 100;
  bottom: 0;
  background-color: ${props => props.theme.colors.backgroundPage};

  > button {
    border-radius: 8px;
    height: 44px;
    &:first-child {
      margin: 0 10px;
    }
  }
`
