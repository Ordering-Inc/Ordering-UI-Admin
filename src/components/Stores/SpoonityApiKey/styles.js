import styled, { css } from 'styled-components'

export const BusinessOrderingChannelsContainer = styled.div`
  box-sizing: border-box;
  @media (min-width: 576px) {
    padding: 20px;
  }
`
export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors?.headingColor};
  margin-bottom: 25px;
`

export const BusinessCustomSlugContainer = styled.div`
  button {
    border-radius: 7.6px;
    height: 44px;
  }
`

export const FormControl = styled.div`
  margin-bottom: 20px;

  input[type=text] {
    border: 1px solid #DEE2E6;
    box-sizing: border-box;
    border-radius: 7.6px;
    height: 44px;
    width: 100%;
  }
`

export const Label = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 14px;
  color: ${props => props.theme?.colors.headingColor};
`

export const Tabs = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 25px;
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const Tab = styled.div`
  user-select: none;
  padding: 10px 0px;
  cursor: pointer;
  color: ${props => props.theme.colors?.headingColor};
  font-size: 14px;
  white-space: nowrap;
  color: ${props => props.theme.colors.lightGray};
  ${props => props.theme?.rtl ? css`
    margin-left: 30px;
  ` : css`
    margin-right: 30px;
  `}

  ${({ active }) => active && css`
    border-bottom: 1px solid;
    font-weight: 500;
    color: ${props => props.theme.colors.headingColor};
  `}
`
