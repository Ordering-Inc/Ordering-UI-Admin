import styled, { css } from 'styled-components'

export const BusinessDeliveryPickUpContainer = styled.div`
  padding: 10px;
`

export const DeliveryTimeWrapper = styled.div`
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${props => props.theme.rtl && css`
    margin-left: 15px;
    margin-right: 0;
  `}
`

export const TimeBlock = styled.div`
  display: flex;
  
  > select {
    margin: 0 5px;
    border: 1px dashed ${props => props.theme.colors.lightGray};
    outline: none;
    color: ${props => props.theme?.colors.headingColor};
  }
`
