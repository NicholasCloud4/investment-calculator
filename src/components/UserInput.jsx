import React from "react";

function UserInput({ onChangeInput, userInput }) {
    return (
        <div id="user-input">
            <div className="input-group">
                <div>
                    <label>Initial investment</label>
                    <input
                        id="user-input"
                        type="number"
                        value={userInput.initialInvestment}
                        onChange={(event) => onChangeInput("initialInvestment", event.target.value)}
                    />
                </div>
                <div>
                    <label>Annual investment</label>
                    <input
                        id="user-input"
                        type="number"
                        value={userInput.annualInvestment}
                        onChange={(event) => onChangeInput("annualInvestment", event.target.value)}
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
                        onChange={(event) => onChangeInput("expectedReturn", event.target.value)}
                    />
                </div>
                <div>
                    <label>Duration</label>
                    <input
                        id="user-input"
                        type="number"
                        value={userInput.duration}
                        onChange={(event) => onChangeInput("duration", event.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default UserInput;
