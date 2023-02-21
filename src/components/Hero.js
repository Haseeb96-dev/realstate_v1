import React, {useState, useRef, useEffect} from "react";
import styled,{css} from "styled-components";
import { Button } from "./Button";
import {IoMdArrowRoundForward} from 'react-icons/io';
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

const HeroSection = styled.section`
  height: 100vh ;
  max-height: 1100px ;
  position: relative ;
  overflow: hidden ;
`

const HeroWraper = styled.div`
  width: 100% ;
  height:100% ;
  display: flex ;
  align-items: center ;
  justify-content: center;
  position: relative ;
  overflow: hidden ;
`
const HeroSlide = styled.div`
  width: 100%;
  height: 100%;
  z-index:10;
`
const HeroSlider = styled.div`
  position: absolute;
  top:0 ;
  left: 0;
  width: 100%;
  height: 100%;
  display:flex ;
  justify-content:center ;
  align-items:center ;

    &::before {
      content:'';
      position: absolute ;
      z-index: 2;
      width: 100%;
      height: 100vh;
      bottom: 0;
      left: 0;
      overflow: hidden;
      opacity: 0.4;
      background: linear-gradient(
                      0deg,
                      rgba(0, 0, 0, 0.2) 0%,
                      rgba(0, 0, 0, 0.2) 50%,
                      rgba(0, 0, 0, 0.6) 100%
                  );
    }
`
const HeroImage = styled.img`
  position:absolute;
  top: 0;
  left:0;
  width: 100%;
  height: 100%;
  object-fit: cover ;
`
const HeroContent = styled.div`
  position: absolute ;
  z-index: 10 ;
  display:flex ;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;
  h1{
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 400 ;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    text-align: left;
    margin-left: 0.8rem;       
  }
  p{
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
    margin-left: 1rem;
  }

`
const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`

const SliderButtons = styled.div`
  position: absolute ;
  bottom: 50px;
  right: 50px;
  display: flex;
  z-index:10;
`

const arrowButtons = css`
  width: 50px;
  height: 50px ;
  color: #fff;
  cursor: pointer;
  background: #000d1a ;
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;
  &:hover{
    background: #CD853F ;
    transform: scale(1.05) ;
  }
`;

const PrevArrow = styled(IoArrowBack)`
${arrowButtons}
`

const NextArrow = styled(IoArrowForward)`
${arrowButtons}
`

const Hero = ({slides}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = slides.length
    const timeOut = useRef(null)

    useEffect(() => {
        const nextSlide = () => {
            setCurrentSlide(currentSlide => currentSlide === length - 1 ? 0 : currentSlide + 1)
        }
        timeOut.current = setTimeout(nextSlide,2000)
        return function () {
            if (timeOut.current) {
                clearTimeout(timeOut.current)
            }
        }
    },[currentSlide, length])


    const nextSlide = () => {
        if (timeOut.current) {
            clearTimeout(timeOut.current)
        }
        setCurrentSlide(currentSlide === length -1 ? 0 : currentSlide + 1)
    }

    const prevSlide= () => {
        if (timeOut.current) {
            clearTimeout(timeOut.current)
        }
        setCurrentSlide(currentSlide === 0 ? length -1 : currentSlide - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
      <HeroSection>
          <HeroWraper>
              {slides.map((slides,index) => {
                  return (
                      <HeroSlide key={index}>
                          {index === currentSlide && 
                          (<HeroSlider>
                              <HeroImage src={slides.image} alt={slides.alt} />
                              <HeroContent>
                                      <h1>{slides.title}</h1>
                                      <p>{slides.price}</p>
                                      <Button to={slides.path} primary={true} style={{maxWidth: '160px'}}>
                                          {slides.lable}
                                      <Arrow/>
                                  </Button>
                              </HeroContent>
                          </HeroSlider>)                            
                          }
                          
                      </HeroSlide>
                  )
              })}
          <SliderButtons>
              <PrevArrow onClick={() => prevSlide()}/>
              <NextArrow onClick={() => nextSlide()}/>
          </SliderButtons>
          </HeroWraper>
      </HeroSection>
   
    );
}
export default Hero;

