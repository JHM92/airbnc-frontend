export default function ReviewHeader({ guest, guest_avatar, date }) {
  return (
    <div className="review-header">
      <img className="review-avatar" src={guest_avatar} height="50px" width="50px" />
      <div className="review-header-details">
        <div className="review-guest-name">{guest}</div>
        <div className="review-date">{date}</div>
      </div>
    </div>
  );
}
