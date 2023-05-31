import type {Meta, StoryObj} from '@storybook/react';

import {Button} from './Button';
import {Task} from "../Task";
import {TaskType} from "../Todolist";
import {action} from "@storybook/addon-actions";
import {EditableSpan} from "../EditableSpan";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof EditableSpan> = {
    title: 'TODOLIST/EditableSpan',
    component: EditableSpan,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        value: {
            description: "Start value empty string. Set start value"
        },
        onChange: {
            description: "Set new value"
        }
    },
    args: {
        onChange: action("Change value editable span"),
        value: "HTML",
    }
};
//argTypes функция которая позволяет с нашими пропсами и аргументами ограничивать их
//argTypes дает доп информацию о пропсах

export default meta;
type Story = StoryObj<typeof EditableSpan>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const EditableSpanStory: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {

    }
};




























































