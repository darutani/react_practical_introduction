import React from "react";

export function ForItem({ book }) {
    return (
        <>
            <dt>
                <a href={`https;//wings.msn.to/books/${book.isbn}/${book.isbn}.jpeg`}>
                    {book.title} ({book.price}円)
                </a>
            </dt>
            <dd>{book.summary}</dd>
        </>
    );
}