import styled from 'styled-components'

export const Container = styled.div`
`

export const OwnerItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.headingColor};
  border-bottom: 1px solid #E9ECEF;
  padding: 15px 0;

  span {
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

export const WrapperOwnerSelector = styled(OwnerItem)`
  border-bottom: none;

  button {
    border-radius: 8px;
    height: 44px;
  }

  > div:first-child {
    width: calc(100% - 80px);
    background: #F8F9FA;
    border: none;
    .list {
      > div {
        max-height: 300px;
      }
    }

    > div:first-child {
      padding-top: 5px;
      padding-bottom: 5px;
    }
  }
`
