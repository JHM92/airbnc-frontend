import "../label.css";

export default function FloatingLabelInput({ label, width, onChange, field }) {
  return (
    <div className="container">
      <input
        className="input"
        data-width={width}
        placeholder=" "
        onChange={onChange}
        value={field}
      />
      <label className="label">{label}</label>
    </div>
  );
}
