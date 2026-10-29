import { useRef, useState } from "react";

export function FollowTheLeader() {
  const [position, setPosition] = useState([0, 0]);
  const clickRef = useRef(null);

  const handleClick = ({ clientX, clientY }) => {
    const { width, height } = clickRef.current.getBoundingClientRect();
    setPosition([clientX - width / 2, clientY - height / 2]);
  };
  return (
    <div className="wrapper" onClick={handleClick}>
      <div
        ref={clickRef}
        className="box"
        style={{
          transform: `translate(${position[0]}px, ${position[1]}px)`,
          transition: "transform 1s",
        }}
      ></div>
    </div>
  );
}
