import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

function Dashboard() {
    const username = localStorage.getItem("username");

    return (
        <div>
            <h1>FinanceTrack Dashboard</h1>

            <h2>Welcome, {username}</h2>

            <TransactionForm />

            <hr />

            <TransactionList />
        </div>
    );
}

export default Dashboard;