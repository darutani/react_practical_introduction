import LinkedBookDetails from "@/component/LinkedBookDetails";
import {getBookByKeyword} from "@/lib/getter";

export default async function BookResult({ params: {keyword = 'React'} }) {
    const books = await getBookByKeyword(keyword)

    return (
        <>
            {books.map((b, i) => (
                <LinkedBookDetails index={i + 1} book={b} key={b.id} />
            ))}
        </>
    );
}