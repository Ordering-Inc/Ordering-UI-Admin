import React from 'react'
import styled, { css } from 'styled-components'

export const AccordionSection = styled.div`
`

const AccordionStyled = styled.div`
  cursor: pointer;
  transition: background-color 0.6s ease;

  .rotate {
    transform: rotate(180deg);
  }

  .accordion__icon {
    margin-left: auto;
    transition: transform 0.6s ease;
    ${props => props.theme?.rtl && css`
      margin-right: auto;
      margin-left: initial;
    `}
  }

  @media (min-width: 411px){
    flex-direction: row;
  }

`

export const Accordion = (props) => {
  const style = {}
  return (
    <AccordionStyled
      {...props}
      style={style}
    >
      {props.children}
    </AccordionStyled>
  )
}

export const AccordionItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 0;

  > div {
    display: flex;
    align-items: center;

    span {
      font-size: 14px;
      font-weight: 600;
      margin: 0 12px;
    }
  }

  ${({ isProduct }) => isProduct && css`
    > div {
      span {
        font-weight: 400;
      }
    }
  `}

  ${props => props.theme?.rtl ? css`
    margin-right: ${({ margin }) => `${margin}px` || '0px'};
  ` : css`
    margin-left: ${({ margin }) => `${margin}px` || '0px'};
  `}
`

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: max-height 0.6s ease;
  width: 100%;
`
export const CheckboxWrapper = styled.div`
  cursor: pointer;
  svg {
    font-size: 18px;
    color: ${props => props.theme.colors.disabled};

    ${({ active }) => active && css`
      color: ${props => props.theme.colors.primary};
    `}
  }
`
