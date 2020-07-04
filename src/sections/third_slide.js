import React from 'react';
import {Header} from 'semantic-ui-react'
import TextLoop from "react-text-loop";

export default function ThirdSlide(){

  return (
    <div className='slide-three'>
      <Header as='h1' inverted textAlign='center' className='w-slides'>
          <TextLoop  children={["Agriculture", "Finance", "Travelling"]} />
          <Header.Subheader>
            Poultry Systems, Banking Apps, Booking Apps
          </Header.Subheader>
      </Header>
    </div>
  );
}
