import React from 'react';
import {Header} from 'semantic-ui-react'
import TextLoop from "react-text-loop";

export default function FourthSlide(){

  return (
    <div className='slide-four'>
      <Header as='h1' inverted textAlign='center' className='w-slides'>
          <TextLoop adjustingSpeed={1200} children={["Education", "Employement"]} />
          <Header.Subheader>
            School & Human Resource Management Systems
          </Header.Subheader>
      </Header>
    </div>
  );
}
