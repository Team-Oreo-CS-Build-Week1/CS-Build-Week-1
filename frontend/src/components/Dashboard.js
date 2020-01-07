import React, { useEffect } from "react";
import axiosWithAuth from "../auth/AxiosWithAuth";

function Dashboard() {
  useEffect(() => {
    console.log("TOKEN", localStorage.getItem("token"));
    axiosWithAuth()
      // .get('http://localhost:8000/api/adv/init')
      .get("http://localhost:8000/api/adv/rooms")
      .then(res => {
        console.log("ROOMS DATA", res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return <div>Dashboard</div>;
}

export default Dashboard;
