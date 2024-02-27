import './ExpenseDetails.css'

const ExepenseDetails = (props) => {
    return (
        <div className='className="expense-details"'>
            <h2 className='className="expense-details__price"'>{props.title}</h2>
            <div className='className="expense-details__location"'>{props.amount}</div>
            <div className='expense-details__location'>{props.LocationOfExpenditure}</div>
        </div>
    );
}
export default ExepenseDetails;