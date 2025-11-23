export default function ImageCard({ imageUrl }) {
  console.log(imageUrl);
  if (typeof imageUrl !== "undefined") {
    return <img className="image-card" src={imageUrl} alt="" />;
  } else {
    return <div className="empty-card"></div>;
  }
}
