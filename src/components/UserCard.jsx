import React from "react";
import { userData } from "../data/userData";

const UserCard = () => {
  console.log(userData);

  return (
    <div className="userCard">
      {userData.map((user) => {
        return (
          <>
            <div
              className="circle"
              style={{ backgroundColor: `${user.color}` }}
              key={user.number}
            ></div>
            <div className="userInfo">
              <h3>
                <span>name:</span> {user.name}
              </h3>
              <h3>
                <span>no:</span>
                {user.number}
              </h3>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default UserCard;
