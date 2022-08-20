import React from 'react'

import { Pill } from './Pill'

export default {
    title: "Ejemplo/Pill",
    component: Pill,
    argTypes: {
        status: {control: "select", options: ["correct", "warning", "alert"]}
    }
};

const Template = (args) => <Pill {...args} />

export const Default = Template.bind({})
Default.args = {
    status: "correct"
}