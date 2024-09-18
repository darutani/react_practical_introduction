import {render, screen} from "@testing-library/react";
import QueryPre from "../chapter6/QueryPre";

describe('QueryPre', () => {
    test('fetch関数を伴うテスト', async () => {
        render(<QueryPre />);
        const img = await screen.findByRole('img', {}, {timeout: 3000});
        expect(img).toHaveAttribute('alt', 'Clouds');
    });
});
