import { useParams } from "react-router";

export default function ViewSingleProperty() {
  const { property_id } = useParams();
  return <div>{property_id}</div>;
}
