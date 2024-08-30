import {useSearchParams} from "react-router-dom";

export default function BigQueryPage() {
    const [params, setParams] = useSearchParams(
        { isbn: '978-4-8156-0182-9' }
    );
    return <p>ISBNコード「{params.get('isbn')}」のページです。</p>;
}
