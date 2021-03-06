import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props){
    super()
    this.state={
      balance:0
    }
  }
  handleDepClick (event) {
      // It is good practice to still prevent default behavior
      event.preventDefault()
      // set a local variable to the amount entered in the text box.
      let amount = parseInt(this.refs.amount.value)
      // set a local variable to the new balance based off of the original balance + amoun
      let newBalance = this.state.balance + amount;
      // set the balance to the newBalance using the setState method (necessary)
      this.setState({
        balance: newBalance
      })
      amount = '';
    }

    handleWithClick (event) {
        // It is good practice to still prevent default behavior
        event.preventDefault()
        // set a local variable to the amount entered in the text box.
        let amount = parseInt(this.refs.amount.value)
        // set a local variable to the new balance based off of the original balance + amoun
        let newBalance = this.state.balance - amount;
        // set the balance to the newBalance using the setState method (necessary)
        this.setState({
          balance: newBalance
        })
        amount = '';
      }

  render() {
    let balance = "balance";
    if (this.state.balance <=0){
      balance += ' zero';
      balance
    }
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={balance}>{this.state.balance}</div>
          <input type="text" placeholder="enter an amount" ref="amount" />
        <input type="button" value="Deposit" onClick={(event)=>this.handleDepClick(event)}/>
        <input type="button" value="Withdraw" onClick={(event)=>this.handleWithClick(event)}/>
      </div>
    )
  }
}
