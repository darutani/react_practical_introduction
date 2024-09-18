import { render, screen } from "@testing-library/react";
import {books} from "../chapter3/books";
import ForNest from "../chapter3/ForNest";

jest.mock('../chapter3/ForItem', () => {
    return function ForItemMock({ book }) {
        return (
            <>
                <dt>{book.title}</dt>
                <dd>{book.summary.substring(0, 10)}...</dd>
            </>
        );
    };
});

test('ForItem Test', () => {
    const { debug, baseElement } = render(<ForNest src={books} />);
    const dt = screen.getAllByRole('term');
    debug(baseElement);
    expect(dt).toHaveLength(5);
    expect(dt[0]).toHaveTextContent('Vue.js');
});
