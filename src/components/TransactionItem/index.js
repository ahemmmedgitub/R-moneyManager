// Write your code here
import './index.css'

const TransactionItems = props => {
  const {eachTrnsaction} = props
  const {heading, money, item} = eachTrnsaction

  return (
    <li className="list-items-container">
      <p className="sub-list-items">{heading}</p>
      <p className="sub-list-items">{money}</p>
      <p className="sub-list-items">{item}</p>
    </li>
  )
}

export default TransactionItems
