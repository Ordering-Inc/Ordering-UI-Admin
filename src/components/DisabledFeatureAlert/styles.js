import styled from 'styled-components'

export const DisabledFeatureAlertContainer = styled.div`
  position: fixed;
  min-width: 325px;
  padding: 7px;
  z-index: 1000;
  top: 50px;
  left: ${props => (props?.containerWidth ? `calc(50vw - ${props?.containerWidth / 2}px)` : '50vw')};
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 5px;
  background-color: ${props => props.theme.colors.lightPrimary};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`
export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
export const CommentContainer = styled.div`
  margin-left: 7px;
  margin-right: 7px;
`
export const Comment = styled.div`
  font-size: 12px;
`
export const MoreInfo = styled.a`
  font-size: 12px;
  cursor: pointer;
  text-decoration: underline;
  color: ${props => props.theme.colors.primary};
`
