import React from "react";

const UserLoggedIn = () => {
  return (
    <>
      <h2>You are logged in as: </h2>
      <div className="UserCard">
        {" "}
        <img
          src="https://f4.bcbits.com/img/0020435433_20.jpg"
          className="LoggedInUser"
        ></img>
        <h2>loyle_capo_chrissy</h2>
      </div>
    </>
  );
};

export default UserLoggedIn;
