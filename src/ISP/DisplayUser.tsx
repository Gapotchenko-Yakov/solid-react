import React from "react";

const DisplayUser = ({ user: { name } }: { user: { name: string } }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default DisplayUser;
