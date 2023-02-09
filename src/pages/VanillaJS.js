import React from "react";
import Vanilla from "../components/Vanilla/Vanilla";

const VanillaJS = ({ GoodPicture, BadPicture }) => {
  return (
    <div>
      <Vanilla src={GoodPicture} placeholderSrc={BadPicture} height="300px" />
    </div>
  );
};

export default VanillaJS;
