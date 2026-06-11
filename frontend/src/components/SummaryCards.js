function SummaryCards({ transactions }) {
    const income = transactions
        .filter(t => t.type === "income")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const expenses = transactions
        .filter(t => t.type === "expense")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const balance = income - expenses;

    return (
        <div className="card-container">
            <div className="card">
                <h3>Total Income</h3>
                <h2 className="income">{income}</h2>
            </div>

            <div className="card">
                <h3>Total Expenses</h3>
                <h2 className="expense">{expenses}</h2>
            </div>

            <div className="card">
                <h3>Balance</h3>
                <h2 className="balance">{balance}</h2>
            </div>
        </div>
    );
      
}

export default SummaryCards;