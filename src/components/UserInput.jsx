import React from "react";

function UserInput({ onChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(param) =>
              onChange("initialInvestment", param.target.value)
            }
            value={userInput.initialInvestment}
          />
        </p>
        <p>
          <label>Annual Investment ( each year )</label>
          <input
            type="number"
            required
            onChange={(param) =>
              onChange("annualInvestment", param.target.value)
            }
            value={userInput.annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return ( % )</label>
          <input
            type="number"
            required
            onChange={(param) => onChange("expectedReturn", param.target.value)}
            value={userInput.expectedReturn}
          />
        </p>
        <p>
          <label>Duration ( years )</label>
          <input
            type="number"
            required
            onChange={(param) => onChange("duration", param.target.value)}
            value={userInput.duration}
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
