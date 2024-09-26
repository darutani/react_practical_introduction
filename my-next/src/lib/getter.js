import prisma from "./prisma";

export async function getAllReviews() {
    return await prisma.reviews.findMany({
        orderBy: {
            read: 'desc'
        }
    });
}

export function createBook(book) {
    const authors = book.volumeInfo.authors;
    const price = book.saleInfo.listPrice;
    const img = book.volumeInfo.imageLinks;

    return {
        id: book.id,
        title: book.volumeInfo.title,
        author: authors ? authors.join() : '',
        price: price ? price.amount : 0,
        publisher: book.volumeInfo.publisher,
        published: book.volumeInfo.publishedDate,
        image: img ? img.smallThumnail : '/vercel.svg'
    };
}

export async function getBookByKeyword(keyword) {
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${keyword}&langRestrict=js&maxResults=20&printType=books`);
    const result = await res.json();
    const books = [];
    for (const b of result.items) {
        books.push(createBook(b))
    }

    return books;
}
