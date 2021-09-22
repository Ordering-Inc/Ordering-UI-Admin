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

  svg {
    font-size: 20px;
    cursor: pointer;
  }
`

export const WrapperOwnerSelector = styled(OwnerItem)`
  border-bottom: none;

  > svg {
    color: ${props => props.theme.colors.primary};
  }

  > div:first-child {
    width: calc(100% - 50px);
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
