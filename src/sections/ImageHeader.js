import React from 'react';
import { Header, Image } from 'semantic-ui-react'

export default function ImgHeader(props) {
    return(
      <>
        <Image src={props.image} size='mini' centered/>
        <Header as='h2' inverted textAlign='center'>
                {props.content}
                <Header.Subheader>
                {props.subcontent}
                </Header.Subheader>
        </Header>
        </>
    )
}
