import books from "./books";
import {memo} from "react";

const sleep = delay => {
    const start = Date.now();
    while (Date.now() - start < delay);
};

export function BookDetails ({ isbn }) {
    const book = books.find(b => b.isbn === isbn);
    return (
        <ul>
            <li>ISBN: {book?.isbn}</li>
            <li>署名: {book?.title}</li>
            <li>価格: {book?.price}</li>
            <li>概要: {book?.summary}</li>
            <li>配布サンプル: {(book?.download) ? 'あり' : 'なし'}</li>
        </ul>
    );
}

export const CommentList = memo(function ({src, isPending}) {
    if (isPending) return <p>Now Loading...</p>;
    return (
        <ol>
            {src.map(c => <CommentItem key={c.id} src={c}/>)}
        </ol>
    );
});

function CommentItem({ src }) {
    sleep(1000);
    return <li>{src.body} ({src.rank})</li>;
}
