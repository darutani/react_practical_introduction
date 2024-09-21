import {render, screen, waitFor} from "@testing-library/react";
import HookThemeButton from "../chapter7/HookThemeButton";
import MyThemeProvider from "../chapter7/MyThemeProvider";
import userEvent from "@testing-library/user-event";

test('HookThemeButton Test', async () => {
    const ev = userEvent.setup();
    render(<HookThemeButton />, { wrapper: MyThemeProvider });
    const btn = screen.getByRole('button');
    ev.click(btn);
    await waitFor(() => expect(btn).toHaveTextContent('dark'));
});