import {atom, selector} from "recoil";

export const counterAtom = atom({
    key: 'counterAtom',
    default: 0,
});

export const todoAtom = atom({
    key: 'todoAtom',
    default: [
        {
            id: 1,
            title: 'WINGS会議の資料作成',
            isDone: false,
        }
    ],
});

export const todoLastIdSelector = selector({
    key: 'todoLastIdSelector',
    get: ({get}) => {
        const todo = get(todoAtom);
        return todo.at(-1)?.id ?? 0;
    }
});