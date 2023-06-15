import styled from 'styled-components'

export const SelectWrapper = styled.div`
  margin: 50px 0 30px 0;

  > p {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    margin-top: 0;
    margin-bottom: 11px;
  }

  .select {
    width: 100%;
    background: ${props => props.theme.colors.secundary};
    border: none;
    font-size: 14px;

    > div:first-child {
      padding-top: 4px;
      padding-bottom: 4px;
    }
    .list {
      max-width: 100%;
    }
  }
`

export const Option = styled.div`
  > span {
    font-size: 14px;
    font-weight: 700;
  }
`
