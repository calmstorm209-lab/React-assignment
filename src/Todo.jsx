
import "./Todo.css";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);

  return (
    <div className="container">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button
        onClick={() => {
          if (todo === "") return;
          setList([...list, todo]);
          setTodo("");
        }}
      >
        Add
      </button>

      <h1>Tasks</h1>

      {list.map((item, index) => (
        <div key={index} id="task">
          <span>{index + 1}</span>

          <p className="task-text">{item}</p>

          <button
            id="cancel"
            onClick={() =>
              setList(list.filter((_, i) => i !== index))
            }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
