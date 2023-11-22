import React, { useEffect, useRef, useState } from "react";

const About = () => {
  const btnRefs = useRef([]);
  const listRefs = useRef([]);
  const [topFixed, setTopFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const componentHeight = btnRefs.current[0].offsetTop;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      console.log(scrollTop, componentHeight);
      setTopFixed(scrollTop > componentHeight ? "fixed" : "");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToElement = (index) => {
    listRefs.current[index].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* <input
        type="text"
        // onChange={(e) => setinputval(e.target.value)}
        value={f.current}
      />

      {inputVal} */}
      {/* {Ref} */}
      <div style={{ height: "600px" }}></div>
      <div style={{ height: "600px" }}></div>

      <div style={{ height: "600px" }}></div>

      <div style={{ height: "600px" }}></div>
      <div className={`${topFixed} buttonblock`}>
        {[1, 2, 3, 4].map((list, index) => (
          <button
            key={index}
            ref={(ref) => (btnRefs.current[index] = ref)}
            onClick={() => scrollToElement(index)}
          >
            Button {list}
          </button>
        ))}
      </div>

      <ul>
        {[1, 2, 3, 4].map((list, index) => (
          <li
            key={index}
            ref={(ref) => (listRefs.current[index] = ref)}
            style={{ height: "90vh", border: "1px solid #000" }}
          >
            abc{list}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
