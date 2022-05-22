import React from "react";

const SingleUser = ({ user }) => {
  return (
    <tr>
      <td>{user.email}</td>
      <td>Quality Control Specialist</td>
      <td>Blue</td>
    </tr>
  );
};

export default SingleUser;
