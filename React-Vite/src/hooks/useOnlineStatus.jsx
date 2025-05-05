import React, { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [status, setStaus] = useState(navigator.onLine);

  useEffect(() => {
    addEventListener("online", () => {
      setStaus(true);
    });

    addEventListener("offline", () => {
      setStaus(false);
    });
  }, [status]);

  return status;
};

export default useOnlineStatus;
