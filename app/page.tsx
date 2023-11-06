import Link from "next/link";

async function getBoardData() {
  const board = {
    id: 1,
    name: "Board",
    columns: [
      {
        id: 1,
        name: "Do RSc",
        cards: [
          {
            id: 1,
            name: "Learn RSc",
          },
          {
            id: 1,
            name: "Learn RSc",
          },
          {
            id: 1,
            name: "Learn RSc",
          },
        ],
      },
      {
        id: 2,
        name: "Do RSc",
        cards: [
          {
            id: 1,
            name: "Learn RSc",
          },
          {
            id: 1,
            name: "Learn RSc",
          },
          {
            id: 1,
            name: "Learn RSc",
          },
        ],
      },
    ],
  };

  return board;
}

export default async function Home() {
  const boards = await getBoardData();
  return <Link href={"/board"}>boards</Link>;
}
