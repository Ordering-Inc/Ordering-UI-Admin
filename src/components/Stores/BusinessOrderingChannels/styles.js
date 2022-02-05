import styled from 'styled-components'

export const BusinessOrderingChannelsContainer = styled.div`
  box-sizing: border-box;
  @media (min-width: 576px) {
    padding: 20px;
  }
`
export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors?.headingColor};
  margin-bottom: 30px;
`

export const ToggleItemWrapper = styled.div`
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid #E9ECEF;
  font-weight: 500;
`

export const AccordionTitle = styled.div`
  text-transform: capitalize;
`

export const BusinessCustomSlugContainer = styled.div`
  padding: 10px;

  button {
    border-radius: 7.6px;
    height: 44px;
  }
`

export const FormControl = styled.div`
  margin-bottom: 20px;

  input[type=text] {
    border: 1px solid #DEE2E6;
    box-sizing: border-box;
    border-radius: 7.6px;
    height: 44px;
    width: 100%;
  }
`

export const Label = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 14px;
  color: ${props => props.theme?.colors.headingColor};
`
