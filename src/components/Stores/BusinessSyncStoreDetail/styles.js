import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  width: 100%;
`

export const Header = styled.div`
  h2 {
    margin-bottom: 30px;
    margin-top: 0px;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
  }
`

export const Content = styled.div``

export const LinkItemWrapper = styled.div`
  margin-bottom: 28px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};

  > p {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin: 0px;
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 18px;

  > a {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: ${props => props.theme.colors.primary};
  }
  button {
    svg {
      width: 16px;
      height: 16px;
      color: ${props => props.theme.colors.headingColor};
    }
  }
`
