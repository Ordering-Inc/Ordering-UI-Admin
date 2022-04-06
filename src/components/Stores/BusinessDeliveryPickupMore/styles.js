import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px;
  height: 100%;
  h1 {
    font-size: 20px;
    font-weight: 700;
    margin-top: 5px;
  }

  @media (min-width: 1000px) {
    max-width: 500px;
  }
`
export const TabsContainer = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
  margin-bottom: 24px;
  margin-top: 15px;
`
export const Tab = styled.div`
  user-select: none;
  padding: 10px 0px;
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  font-size: 14px;
  white-space: nowrap;
  text-transform: capitalize;
  position: relative;
  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}

  ${({ active }) => active && css`
    font-weight: 500;

    &::after {
      content: "";
      background: #344050;
      height: 1px;
      position: absolute;
      width: 100%;
      bottom: -1px;
      ${props => props.theme?.rtl ? css`
        right: 0;
      ` : css`
        left: 0;
      `}
    }
  `}

  ${({ active }) => !active && css`
    color: ${props => props.theme.colors?.lightGray};
  `}
`
