import React from 'react';
import {Header} from 'semantic-ui-react'
import TextLoop from "react-text-loop";

export default function FirstSlide(){

  return (
    <div className='slide-one'>
      <Header as='h1' inverted textAlign='center' className='w-slides'>
          <TextLoop adjustingSpeed={1200} children={["Development", "Creative Solutions", "Marketing"]} />
          <Header.Subheader>
            <TextLoop adjustingSpeed={600} children={["Android, Websites, and IOS Applications", "Videography & Photography", "Tranforming Your Business",]} />
          </Header.Subheader>
      </Header>
    </div>
  );
}
