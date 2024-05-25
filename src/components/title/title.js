import React from "react";
import "./title.css";
const Title = ({
  children,
}) => {
  return (
    <div className={"title-block"}>
      <h5 className={"titleStyle"}>
        <span>{children}</span>
      </h5>
      <div className="line"></div> 
    </div>
  );
};
export default Title;
