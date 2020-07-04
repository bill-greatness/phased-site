import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import laptop from '../assets/laptop.png'
import welcome from '../assets/welcome-slider-3.webp'

export default function Slides(){
  return(
    <AwesomeSlider
      bullets={false}
      fillParent={true}
      >
        <div>
            <img src={laptop} alt='Laptop Displaying  Data'/>
        </div>

        <div>
            <img src={welcome} alt='A welcome '/>
        </div>
    </AwesomeSlider>
  )
}
