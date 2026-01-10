import { Link } from "react-router";
import airbncLogo from "../assets/airbnc-logo.png";
import defaultAvatar from "../assets/default-avatar.png";
export default function Header({ user }) {
  return (
    <header className="header">
      <Link to="/" style={{ display: "contents" }}>
        <div className="header-logo">
          <h1 className="h1-header-logo">
            <img className="logo-image" src={airbncLogo} alt="" />
          </h1>
        </div>
      </Link>
      <div className="header-user">
        <div className="header-welcome">
          Welcome,
          <br /> {user?.first_name}
        </div>
        <img className="header-avatar" src={user?.avatar} alt="" />
      </div>
    </header>
  );
}
