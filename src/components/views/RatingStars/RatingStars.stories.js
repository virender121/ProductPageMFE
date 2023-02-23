import React from 'react'
import RatingStars from './RatingStars';



export default {
    title: 'Component/RatingStars',
    parameters: {
        component: RatingStars,
        componentSubtitle:'we make this forlder for giving feedback to each user on the basis of their performance',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <RatingStars {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'RatingStars'
}