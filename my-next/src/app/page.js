import Image from "next/image";
import LinkedBookDetails from "@/component/LinkedBookDetails";
import {getAllReviews} from "@/lib/getter";
export const dynamic = 'force-dynamic';

export default async function Home() {
  const reviews = await getAllReviews();

  return (
    <>
      {reviews.map((b, i) => (
          <LinkedBookDetails index={i + 1} book={b} key={b.id} />
      ))}
    </>
  );
}
