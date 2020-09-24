import React from "react";

const Keywords = ({ keywords }) => {
  return (
    <div className="keywords">
      {keywords.map((k) => (
        <p key={k.id}>{k.name}</p>
      ))}
    </div>
  );
};

export default Keywords;
