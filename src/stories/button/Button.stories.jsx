import React from 'react';

import { Button } from './Button';

export default {
  title: 'Ejemplo/Button',
  component: Button,
  argTypes: {
    buttonType: {control: "select", options:["primary", "secondary", "utils"]}
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: "primary",
  label: 'Primario',
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: "secondary",
  label: 'Secundario',
};

export const Utils = Template.bind({});
Utils.args = {
  buttonType: "utils",
  label: 'Utils',
};