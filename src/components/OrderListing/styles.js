import styled, { css } from 'styled-components'

export const NoneOrders = styled.p`
    color: ${({ theme }) => theme?.colors?.textBlackContrast || '#000'};
`
export const OrderStatusTitle = styled.p`
    font-size: 20px;
    color: ${({ theme }) => theme?.colors?.textBlackContrast || '#000'};
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 500;
`
export const SkeletonOrder = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    width: auto;
    margin: 0 auto;
`
export const SkeletonCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    padding: 5px 10px;
    box-shadow: 0px 0px 3px #00000029;
    ${({ small }) => small && css`
        flex-direction: column;
    `}
`
export const SkeletonCell = styled.div`
    display: flex;
    align-items: center;
    column-gap: 5px
`
export const SkeletonBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
export const SkeletonText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left
    ${props => props.theme?.rtl && css`
        text-align: right;
    `}
`
export const WrapPaginationControl = styled.div`
    display: flex;
    column-gap: 10px;
`
export const WrapperOrderList = styled.div`
    overflow-x: auto;
    overflow-y: hidden;
    padding: 5px;
`
