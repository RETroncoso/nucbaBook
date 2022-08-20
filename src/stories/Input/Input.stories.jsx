import React from "react";
import { Input } from "./Input";

export default {
    title: "Ejemplo/Input",
    component: Input,
    argTypes: {
        inputType:{control: "select", options:[
            "button",
            "checkbox",
            "color",
            "date",
            "email",
            "file",
            "number",
            "password",
            "radio",
            "range",
            "submit",
            "tel",
            "text",
            "url",
          ]}
    }
}

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args={
    
}