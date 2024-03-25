import { useState, useEffect } from "react";
import "../src/Qoutes.css";
export const Qoutes = () => {
const [advice, setAdvice] = useState("Please click button to Get Advice");
const [count, setCount] = useState(0);

  async function getQoutes() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getQoutes();
  }, []);


  return (
    <div>
      <h5>{advice}</h5>
      <button onClick={getQoutes}> GET Qoutes </button>
      <Counter count={count} />
    </div>
  );
};

function Counter(props) {
  return (
    <p>
      You have read <b>{props.count}</b> pieces of advice
    </p>
  );
}
