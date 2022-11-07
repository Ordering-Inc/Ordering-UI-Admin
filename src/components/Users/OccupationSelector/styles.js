import styled from 'styled-components'

export const SelectWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;

  .select-wrapper {
    .select {
      border: 1px solid ${props => props.theme.colors.borderColor};
      padding: 6px 0;
      font-size: 14px;
    }
  }
`
export const Option = styled.div`
  font-size: 14px;
  padding: 4px 0;
`
