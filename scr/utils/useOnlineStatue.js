import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineState, setonlineState] = useState(true);
  useEffect(() => {
    Status();
  }, []);

  const Status = () => {
    window.addEventListener("offline", () => {
      return setonlineState(false);
    });
    window.addEventListener("online", () => {
      return setonlineState(true);
    });
  };

  return onlineState;
};

export default useOnlineStatus;
