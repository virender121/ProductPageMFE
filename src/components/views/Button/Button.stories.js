import React from 'react'
import Button from './Button';



export default {
    title: 'Component/Button',
    parameters: {
        component: Button,
        componentSubtitle:'we make this for giving button to another component where we want',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Button {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Button'
}