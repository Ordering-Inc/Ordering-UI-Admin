import styled, { css } from 'styled-components'

export const ItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  margin: 15px 0;
  padding: 20px 10px;
  transition: all 0.3s;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid transparent;

  ${({ active }) => active && css`
    border: 1px solid #2C7BE5 !important;
  `}

  ${({ disabledFeature }) => disabledFeature && css`
    background-color: ${props => props.theme?.colors.disabled} !important;
    cursor: not-allowed;
  `}

  &:hover {
    background: #E9F2FE;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`
export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  background: #F8F9FA;
  border-radius: 7.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-bottom: 10px;
  ${props => props.theme?.rtl ? css`
    margin-left: 15px;
  ` : css`
    margin-right: 15px;
  `}

  @media (min-width: 577px) {
    align-self: flex-start;
    margin-bottom: 0;
  }

  svg {
    font-size: 24px;
    color: ${props => props.theme?.colors.secundaryLight};
  }
`

export const ItemContent = styled.div`
  width: 100%;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.p`
  font-weight: 500;
  font-size: 13px;
  color: #344050;
  margin-bottom: 8px;
`

export const Description = styled.div`
  font-weight: normal;
  font-size: 12px;
  color: #909BA9;

  @media (min-width: 577px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`
