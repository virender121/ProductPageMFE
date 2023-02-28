import React from 'react'
import Navbar from './Navbar';



export default {
    title: 'Component/Navbar',
    parameters: {
        component: Navbar,
        componentSubtitle:'we add this navbar for showing navigating icons so that we can navigate to other page',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Navbar {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Navbar'
}