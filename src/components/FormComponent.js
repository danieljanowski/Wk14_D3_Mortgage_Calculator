import React, {Component} from 'react';

const FormComponent = (props) => {

    function handleSalary1Change(event){
        props.onSalary1Change(event.target.value)
    }

    function handleSalary2Change(event){
        props.onSalary2Change(event.target.value)
    }

    function handleDepositChange(event){
        props.onDepositChange(event.target.value)
    }

    function handleCommitmentsChange(event){
        props.onCommitmentsChange(event.target.value)
    }

    function handleInterestChange(event){
        props.onInterestChange(event.target.value)
    }

    function handleTermChange(event){
        props.onTermChange(event.target.value)
    }

    return(
            <>    
            <label htmlFor="salary1">Salary 1: </label>
            <input type="number" id="salary1" name="salary1" onChange={handleSalary1Change} />
            <br/>
            <label htmlFor="salary2">Salary2: </label>
            <input type="number" id="salary2" name="salary2" onChange={handleSalary2Change}/>           
            <br/>
            <label htmlFor="deposit">Deposit: </label>
            <input type="number" id="deposit" name="deposit" onChange={handleDepositChange}/>
            <br />
            <label htmlFor="commitments">Monthly Commitments: </label>
            <input type="number" id="commitments" name="commitments" onChange={handleCommitmentsChange}/>
            <br />
            <label htmlFor="interest-rate">Interest Rate (%): </label>
            <input type="number" id="interest" name="interest" onChange={handleInterestChange}/>
            <br />
            <label htmlFor="mortgage-term">Mortgage Term (years): </label>
            <input type="number" id="mortgage-term" name="mortgage-term" onChange={handleTermChange}/>
            </>
    )
    
}

export default FormComponent;