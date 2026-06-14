function TransactionList({ transactions, onDelete, onEdit }) {
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
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>
                                {transaction.transaction_date
                                  ?.split("T")[0]}
                            </td>
                            <td>{transaction.category}</td>
                            <td>{transaction.type}</td>
                            <td>{transaction.amount}</td>

                            <td>
                                <button
                                  className="edit-btn"
                                  onClick={() => onEdit(transaction)}
                                >
                                  Edit
                                </button>

                                <button
                                  className="delete-btn"
                                  onClick={() =>
                                    onDelete(transaction.id)}
                                >
                                  Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TransactionList;