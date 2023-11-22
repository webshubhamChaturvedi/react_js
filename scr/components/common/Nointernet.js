import React from "react";
import nowifi from "../../Assets/images/no-wifi.png";

function Nointernet() {
  return (
    <div className="max-w-7xl m-auto  ">
      {/* {console.log(nowifi)} */}
      {/* <img src={nowifi} alt={nowifi} /> */}
      <h2 className=" text-5xl text-inherit">
        Please Check your Internet Connection
      </h2>
    </div>
  );
}

export default Nointernet;
