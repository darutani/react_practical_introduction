import MyButton from "./MyButton";
import { userEvent, within } from '@storybook/testing-library';
import { expect } from "@storybook/jest";

export default {
    title: 'MyApp/MyButton',
    component: MyButton,
    argTypes: {
        primary: {
            type: 'boolean',
            description: 'Primaryカラーを有効にするかどうか',
        },
        backgroundColor: {
            type: 'string',
            description: '背景色',
        },
        size: {
            type: {
                name: 'enum',
                value: ['small', 'medium', 'large'],
            },
            control: { type: 'select' },
            description: 'ボタンの大きさ',
        },
        label: {
            type: 'string',
            description: 'ボタンのキャプション',
        },
        onClick: {
            type: 'function',
            description: 'clickハンドラー',
        },
        handleClick: { action: 'clicked' }
    },
    parameters: {
    //     backgrounds: {
    //         values: [
    //             { name: 'ghostwhite', value: '#f8f8ff' },
    //             { name: 'aquamarine', value: '#7fffd4' },
    //             { name: 'coral', value: '#ff7f50' },
    //         ],
    //     }
        layout: 'centered',
    },
    // decorators: [
    //     Story => (
    //         <div style={{
    //             height: 150,
    //             display: 'flex',
    //学校等教育機関             justifyContent: 'center',
    //             alignItems: 'center',
    //             backgroundColor: '#ccc',
    //         }}>
    //             <Story />
    //         </div>
    //     ),
    // ],
    // tags: ['autodocs'],
};

export const Index = {
    // render: () => <MyButton primary size="medium" label="ボタン"
    //     onClick={() => console.log('Hello, Storybook!!')}
    // />

    args: {
        primary: true,
        size: 'medium',
        label: 'ボタン',
        // onClick: () => console.log('Hello, Storybook!!'),
    },
    play: async ({ args, canvasElement }) => {
        const canvas = within(canvasElement);
        const button = canvas.getByRole('button');
        userEvent.click(button);
        userEvent.click(button);
        expect(args.onClick).toHaveBeenCalledTimes(2);
    },
    parameters: {
        backgrounds: {
            values: [
                { name: 'ghostwhite', value: '#f8f8ff' },
                { name: 'aquamarine', value: '#7fffd4' },
                { name: 'coral', value: '#ff7f50' },
            ],
        },
    },
};

export const White = {
    // render: () => <MyButton size="small" label="ボタン"
    //     backgroundColor="#fff"
    // />

    args: {
        size: 'small',
        label: 'ボタン',
        backgroundColor: '#fff',
        // handleClick: action('clicked'),
        // handleClick: e => {
        //     action('clicked')(e, new Date());
        // }
    }
};

export const Yellow = {
    args: {
        ...White.args,
        backgroundColor: 'lightyellow',
    }
}