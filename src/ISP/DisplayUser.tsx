import React from "react";

const DisplayUser = ({ name }: { name: string }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default DisplayUser;
