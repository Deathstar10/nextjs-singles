import Column from "./Column";

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

  return (
    <div className="flex gap-2 p-2 rounded">
      {boards.columns.map((column) => (
        <Column name={column.name} key={column.id}>
          {column.cards.map((card) => (
            <p key={card.id}>{card.name}</p>
          ))}
        </Column>
      ))}
      <AddNewColumn />
    </div>
  );
}

function AddNewColumn() {
  return (
    <form>
      <input type="hidden" id="newColumn" />
      <button>Add New Column</button>
    </form>
  );
}
