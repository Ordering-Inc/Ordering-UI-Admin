import styled, { css } from 'styled-components'

export const WrapperNoneOrders = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 10px;

    img {
        width: 250px;
    }

    ${({ small }) => small && css`
        img {
            width: 150px;
        }
    `}    
`
export const OrderStatusTitle = styled.p`
    display: flex;
    align-items: center;
    font-size: 20px;
    color: ${({ theme }) => theme?.colors?.textBlackContrast || '#000'};
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 500;
    padding: 0 5px;

    .rotate {
        transform: rotate(-90deg);
    }
    .collapse_icon {
        transition: transform 0.3s ease;
        padding: 5px;
        cursor: pointer;
        border-radius: 5px;
        &:hover {
            background: #eee;
        }
    }
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
    margin-bottom: 20px;
    padding: 19px 10px;
    box-shadow: 0px 0px 3px #00000029;
    border-radius: 6px;
    ${({ small }) => small && css`
      flex-direction: column;
      margin-bottom: 0px;
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
export const WrapperOrderListContent = styled.div`
    padding: 5px;
    margin-bottom: 40px;
    overflow: auto;
    transition: max-height 0.3s ease;

    ${({ small }) => small && css`
        overflow: initial;
        max-height: initial;
    `}
`
