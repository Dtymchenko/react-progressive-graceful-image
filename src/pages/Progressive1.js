import React from "react";
import Progressive_1 from "../components/Progressive1/Progressive1";

const Progressive1 = ({GoodPicture, BadPicture}) => {
  return (
    <div>
      <Progressive_1 src={GoodPicture} placeholder={BadPicture} />
    </div>
  );
};

export default Progressive1;
