import styled from 'styled-components'

export const WrapperExportButton = styled.div`
  position: relative;
`
export const PopoverContainer = styled.div`
  position: absolute;
  right: 0px;
  margin-top: 5px;
  padding: 5px 0;
  background: ${props => props.theme.colors?.backgroundPage || '#FFF'};
  box-shadow: 0 6px 12px rgba(0,0,0,.175);
`
export const Item = styled.div`
  padding: 3px 20px;
  white-space: nowrap;
  cursor: pointer;
  &:hover {
    background-color: #F2F2F2;
  }
`
