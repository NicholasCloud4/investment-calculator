import React from "react";
import { useState } from "react";

function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 40000,
        annualInvestment: 1000,
        expectedReturn: 5,
        duration: 10,
    });

    function handleChange(inputIdentifier, newValue) {

        setUserInput(prevState => {
            return {
                ...prevState,
                [inputIdentifier]: newValue
            }
        })
    }

    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial investment</label>
                    <input
                        id="user-input"
                        type="number"
                        value={userInput.initialInvestment}
                        onChange={(event) => handleChange(initialInvestment, event.target.value)}
                    />
                </div>
                <div>
                    <label>Annual investment</label>
                    <input
                        id="user-input"
                        type="number"
                        value={userInput.annualInvestment}
                    />
                </div>
            </div>
            <div className="input-group">
                <div>
                    <label>Expected return</label>
                    <input
                        id="user-input"
                        type="number"
                        value={userInput.expectedReturn}
                    />
                </div>
                <div>
                    <label>Duration</label>
                    <input
                        id="user-input"
                        type="number"
                        value={userInput.duration}
                    />
                </div>
            </div>
        </div>
    );
}

export default UserInput;
