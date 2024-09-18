import userEvent from "@testing-library/user-event";
import {render, screen, waitFor} from "@testing-library/react";
import {StateBasic} from "../chapter3/StateBasic";

test('StateBasic Test', async () => {
    const ev = userEvent.setup();
    render(<StateBasic init={0} />);
    const btn = screen.getAllByRole('button', { name: 'カウント' });
    const cnt = screen.getByText(/クリック/);
    ev.click(btn);
    await waitFor(() => { expect(cnt).toHaveTextContent('1回'); });
});