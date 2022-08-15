import React from 'react'
import { SlideData } from './SlideData'
import {FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa'
import { useState } from 'react'
const ImageSlider = ({slides}) => {

     const length=slides.length
     
     const[current,setCurrent]=useState(0)

    const prevSlide=()=>{ 
    setCurrent(current===0 ? length-1: current-1)
         
    }
    const nextSlide=()=>{
    setCurrent(current===length-1 ? 0 : current+1)
    }
    if(!Array.isArray(slides) || slides.length<= 0){
      return null
  }
  return (
    <div className='image-container'>
        {SlideData.map((slide,index)=>{
             
             return(
              <>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            <div className={index===current ? 'slide-active' : 'slide'}>
              {current===index &&
               ( <img src={slide.image} alt="travel" className='image' />)
              }
            </div>
              </>  
             )

        })}
    </div>
  )
}

export default ImageSlider