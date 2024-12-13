import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
function App() {
  const [userInput, setInvestValues] = useState({
    initialInvestment: 1000,
    annualInvestment: 15000,
    expectedReturn: 6,
    duration: 4,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setInvestValues((previusInputs) => {
      return {
        ...previusInputs,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {!inputIsValid && <p className="center">Please Enter Valid Inputs</p>}
      {inputIsValid && <Results inputData={userInput} />}
    </>
  );
}

export default App;
