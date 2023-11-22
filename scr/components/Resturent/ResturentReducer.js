import React from "react";
// import { RES_LIST } from "../../utils/constant";

function ResturentReducer(state, action) {
  switch (action.type) {
    case "filter_rest": {
      const filterdata = query.filter((arr) =>
        arr.data.name.toLowerCase().includes(SeacrhText.toLowerCase())
      );
      return setFiltredRes(filterdata);
    }
    case "fetch_ResAPi": {
      const ResList = async () => {
        const data = await fetch(`${RES_LIST}`);
        const Json = await data.json();
        setQuery(Json?.data?.cards[2]?.data?.data?.cards);
        setFiltredRes(Json?.data?.cards[2]?.data?.data?.cards);
      };
      return ResList();
    }
  }
}

export default ResturentReducer;
