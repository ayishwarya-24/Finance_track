import { useEffect, useState } from "react";

function TransactionList() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const userId = localStorage.getItem("userId");

            try {
                const response = await fetch(
                    `http://localhost:5000/api/transactions/${userId}`
                );

                const data = await response.json();

                setTransactions(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTransactions();
    }, []);

    console.log(transactions);

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