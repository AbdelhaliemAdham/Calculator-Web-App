import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

function Results({ inputData }) {
  let results = calculateInvestmentResults(inputData);
  const initialInvestment =
    results[0].valueEndOfYear -
    results[0].interest -
    results[0].annualInvestment;

  console.log(results);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest ( Year ) </th>
          <th>Total Interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => {
          const { year, interest, annualInvestment, valueEndOfYear } = result;
          const totalInterest =
            valueEndOfYear - annualInvestment * year - initialInvestment;
          const totalInvestment = valueEndOfYear - totalInterest;
          return (
            <tr key={index}>
              <td>{year}</td>
              <td>{formatter.format(valueEndOfYear)}</td>
              <td>{formatter.format(interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
