import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
const Questions = () => {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [score, setScore] = useState([]);

  useEffect(() => {
    fetch("questions.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(index);
  const currentQuestion = data[index];
  const handleClick = (res) => {
    console.log("clicked", res);
    setCorrectAnswer(currentQuestion.correct_answer);
    if (currentQuestion.correct_answer !== res) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `correct Answer was ${currentQuestion.correct_answer}`,
        showConfirmButton: false,
        timer: 1500,
      });
      setIndex(index + 1);
    } else {
      setIndex(index + 1);
      score.push(res);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Answer was correct",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  console.log("correct is", correctAnswer);
  console.log(currentQuestion);
  console.log(data);
  console.log("score is", score);

  if (!data) {
    <p>Loading...</p>;
  } else
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
            {data.map((res, num) => (
              <li
                key={num}
                className={`step ${num === index ? "step-primary" : ""}`}
              >
                Question {num + 1}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 bg-purple-700 text-white rounded-lg shadow-lg w-[80%] mx-auto">
          {index === 5 ? (
            <div className="">
              <div>
                <p className="text-center text-3xl">
                  Your Score is{" "}
                  <span className="text-red-600">{score.length}</span>
                </p>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    setIndex(0), setScore([]);
                  }}
                  className="btn btn-primary"
                >
                  Restart
                </button>
              </div>
            </div>
          ) : (
            <div>
              {" "}
              <h1 className="text-2xl font-bold mb-4">
                {currentQuestion?.question}
              </h1>
              <ul className="space-y-2">
                {currentQuestion?.answers.map((res, dex) => (
                  <li
                    onClick={() => handleClick(res)}
                    key={dex}
                    className="flex items-center gap-2 p-3 bg-primary/20 rounded-lg hover:bg-primary/30 cursor-pointer"
                  >
                    <span className="text-white font-semibold">{dex + 1}.</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
};

export default Questions;
