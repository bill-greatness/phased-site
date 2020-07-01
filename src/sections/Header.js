import React from 'react';
import { Header } from 'semantic-ui-react'

export default function Title(props) {
    return(
        <Header as='h2' centered className='headers'>
                {props.title}
                <Header.Subheader>
                {props.subtitle}
                </Header.Subheader>
        </Header>
    )
}