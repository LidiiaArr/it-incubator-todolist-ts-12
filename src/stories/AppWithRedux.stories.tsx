import type {Meta, StoryObj} from '@storybook/react';

import {action} from "@storybook/addon-actions";
import AppWithRedux from "../AppWithRedux";
import {Provider} from "react-redux";
import {store} from "../state/store";
import {ReduxStoreProviderDecoration} from "../state/reduxStoreProviderDecoration";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AppWithRedux> = {
    title: 'TODOLIST/AppWithRedux',
    component: AppWithRedux,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //     value: {
    //         description: "Start value empty string. Set start value"
    //     },
    //     onChange: {
    //         description: "Set new value"
    //     }
    // },
    // args: {
    //     onChange: action("Change value editable span"),
    //     value: "HTML",
    // },
    decorators: [ReduxStoreProviderDecoration]
};
//argTypes функция которая позволяет с нашими пропсами и аргументами ограничивать их
//argTypes дает доп информацию о пропсах

export default meta;
type Story = StoryObj<typeof AppWithRedux>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// export const AppWithReduxStory: Story = {
//     // More on args: https://storybook.js.org/docs/react/writing-stories/args
//     render: () => <Provider store={store}><AppWithRedux /></Provider>
// };
//тут дублирование кода
//поможет избежать дублирование кода HOC high order component
//хок берет компоненту и возвращает компоненту с новой функциональностью
//напишем хок который возьмет компоненту и вернет компоненту подключенную к редаксу

export const AppWithReduxStory: Story = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    render: () => <AppWithRedux />
};

























































