import styled, { css } from 'styled-components'

export const HomeSingleStoreContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`

export const BoxNumberWrapper = styled.div`
  background: #F8F9FA;
  border-radius: 7.5px;
  width: 64px;
  height: 64px;
  min-width: 64px;
  max-width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;

  ${props => props.theme?.rtl && css`
    margin-left: 16px;
    margin-right: 0;
  `}

  p {
    font-weight: 600;
    font-size: 20px;
    margin: 0;
    color: #909BA9;
  }

  ${({ active }) => active && css`
    background: #E9F2FE;
    p {
      color: ${props => props.theme?.colors.primary};
    }
  `}
`

export const StoreContent = styled.div`
    width: 100%;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-weight: 500;
    font-size: 12px;
    color: ${props => props.theme?.colors.headingColor};
    margin: 0;
  }

  svg {
    font-size: 16px;
    color: #B1BCCC;
    cursor: pointer;

    &.fill {
      color: ${props => props.theme?.colors.primary};
    }
  }
`

export const Description = styled.p`
  font-size: 10px;
  color: #909BA9;
  margin-top: 7px;
  margin-bottom: 0;
`

export const ThatsIt = styled.p`
  margin-bottom: 0;
  margin-top: 5px;
  font-weight: 500;
  font-size: 12px;
  color: ${props => props.theme?.colors.headingColor};
`
