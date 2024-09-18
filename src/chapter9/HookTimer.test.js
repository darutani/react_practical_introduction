import {act, screen, render} from "@testing-library/react";
import HookTimer from "../chapter7/HookTimer";

describe('HookTimer', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('setInterVal', async () => {
        const { debug } = render(<HookTimer init={10} />);
        act(() => {
            jest.advanceTimersByTime(1000);
        });
        const counter = screen.getByText(/現在のカウント/);
        debug(counter);
        expect(counter).toHaveTextContent('9');
    });
});
