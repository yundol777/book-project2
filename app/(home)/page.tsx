import Link from "next/link";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://books-api.nomadcoders.workers.dev";

async function getList() {
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json;
}

export default async function Home() {
  const listName = await getList();
  return (
    <div>
      <h1>THE NEW YOURK TIMES BEST SELLER EXPLORER</h1>
      {listName.results.map((list) => (
        <li key={list.list_name}>
          <Link href={`/list/${list.list_name}`}>{list.list_name} 👉</Link>
        </li>
      ))}
    </div>
  );
}
