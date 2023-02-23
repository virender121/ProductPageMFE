import React from 'react'
import Header from './Header';



export default {
    title: 'Component/Header',
    parameters: {
        component: Header,
        componentSubtitle:'this is my header page and here i am showing some main content in it',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Header {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Header'
}