import React, { useState } from "react";
import SingleUser from "./SingleUser";

const AllUsers = () => {
  const [allusers, setAllUsers] = useState([]);
  const url = "http://localhost:5000/allusers";
  fetch(url)
    .then((res) => res.json())
    .then((data) => setAllUsers(data));
  return (
    <div>
      <h2>This is ALl Users Page:{allusers.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>

          <tbody>
            {allusers.map((user) => (
              <SingleUser key={user._id} user={user}></SingleUser>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
