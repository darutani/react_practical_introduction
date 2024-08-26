import {useDeferredValue, useState, useTransition} from "react";
import commentList from './comments';
import books from './books.js';
import {BookDetails, CommentList} from "./HookTransitionChild";

export default function HookDeferredTransition() {
    const [isbn, setIsbn] = useState('');
    const [comments, setComments] = useState([]);
    const deferredComments = useDeferredValue(comments);
    const isPending = comments !== deferredComments;

    const handleChange = e => {
        const isbn = e.target.value;
        setIsbn(isbn);
        setComments(commentList.filter(c => c.isbn === isbn));
    };

    return (
        <>
            <select onChange={handleChange}>
                <option value=''>選択してください</option>
                {books.map(book => (
                    <option key={book.isbn} value={book.isbn}>
                        {book.title}
                    </option>
                ))}
            </select>
            <BookDetails isbn={isbn} />
            <hr />
            <CommentList src={comments} isPending={isPending}/>
        </>
    );
}