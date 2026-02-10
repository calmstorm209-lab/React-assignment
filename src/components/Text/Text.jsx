
import './Text.css';

export default function Text(props) {
  const { text, color, type } = props;

  return (
    type === "p" ? (
      <p className="text" style={{ color }}>
        {text}
      </p>
    ) : type === "h1" ? (
      <h1 className="text1" style={{ color }}>
        {text}
      </h1>
    ) : (
      <div style={{ color }}>
        {text}
      </div>
    )
  );
}
