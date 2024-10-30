import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment'

function TableResults({ userInput }) {
    let resultsData = calculateInvestmentResults(userInput);
    let intitalInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

    return (
        <table table id='result' >
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment</th>
                    <th>Interest</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((yearData) => {
                    let totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - intitalInvestment;
                    let totalAmountInvested = yearData.valueEndOfYear - totalInterest;

                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td>{formatter.format(yearData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table >
    )
}

export default TableResults