import { useState } from "react";

function generateRandomNum() {
  return Math.floor(Math.random() * 100);
}
function RandomNumber() {
  const [randomNumber, setRandom] = useState(generateRandomNum);
  const changeRandomNum = () => {
    setRandom(generateRandomNum());
  };
  return (
    <div>
      <h1>{randomNumber}</h1>
      <button onClick={changeRandomNum}>Generate new random number</button>
    </div>
  );
}
export default RandomNumber;
