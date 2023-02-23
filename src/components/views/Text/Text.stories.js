import React from 'react'
import Text from './Text';



export default {
    title: 'Component/Text',
    parameters: {
        component: Text,
        componentSubtitle:'this component we create for writting element that we need',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Text {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Text'
}