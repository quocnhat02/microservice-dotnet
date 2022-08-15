import React, { useEffect, useState } from "react";

const ExampleFunctional = () => {
  const [count, setCount] = useState(0);
  const [action, setAction] = useState("");
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    // componentDidMount and componentDidUpdate
    document.title = `You clicked ${count} times`;
    console.log("useEffect");

    return () => {
      // clean-up function
    };
  }, [count]);

  useEffect(() => {
    fetch(`https://reqres.in/api/${action}`)
      .then((res) => console.log({ res }))
      .catch((err) => console.log(err));
  }, [action]);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    // componentDidMount
    document.addEventListener("scroll", handleScroll);

    return () => {
      // componentWillUnmount
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ heigh: "3000px" }}>
      <pre>Functional Component</pre>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <button onClick={() => setAction("users")}>Get User</button>
      <button onClick={() => setAction("comments")}>Get Comment</button>

      <p style={{ position: "fixed", bottom: "20px", left: "20px" }}>
        {scrollPosition}
      </p>
    </div>
  );
};

export default ExampleFunctional;
