import { useEffect, useState } from "react";

import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import SummaryCards from "../components/SummaryCards";

function Dashboard() {
    const username = localStorage.getItem("username");

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

    return (
        <div>
            <h1>FinanceTrack Dashboard</h1>

            <h2>Welcome, {username}</h2>

            <SummaryCards transactions={transactions} />

            <hr />

            <TransactionForm />

            <hr />

            <TransactionList transactions={transactions} />
        </div>
    );
}

export default Dashboard;