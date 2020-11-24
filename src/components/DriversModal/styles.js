import styled from 'styled-components'
export const WrapperDriverAvailable = styled.div`
  padding: 15px;

  button {
    width: 100%;
    padding: 2px 15px;
    display: flex;
    column-gap: 10px;
    align-items: center;
    justify-content: center;

    svg {
      color: #fff;
    }
  }
`
export const WrapperSkeleton = styled.div`
  display: flex;
  flex-direction: column;
`
export const SkeletonCard = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  padding: 15px;
  box-sizing: border-box;
  column-gap: 10px;

  > div {
    &: last-child {
      flex: 1;
    }
  }
`
export const SkeletonCell = styled.div`
  display: flex;
  flex-direction: column;
`
export const SkeletonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
