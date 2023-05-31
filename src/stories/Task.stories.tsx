import type {Meta, StoryObj} from '@storybook/react';

import {Button} from './Button';
import {Task} from "../Task";
import {TaskType} from "../Todolist";
import {action} from "@storybook/addon-actions";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Task> = {
    title: 'TODOLIST/Task',
    component: Task,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    args: {
        changeTaskStatus: action("changeTaskStatus"),
        changeTaskTitle: action("changeTaskTitle"),
        removeTask: action("removeTask"),
        task: {id: "h697", isDone: false, title: "Js"},
        todolistId: "dgdrg"
    }

};
//argTypes функция которая позволяет с нашими пропсами и аргументами ограничивать их

export default meta;
type Story = StoryObj<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const TaskIsNotDone: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {

    }
};

export const TaskIsDone: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        task: {id: "h23", isDone: true, title: "Js"},
    }
};