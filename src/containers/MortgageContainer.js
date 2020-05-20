import React, {Component} from 'react';
import FormComponent from '../components/FormComponent';
import ResultsComponent from '../components/ResultsComponent';

class MortgageContainer extends Component {
    constructor(props){
        super(props);
        this.state= {
            salary1: 0,
            salary2: 0,
            deposit: 0,
            commitments: 0,
            interest: 0,
            term: 0,
            mortgageAmount: 0
        };
        this.handleSalary1Input = this.handleSalary1Input.bind(this);
        this.handleSalary2Input = this.handleSalary2Input.bind(this);
        this.handleDepositInput = this.handleDepositInput.bind(this);
        this.handleCommitmentsInput = this.handleCommitmentsInput.bind(this);
        this.handleInterestInput = this.handleInterestInput.bind(this);
        this.handleTermInput = this.handleTermInput.bind(this);
    }

    handleSalary1Input(amount){
        this.setState({salary1: parseFloat(amount)})
    }

    handleSalary2Input(amount){
        this.setState({salary2: parseFloat(amount)})
    }
    
    handleDepositInput(amount){
        this.setState({deposit: parseFloat(amount)})
    }

    handleCommitmentsInput(amount){
        this.setState({commitments: parseFloat(amount)})
    }
    
    handleInterestInput(amount){
        this.setState({interest: parseFloat(amount)})
    }
    
    handleTermInput(amount){
        this.setState({term: parseFloat(amount)})
    }

    render() {
        return(
            <>
                <FormComponent onSalary1Change={this.handleSalary1Input}
                                onSalary2Change={this.handleSalary2Input}
                                onDepositChange={this.handleDepositInput}
                                onCommitmentsChange={this.handleCommitmentsInput}
                                onInterestChange={this.handleInterestInput}
                                onTermChange={this.handleTermInput}/>
                <ResultsComponent salary1={this.state.salary1}
                                    salary2={this.state.salary2}
                                    deposit={this.state.deposit}
                                    commitments={this.state.commitments}
                                    interest={this.state.interest}
                                    term={this.state.term}/>
            </>
        )
    }
}

export default MortgageContainer;