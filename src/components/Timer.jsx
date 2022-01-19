import { useState, useEffect } from "react";

function Timer({ start, end }) {
  const [counter, setCounter] = useState(start);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter((p) => {
        if (p === end) {
          clearInterval(id);
          return end;
        }
        return p + 1;
      });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <div>
      Count is : {counter}
      <br />
    </div>
  );
}

export default Timer;
