import styled from 'styled-components'

export const DriversContainer = styled.div`
  width: 100%;
  transition: all 0.5s;
  padding: 0 20px 20px 20px;
  box-sizing: border-box;
  margin-top: 60px;

  @media (min-width: 760px) {
    margin-top: 0px;
    padding: 20px;
  }

  @media print {
    display: none;
  }
`
export const DriversContent = styled.div`
`

export const OrderNotification = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  p {
    text-align: center;
    font-size: 20px;
    margin: 0px;

    span {
      color: #182964;
      font-weight: 600;
    }
  }
  animation: fadeIn 200ms;

  @keyframes fadeIn {
    from {
      transform: scale(2);
    }
  
    to {
      transform: scale(1);
    }
  }
`
