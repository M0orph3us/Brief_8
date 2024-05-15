import "./button.css";
export default function Button({ type, text, id }) {
  return (
    <button className="btn" id={id} type={type}>
      {text}
    </button>
  );
}
