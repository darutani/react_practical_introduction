import {useState, useTransition} from "react";
import commentList from './comments';
import books from './books.js';
import {BookDetails, CommentList} from "./HookTransitionChild";

export default function () {
    const [isbn, setIsbn] = useState('');
    const [comments, setComments] = useState([]);
    const [isPending, startTransition] = useTransition();

    const handleChange = e => {
        const isbn = e.target.value;
        setIsbn(isbn);
        startTransition(() => {
            setComments(commentList.filter(c => c.isbn === isbn))
        });
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
            <CommentList src={comments}/>
        </>
    );
}