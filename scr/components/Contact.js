import { useEffect, useState, useMemo } from "react";

const Contact = () => {
  const [click, setclick] = useState(0);
  const [clicknew, setClicknew] = useState(0);
  // useEffect(() => {
  //   console.log("abc");
  // }, [click]);

  const slowfunc = (click) => {
    for (let i = 0; i < 100000000; i++) {}
    return click * 2;
  };

  const usingMemo = useMemo(() => {
    console.log(click);
    return slowfunc(click);
  }, [click]);

  return (
    <div className="  w-6/12 m-auto">
      <h1>{click}</h1>
      <h1>{clicknew}</h1>

      {usingMemo}

      <button
        onClick={() => setclick(click + 1)}
        className=" w-28   bg-sky-400 rounded-md py-2"
      >
        Click me
      </button>
      <button
        onClick={() => setClicknew(clicknew + 3)}
        className=" bg-sky-400 rounded-lg ml-2 p-2"
      >
        Click me Again
      </button>
    </div>
  );
};

export default Contact;
