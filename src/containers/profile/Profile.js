import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";
import userIcon from "../../assets/imges/user.png";

import "./Profile.scss";

const Profile = () => {
  const context = useContext(AppContext);
  return (
    <div className="app-profile">
      <div className="app-profile__block">
        <img
          className="app-profile__block__img-user"
          src={userIcon}
          alt="userIcon"
        />
        <p>
          {context.state.user.displayName
            ? context.state.user.displayName
            : null}
        </p>
        <p>{context.state.user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
