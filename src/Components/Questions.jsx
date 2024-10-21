import React, { useEffect, useState } from "react";

const Questions = () => {
  const [data, setData] = useState();
  const [index, setIndex] = useState(0);
  useEffect(() => {
    fetch("questions.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const currentQuestion = data[index];
  console.log(currentQuestion);
  console.log(data);
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)",
      }}
    >
      <div className="flex justify-center ">
        <ul className="steps gap-3">
          <li className="step step-primary">Question 1</li>
          <li className="step step-primary">Question 2</li>
          <li className="step">Question 3</li>
          <li className="step">Question 4</li>
          <li className="step">Question 5</li>
        </ul>
      </div>
      <div>
        <h1>{currentQuestion.question}</h1>
        <ul>
          {currentQuestion.answers.map((res, dex) => (
            <li>
              {dex + 1},{res}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Questions;
