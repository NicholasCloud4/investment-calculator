import { useState } from "react";
import Header from "./components/Header";
import TableResults from "./components/TableResults";
import UserInput from "./components/UserInput";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 40000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {

    setUserInput(prevState => {
      return {
        ...prevState,
        [inputIdentifier]: + newValue
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleChange} userInput={userInput} />
      {inputIsValid ? <TableResults userInput={userInput} /> : <p className="center">Please enter a valid duration</p>}
    </>
  )
}

export default App
