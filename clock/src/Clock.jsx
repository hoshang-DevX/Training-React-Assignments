import { useEffect } from "react";
import { useState } from "react";
import SegmentDisplay from "./components/SegmentDisplay.jsx";

// 1- time lenge
// 2- time se Hours, minutes aur seconds lele
// 3-

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearTimeout(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();


  return (
    <div style={{display : "flex", gap : "5px", backgroundColor : "", width : "400px"} } >
    <SegmentDisplay digit= {Math.floor( hours/10 )} />
      <SegmentDisplay digit={hours % 10} />
      <span>:</span>
      <SegmentDisplay digit={Math.floor(minutes / 10)} />
      <SegmentDisplay digit={minutes % 10} />
      <span>:</span>
      <SegmentDisplay digit={Math.floor(seconds / 10)} />
      <SegmentDisplay digit={seconds % 10} />
    </div>
  );
}

export default Clock;
