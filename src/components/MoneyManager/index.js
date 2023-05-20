import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItems from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    intialList: [],
    title: '',
    amount: '',
    type: '',
    showingAmount: 0,
  }

  onAddItems = event => {
    const {title, amount, type} = this.state

    event.preventDefault()

    const buttonEl =
      'https://assets.ccbp.in/frontend/react-js/money-manager/delete.png'

    const heading = title
    const money = amount
    const item = type

    const newCalculation = {
      id: uuidv4(),
      heading,
      money,
      item,
    }

    this.setState(prevState => ({
      intialList: [...prevState.intialList, newCalculation],
      title: '',
      amount: '',
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {intialList, showingAmount} = this.state

    return (
      <div className="bg-container">
        <div className="user-details-container">
          <h1 className="user-name">Hi, Richard</h1>
          <p className="user-description">
            Welcome back to your <span className="span-el">Money Manager</span>
          </p>
        </div>
        <div className="money-details">
          <MoneyDetails showingAmount={showingAmount} />
        </div>
        <div className="form-history-container">
          <form className="form-container" onClick={this.onAddItems}>
            <h1 className="add-heading">Add Transaction</h1>
            <p className="label-elements">TITLE</p>
            <input onChange={this.onChangeTitle} className="input-elements" />
            <p className="label-elements" htmlFor="amount">
              Amount
            </p>
            <input onChange={this.onChangeAmount} className="input-elements" />
            <p className="label-elements">TYPE</p>
            <select onChange={this.onChangeType} className="input-elements">
              {transactionTypeOptions.map(eachOption => (
                <option value={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button onClick={this.onAddItems} className="add-btn" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1 className="add-heading">History</h1>
            <div className="title-amount-type-container">
              <p className="sub-titles">Title</p>
              <p className="sub-titles">Amount</p>
              <p className="sub-titles">Type</p>
            </div>
            <ul className="ul-elements">
              {intialList.map(eachTrnsaction => (
                <TransactionItems
                  eachTrnsaction={eachTrnsaction}
                  key={eachTrnsaction.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
