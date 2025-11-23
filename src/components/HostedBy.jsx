export default function HostedBy({ hostName, hostAvatar }) {
  return (
    <div className="view-single-property-hosted-by">
      <div className="hosted-by-name">
        Hosted by <br />
        {hostName}
      </div>
      <img className="hosted-by-avatar" height="50" width="50" src={hostAvatar} />
    </div>
  );
}
