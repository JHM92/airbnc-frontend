import { Link } from "react-router";

export default function HostedBy({ hostName, hostAvatar, host_id }) {
  return (
    <div className="view-single-property-hosted-by">
      <div className="hosted-by-name">
        Hosted by <br />
        {hostName}
      </div>
      <Link to={"/users/" + host_id}>
        <img className="hosted-by-avatar" height="50" width="50" src={hostAvatar} />
      </Link>
    </div>
  );
}
