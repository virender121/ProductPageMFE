import React from 'react'
import MainNav from './MainNav';



export default {
    title: 'Component/MainNav',
    parameters: {
        component: MainNav,
        componentSubtitle:'this component we are creating for showing our home ,aboutpage  and cookies page',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <MainNav {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'MainNav'
}