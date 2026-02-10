
export default function Demo() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => setNumber(number + 1)}>
        {number}
      </button>
    </div>
  );
}
