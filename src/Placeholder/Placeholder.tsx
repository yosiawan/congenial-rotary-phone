import "./placeholder.css";

export default function Placeholder(props: { text: string }) {
  return (
    <div className="placeholder__container">
      <h1 className="placeholder__text">{props.text}</h1>
    </div>
  );
}
