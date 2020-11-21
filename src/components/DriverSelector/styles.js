import styled, { css } from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 10px 0px;

  img {
    width: 45px;
    border-radius: 5px;
  }

  ${({ small }) => small && css`
    column-gap: 5px;
    padding: 5px 0px;
    margin: 0px -5px;

    img {
      width: 25px;
    }
  `}

  @media (max-width: 576px) {
    padding: 5px 0;
  }

`

export const OptionContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const DriverNameContainer = styled.div`
  font-size: 12px;
  line-height: 1.3;
  color: #263238;

  ${({ small }) => small && css`
    font-size: 8px;
  `}
`

export const DriverName = styled.div`
  font-size: 16px;
  line-height: 1.3;
  color: #263238;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 150px;

  ${({ small }) => small && css`
    font-size: 11px;
  `}

  @media (max-width: 576px) {
    max-width: 90px;
  }
`

export const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: #000000;

  @media (max-width: 1200px) {
    display: none;
  }
`
