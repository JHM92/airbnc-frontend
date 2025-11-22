export default function DetailCard({ label, emphasis, labelAlignment }) {
  if (labelAlignment === "bottom") {
    return (
      <div className="detail-card">
        <div className="detail-card-emphasis">{emphasis}</div>
        <div className="detail-card-label">{label}</div>
      </div>
    );
  }

  if (labelAlignment === "split") {
    const splitLabel = label.split("@@@");
    const lineOne = splitLabel[0];
    const lineTwo = splitLabel[1];

    return (
      <div className="detail-card">
        <div className="detail-card-label">{lineOne}</div>
        <div className="detail-card-emphasis">{emphasis}</div>
        <div className="detail-card-label">{lineTwo}</div>
      </div>
    );
  }

  return (
    <div className="detail-card">
      <div className="detail-card-label">{label}</div>
      <div className="detail-card-emphasis">{emphasis}</div>
    </div>
  );
}
