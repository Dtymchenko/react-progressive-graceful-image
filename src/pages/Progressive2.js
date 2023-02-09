import React from "react";
import Progressive_2 from "./../components/Progressive2/Progressive2";

const Progressive2 = ({ GoodPicture, BadPicture }) => {
  return (
    <div>
      <Progressive_2 src={GoodPicture} placeholder={BadPicture} />
    </div>
  );
};

export default Progressive2;
