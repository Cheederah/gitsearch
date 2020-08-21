import React from "react";

const Profile = ({ username, id, score, userlink }) => {
  return (
    <div
      className="card d-inline-block col-sm-4 border m-3 p-2"
      style={{ width: "18rem", paddingTop: "10px" }}
    >
      <img
        src={`https://avatars0.githubusercontent.com/u/${id}?v=4`}
        className="card-img-top"
        alt="avatar"
      />
      <div className="card-body text-center">
        <h5 className="card-title ">{username}</h5>
        <p className="card-text">Score: {score}</p>
        <a
          href={`${userlink}`}
          className="  btn btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Profile
        </a>
      </div>
    </div>
  );
};

export default Profile;
