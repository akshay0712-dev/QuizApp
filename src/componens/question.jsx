import React, { useState, useEffect, useContext } from "react";
import { correctContext, idContext } from "../context/context";
import ques from "./ques";

const question = () => {
  const value = useContext(idContext);
  const correct = value.correct
  const setCorrect = value.setCorrect
  let id = value.quesId;

  const check = (qId, ans) => {
    const newCorrect = [...correct];
    newCorrect[qId] = ans;
    setCorrect(newCorrect);
  };
  // useEffect(() => {
  //   console.log(correct);
  // }, [correct]);

  return (
    <correctContext.Provider value={correct}>
    {/* // ... Question ... */}

    <div className="px-2 sm:px-4 md:w-full">
      <div className="bg-gray-100 p-4 rounded-lg shadow-md my-3">
        <div className="question bg-gray-100 text-xl font-semibold mb-4">{`${
          id + 1
        }. ${ques[id].question}`}</div>

        {/* ... Option Box ... */}
        <div className="space-y-2 bg-gray-100">
          {/* ... Option 1 ... */}
          <p
            className="option active:bg-green-200  p-2 bg-white rounded-md shadow-sm hover:bg-gray-200 cursor-pointer"
            onClick={() => check(id, ques[id].options[0])}
          >
            {`${String.fromCharCode(65 + 0)}. ${ques[id].options[0]}`}
          </p>

          {/* ... Option 2 ... */}
          <p className="option active:bg-green-200  p-2 bg-white rounded-md shadow-sm hover:bg-gray-200 cursor-pointer"
          onClick={() => check(id, ques[id].options[1])}
          >
            {`${String.fromCharCode(65 + 1)}. ${ques[id].options[1]}`}
          </p>

          {/* ... Option 3 ... */}
          <p className="option active:bg-green-200  p-2 bg-white rounded-md shadow-sm hover:bg-gray-200 cursor-pointer"
          onClick={() => check(id, ques[id].options[2])}
          >
            {`${String.fromCharCode(65 + 2)}. ${ques[id].options[2]}`}
          </p>

          {/* ... Option 4 ... */}
          <p className="option active:bg-green-200  p-2 bg-white rounded-md shadow-sm hover:bg-gray-200 cursor-pointer"
          onClick={() => check(id, ques[id].options[3])}
          >
            {`${String.fromCharCode(65 + 3)}. ${ques[id].options[3]}`}
          </p>
        </div>

        {/* ... Buttons ... */}
        {/* <div className="bg-[red]">
          <Buttons />
        </div> */}
      </div>
    </div>
    </correctContext.Provider>
  );
};

export default question;
