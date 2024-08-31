import {useParams} from "react-router-dom";
import MyHeader from "./MyHeader";
import {useState} from "react";
import books from "../chapter7/books";

export default function BookPage() {
    const { isbn = '978-4-8156-0182-9' } = useParams();
    const {title, summary} = books.find(b => isbn === b.isbn);

    return (
        <>
            <MyHeader title={title} keywords={title} description={summary} />
            <p>ISBNコード「{isbn}」のページです。</p>
        </>
    );
}