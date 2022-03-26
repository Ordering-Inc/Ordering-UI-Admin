import React from 'react'
import styled from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 5px 10px;

  img {
    width: 30px;
  }
`

export const PlaceholderTitle = styled(Option)`
  padding: 0px;
  font-size: 14px;
`

export const OptionContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const OptionName = styled.div`
  color: #263238;
  font-size: 14px;
  line-height: 1.3;
`

export const WrapperBusinessImage = styled.div`
  width: 30px;
  height: 30px;
  border: 1px solid #E3E3E3;
  border-radius: 7px;

  svg {
    width: 100%;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 50%;
  }
`

const BusinessImageStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  border-radius: 10px;
`
export const BusinessImage = (props) => {
  return (
    <BusinessImageStyled
      {...props}
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      {props.children}
    </BusinessImageStyled>
  )
}
