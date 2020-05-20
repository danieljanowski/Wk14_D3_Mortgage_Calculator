import React, {Component} from 'react';

const ResultsComponent = (props) => {
    var tempSalary1 = 0;
    var tempSalary2 = 0;
    var tempDeposit = 0;
    var tempCommitments = 0;
    var tempInterest = 0;
    var tempTerm = 0;


    if (props.salary1){tempSalary1 = props.salary1;} 
    if (props.salary2){tempSalary2 = props.salary2;} 
    if (props.deposit){tempDeposit = props.deposit;} 
    if (props.commitments){tempCommitments = props.commitments;} 
    if (props.interest){tempInterest = props.interest;} 
    if (props.term){tempTerm = props.term;} 
   
    const mortgageAmount = (tempSalary1 + tempSalary2 - (tempCommitments * 12)) * 3;
    const maxPropertyValue = mortgageAmount + tempDeposit;
    var monthlyRepayments = mortgageAmount*((tempInterest/1200)*(1 + (tempInterest/1200))**(tempTerm * 12))/((1 + (tempInterest/1200))**(tempTerm * 12) - 1);
    if (!monthlyRepayments){monthlyRepayments = 0;}
    if (!isFinite(monthlyRepayments)){monthlyRepayments = 0;}

    //P = L[c(1 + c)n]/[(1 + c)n - 1]

    //The following formula is used to calculate the fixed monthly payment (P) 
    //required to fully amortize a loan of L dollars over a term of n months at a monthly interest rate of c. 
    //[If the quoted rate is 6%, for example, c is 6/1200 or .005].
    
    return (
        <>
            <h3>Mortgage amount available: {mortgageAmount}</h3>
            <h3>Maximum Property Value: {maxPropertyValue}</h3>
            <h3>Monthly Repayments: {(monthlyRepayments).toFixed(2)}</h3>
        </>
    )
}

export default ResultsComponent;