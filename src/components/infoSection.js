import React from 'react'
import { Button } from './Button'
import styled from 'styled-components'

const Section = styled.div`
width: 100%;
height: 100%;
padding: 4rem, 0rem;
`
const Cointainer = styled.div`
padding: 3rem, calc((100vw - 1300px)/ 2);
display: grid;
grid-template-columns: 1fr, 1fr;
grid-template-rows: 800px;
  @media screen and (max-width: 769px) {
    grid-template-columns: 1fr;
  }
`
const ColumnLeft = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 1rem, 2rem;
line-height: 1.4;
order: ${({reverse}) => (reverse ? '2' : '1')};
h1 {
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 6vw, 2rem);
}
p{
  margin-top: 2rem;
}
`
const ColumnRigth = styled.div`
padding: 1rem, 2rem;
order: ${({reverse}) => (reverse ? '1' : '2')};
display: flex;
justify-content: center;
align-items: center;
  @media screen and (max-width: 769px) {
    order: ${({reverse}) => (reverse ? '2' : '1')};
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and   (max-width: 768px) {
    width: 90%;
    height: 90%;
  }


`


const infoSection = ({
  heading,
  paraOne,
  paraTwo,
  image,
  reverse,
  delay,
  buttonLabel
}) => {
  return (
    <Section>
        <Cointainer>
            <ColumnLeft>
                <h1>{heading}</h1>
                <p>{paraOne}</p>
                <p>{paraTwo}</p>
                <Button to='/home' primary={true}>
                    {buttonLabel}
                </Button>
            </ColumnLeft>
            <ColumnRigth reverse={reverse}>
              <img src={image} alt='home'/>                        
            </ColumnRigth>
        </Cointainer>
    </Section>

  )
}

export default infoSection