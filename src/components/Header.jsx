import { Link } from "react-router";
import dwellrLogo from "../assets/dwellr-logo.png";
import defaultAvatar from "../assets/default-avatar.png";
export default function Header({ user }) {
  return (
    <header className="header">
      <Link to="/" style={{ display: "contents" }}>
        <div className="header-logo">
          <h1 className="h1-header-logo">
            <img height="50" className="logo-image" src={dwellrLogo} alt="" />
          </h1>
        </div>
      </Link>
      <div className="header-user">
        <div className="header-welcome">
          Welcome,
          <br /> {user?.first_name}
        </div>
        <Link to={"/users/" + user?.user_id}>
          <img className="header-avatar" src={user?.avatar} alt="" />
        </Link>
      </div>
    </header>
  );
}
