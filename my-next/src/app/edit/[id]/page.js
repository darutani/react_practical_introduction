import BookDetails from "@/component/BookDetails";
import {getBookById, getReviewById} from "@/lib/getter";
import FormEdit from "@/component/FormEdit";

export default async function EditPage({ params }) {
    const book = await getBookById(params.id);
    const review = await getReviewById(params.id);
    const read = (review?.read || new Date()).toLocaleDateString('sv-SE');

    return (
        <>
            <BookDetails book={book} />
            <hr />
            <FormEdit src={{ id: book.id, read, memo: review?.memo }}/>
        </>
    );
}