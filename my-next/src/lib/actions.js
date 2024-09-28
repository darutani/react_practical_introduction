'use server';

import {getBookById} from "@/lib/getter";
import prisma from "./prisma";
import { redirect } from 'next/navigation';

export async function addReviews(data) {
    const book = await getBookById(data.get('id'));
    const input = {
        title: book.title,
        author: book.author,
        price: book.price,
        publisher: book.publisher,
        published: book.published,
        image: book.image,
        read: new Date(data.get('read')),
        memo: data.get('memo')
    }

    await prisma.reviews.upsert({
        update: input,
        create: Object.assign({}, input, { id: data.get('id') }),
        where: {
            id: data.get('id')
        }
    });

    redirect('/');
}

export async function removeReviews(data) {
    await prisma.reviews.delete({
        where: {
            id: data.get('id')
        }
    });

    redirect('/');
}