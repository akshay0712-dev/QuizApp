import { useContext, useState } from "react";
import "./App.css";
import Ques from "./componens/question";

import { idContext } from "./context/context";
import ques from "./componens/ques";

function App() {
  const [correct, setCorrect] = useState(new Array(ques.length).fill(0));

  const [quesId, setQuesId] = useState(0);
  const previous = () => {
    setQuesId((prevQuesId) => (prevQuesId > 0 ? prevQuesId - 1 : 0));
    // console.log(quesId);
  };
  const next = () => {
    setQuesId((prevQuesId) => (prevQuesId < 11 ? prevQuesId + 1 : 0));
    // console.log(quesId);
  };
  const submit = () => {
    let totalCorrect = 0;
    for (let index = 0; index < correct.length; index++) {
      if (ques[index].answer === correct[index]) {
        totalCorrect = totalCorrect + 1;
      }
      // console.log(`correct ans is ${ques[index]} and my ans is  ${correct[index]}`);
    }

    for (let index = 0; index < correct.length; index++) {
      console.log(` ${ques[index].answer} :  ${correct[index]}`);
    }
    console.log(`marks is  ${totalCorrect}`);

    // console.log(correct);
  };

  return (
    <>
      <idContext.Provider value={{ quesId, setQuesId, correct, setCorrect }}>
        <div className="md:flex md:flex-col justify-center md:px-[20%] ">
        <Ques />
        <div className="flex justify-center gap-4  mt-5 pr-6 px-2 sm:px-4 md:flex md:flex-row wd:w-[60%]">

          {/* {value.quesId} */}
          {/* ... Previous Button ... */}

          <div className="">
          <button
            className="Previous bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={previous}
            disabled={quesId === 0}
          >
            Previous
          </button>
          </div>
          {/* ... Next Button ... */}

          <div className="">

          <button
            className="Next bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={next}
            disabled={quesId === ques.length - 1}
          >
            Next
          </button>
          </div>
          {/* ... Submit Button ... */}
          <div className="">
            <button
              className="Submit bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              onClick={submit}
            >
              Submit
            </button>
          </div>
        </div>
        </div>
      </idContext.Provider>
    </>
  );
}

export default App;
