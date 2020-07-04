import React from 'react';
import {Header} from 'semantic-ui-react'
import TextLoop from "react-text-loop";

export default function SecondSlide(){

  return (
    <div className='slide-two'>
        <Header as='h1' inverted textAlign='center' className='w-slides'>
          <TextLoop adjustingSpeed={1200} children={["We Provide You The Best", "We are Time Conscious", "We Deliver Our Promises"]} />
          <Header.Subheader>
            <TextLoop adjustingSpeed={600} children={["Systems That will Blow You Away", "Our Time Estimations are Super Cool", "Test our Works for yourself"]} />
          </Header.Subheader>
      </Header>
    </div>
  );
}
