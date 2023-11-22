import { useEffect, useState } from "react";
import { RES_DETAIL } from "./constant";

const useResturentMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {
    try {
      const data = await fetch(`${RES_DETAIL}${resId}`);

      const json = await data.json();
      setresInfo(json.data);
    } catch (error) {
      {
        console.error(error);
      }
    }
  };

  return resInfo;
};

export default useResturentMenu;
