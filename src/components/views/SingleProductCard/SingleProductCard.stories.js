import React from 'react'
import SingleProductCard from './SingleProductCard';



export default {
    title: 'Component/SingleProductCard',
    parameters: {
        component: SingleProductCard,
        componentSubtitle:'this component i make for adding my prrodduct items in it',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <SingleProductCard {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'SingleProductCard'
}