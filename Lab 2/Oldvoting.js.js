import React, { useState, useCallback } from "react";

const functions = new Set();

const Voting = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const increment1 = useCallback(() => setCount1(count1 + 1), [count1]);
  const increment2 = useCallback(() => setCount2(count2 + 1), [count2]);
  const increment3 = useCallback(() => setCount3(count3 + 1), [count3]);
  const increment4 = useCallback(() => setCount4(count4 + 1), [count4]);

  functions.add(increment1);
  functions.add(increment2);
  functions.add(increment3);
  functions.add(increment4);

  return (
    <>
      <h2>Vote Your Language!</h2>
      <div className="vote-card">
        <div className="card-item">
          {count1}
          <h3>
            PHP<i className="fab fa-php"></i>
          </h3>
          <button className="btn btn-php" onClick={increment1}>
            Click Here
          </button>
        </div>
        <div className="card-item">
          {count2}
          <h3>
            Python<i className="fab fa-python"></i>
          </h3>
          <button className="btn btn-python" onClick={increment2}>
            Click Here
          </button>
        </div>
        <div className="card-item">
          {count3}
          <h3>
            React<i className="fab fa-react"></i>
          </h3>
          <button className="btn btn-react" onClick={increment3}>
            Click Here
          </button>
        </div>
        <div className="card-item">
          {count4}
          <h3>
            Java<i className="fab fa-java"></i>
          </h3>
          <button className="btn btn-java" onClick={increment4}>
            Click Here
          </button>
        </div>
      </div>
    </>
  );
};

export default Voting;
