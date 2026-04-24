import React from "react";

const UserCard = ({ userData }) => {
  return (
    <div className="userCard">
      <div
        className="circle"
        style={{ backgroundColor: `${userData.color}` }}
        key={userData.number}
      ></div>
      <div className="userInfo">
        <h3>
          <span>N:</span> {userData.name}
        </h3>
        <h3>
          <span>NUM:</span>
          {userData.number}
        </h3>
      </div>
    </div>
  );
};

export default UserCard;
