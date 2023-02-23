import React from 'react'
import Card from './Card';



export default {
    title: 'Component/Card',
    parameters: {
        component: Card,
        componentSubtitle:'this component is made for giving boxes for each items that we use',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Card {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Card'
}