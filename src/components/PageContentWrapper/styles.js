import styled from 'styled-components'

export const Container = styled.div`
  flex: 1 1 0%;
  padding: 0;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`

export const ChildrenWrapper = styled.div`
  width: 100%;
`

export const MemoComponents = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 101;
`
export const MemoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
`

export const DeliveryDashboardWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.5s ease 0s;
  width: 100%;
  height: 100%;
  &.show {
    opacity: 1;
    z-index: 102;
  }
  &.hide {
    opacity: 0;
    z-index: 0;
  }
`
export const DriversDashboardWrapper = styled(DeliveryDashboardWrapper)`
  
`
