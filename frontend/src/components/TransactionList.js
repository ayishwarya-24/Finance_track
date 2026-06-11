function TransactionList({ transactions }) {
    return (
        <div>
            <h2>Your Transactions</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.transaction_date}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.type}</td>
                            <td>{transaction.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionList;