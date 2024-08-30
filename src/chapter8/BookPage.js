import {useParams} from "react-router-dom";

export default function BookPage() {
    const params = useParams();
    return <p>ISBNコード「{params.isbn}」のページです。</p>
}