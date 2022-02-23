import styled from 'styled-components'

export const Container = styled.div`
`

export const BusinessVideoPathWrapper = styled.div`
  border-bottom: 1px solid #E9ECEF;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme.colors.headingColor};
  
  span {
    max-width: calc(100% - 40px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
  }
  p {
    color: ${props => props.theme.colors.danger};
    margin: 0px;
    font-size: 14px;
    cursor: pointer;
    user-select: none;
  }
`

export const BusinessAddVideoWrapper = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: calc(100% - 80px);
  }

  button {
    border-radius: 8px;
    height: 44px;
  }
`
