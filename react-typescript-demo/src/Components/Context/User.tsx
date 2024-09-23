import React, { useContext } from "react";
import { Usercontext } from "./UserContext";

export const User = () => {
  const usecontext = useContext(Usercontext);
  const handleLogin = () => {
    console.log("handllogin is runing");
    if (usecontext) {
      usecontext.setuser({
        name: "shijil",
        email: "shijilcg@gmail.com",
      });
    }
  };
  const handleLogout = () => {
    console.log("loging out is runing")
    if (usecontext) {
      usecontext.setuser(null);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {usecontext.user?.name} </div>
      <div>User email is {usecontext.user?.email}</div>
    </div>
  );
};

