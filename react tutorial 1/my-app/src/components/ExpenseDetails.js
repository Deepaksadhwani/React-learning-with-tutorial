function ExepenseDetails(props) {
    return (
        <div>
        <h2>{props.title}</h2>
        <div>{props.amount}</div>
        </div>
   );
}
export default ExepenseDetails;