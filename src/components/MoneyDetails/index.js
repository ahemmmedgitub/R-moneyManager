// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {showingAmount} = props

  return (
    <div className="amount-calculation-container">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-logo"
        />
        <div className="amount-container">
          <p className="balance">Your Balance</p>
          <p data-testid="balanceAmount" className="amount">
            {showingAmount}
          </p>
        </div>
      </div>
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-logo"
        />
        <div className="amount-container">
          <p className="balance">Your Income</p>
          <p data-testid="incomeAmount" className="amount">
            {showingAmount}
          </p>
        </div>
      </div>
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-logo"
        />
        <div className="amount-container">
          <p className="balance">Your Expenses</p>
          <p data-testid="expensesAmount" className="amount">
            {showingAmount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
