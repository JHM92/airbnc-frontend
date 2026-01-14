import { useEffect, useState } from "react";
import { getUserById } from "../../api";
import { useParams } from "react-router";
import Review from "./Review";

export default function UserProfile() {
  const { user_id } = useParams();
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const fetchUser = async () => {
    const { user: retrievedUser } = await getUserById(user_id);
    console.log(retrievedUser);
    setUser(retrievedUser);
    setIsLoading(false);
  };

  const memberSince = new Date(user?.created_at).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  useEffect(() => {
    setIsLoading(true);
    fetchUser(user_id);
  }, [user_id]);

  return (
    <div className="user-profile-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="user-details-container">
          <div className="profile-picture-info-container">
            <img
              height="200px"
              width="200px"
              className="profile-picture"
              src={user.avatar}
              alt=""
            />
            <div className="user-info">
              <div className="user-name">{user.first_name + " " + user.surname}</div>
              <div>Member since: {memberSince}</div>
            </div>
          </div>

          <div className="contact-info">
            <div className="contact-label">Contact</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone_number}</div>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
}
