import React from 'react'
import styled, { css } from 'styled-components'

export const AccordionSection = styled.div`
  ${({ isAccept }) => isAccept && css`
    background: ${props => props.theme.colors.borderColor};
  `}
`

const AccordionStyled = styled.div`
  cursor: pointer;
  transition: background-color 0.3s ease;

  .rotate {
    transform: rotate(-90deg);
  }

  .accordion__icon {
    margin-right: 10px;
    transition: transform 0.3s ease;
    ${props => props.theme?.rtl && css`
      margin-left: 10px;
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
  padding: 15px 10px;

  > div {
    display: flex;
    align-items: center;
    img {
      opacity: 0;
    }
    svg,
    img {
      ${props => props.theme?.rtl ? css`
        margin-left: 10px;
      ` : css`
        margin-right: 10px;
      `}
    }

    span {
      font-size: 14px;
      font-weight: 600;
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
  
  border-radius: 8px;
  &:hover {
    background-color: ${props => props.theme.colors.secundary};

    > div {
      img {
        opacity: 1;
      }
    }
  }

  ${({ active }) => active && css`
    background-color: ${props => props.theme.colors.lightPrimary} !important;
    border: 1px solid ${props => props.theme.colors.primary};
  `}
`

export const AccordionContent = styled.div`
  overflow: hidden;
  transition: max-height 0.6s ease;
  width: 100%;
`
