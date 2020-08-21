import React from "react";
import Profile from "../Profile/Profile";

const ProfileList = ({ Users }) => {
  return (
    <div>
      {Users.map((User, i) => {
        //console.log(User)
        return (
          <Profile
            key={i}
            id={User.id}
            username={User.login}
            repositories={User.repos_url}
            followers={User.followers_url}
            score={User.score}
            userlink={User.html_url}
          />
        );
      })}
    </div>
  );
};

export default ProfileList;
