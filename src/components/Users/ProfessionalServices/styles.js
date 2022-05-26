import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  padding: 35px 20px;
  width: 100%;
  position: relative;
  > h1 {
    font-size: 20px;
    font-weight: 700;
    margin: 0px;
  }
`

export const TreeNodeWrapper = styled.div`
  margin-top: 30px;
  `

export const Divider = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.borderColor};
`

export const SkeletonItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`

export const SkeletonCheckWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const SearchWrapper = styled.div`
  margin-top: 20px;
`
