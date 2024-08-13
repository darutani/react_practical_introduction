import MyButton from "./MyButton";
import React from 'react';

export default {
    title: 'MyApp/MyButton',
    component: MyButton,
};

export const Index = {
    // render: () => <MyButton primary size="medium" label="ボタン"
    //     onClick={() => console.log('Hello, Storybook!!')}
    // />

    args: {
        primary: true,
        size: 'medium',
        label: 'ボタン',
        onClick: () => console.log('Hello, Storybook!!'),
    }
};

export const White = {
    // render: () => <MyButton size="small" label="ボタン"
    //     backgroundColor="#fff"
    // />

    args: {
        size: 'small',
        label: 'ボタン',
        backgroundColor: '#fff',
    }
};

export const Yellow = {
    args: {
        ...White.args,
        backgroundColor: 'lightyellow',
    }
}