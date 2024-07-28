import { API_URL } from "../../../(home)/page";

async function getBooks(listName: string) {
  const response = await fetch(`${API_URL}/list?name=${listName}`);
  return response.json();
}

export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  const listName = id.replace(/%20/g, "-");
  const books = await getBooks(listName);
  return (
    <div>
      <h2>{id.replace(/%20/g, " ")}</h2>
      {books.results.books.map((book) => (
        <div>
          <img src={book.book_image} />
          <p>{book.title}</p>
          <p>{book.author}</p>
          <a href={book.amazon_product_url}>Buy Now 👉</a>
        </div>
      ))}
    </div>
  );
}
