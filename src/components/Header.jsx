import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-logo">
        <h1 className="h1-header-logo">
          <img className="logo-image" src="src/assets/airbnc-logo.png" alt="" />
        </h1>
      </div>
      <div className="header-user">
        <div className="header-welcome">
          Welcome,
          <br /> Guest
        </div>
        <img className="header-avatar" src="src/assets/default-avatar.png" alt="" />
      </div>
    </header>
  );
}
