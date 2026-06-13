import { useEffect, useState } from "react";

import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import SummaryCards from "../components/SummaryCards";
import FinanceCharts from "../components/FinanceCharts";
import "../styles/dashboard.css";

function Dashboard() {
    const username = localStorage.getItem("username");

    const [transactions, setTransactions] = useState([]);

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

    const handleDelete = async (id) => {
        try {
            await fetch(
                `http://localhost:5000/api/transactions/${id}`,
                {
                    method: "DELETE"
                }
            );

            setTransactions(prev =>
                prev.filter(
                    transaction => transaction.id !== id
                )
            );

        } catch (error) {
            console.error(error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("username");
        
        window.location.href = "/login";
    };

    const handleEdit = async (transaction) => {
        const newAmount = prompt(
            "Enter new amount",
            transaction.amount
        );

        if (!newAmount) return;

        try {
            await fetch(
                `http://localhost:5000/api/transactions/${transaction.id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        amount: newAmount,
                        category: transaction.category,
                        description: transaction.description,
                        transaction_date: transaction.transaction_date
                    })
                }
            );

            setTransactions(prev =>
                prev.map(t =>
                    t.id === transaction.id
                        ? {
                            ...t,
                            amount: newAmount
                        }
                        : t
                )
            );

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTransactions();
    }, []);

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h1>FinanceTrack Dashboard</h1>
                
                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>

            <h2>Welcome, {username}</h2>

            <SummaryCards transactions={transactions} />

            <hr />

            <TransactionForm
                onTransactionAdded={fetchTransactions}
            />

            <hr />

            <TransactionList
                transactions={transactions}
                onDelete={handleDelete}
                onEdit={handleEdit}
            />

            <hr />

            <FinanceCharts transactions={transactions} />
        </div>
    );
}

export default Dashboard;