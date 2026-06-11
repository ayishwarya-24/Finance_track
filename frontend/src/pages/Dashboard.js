import TransactionForm from "../components/TransactionForm";

function Dashboard() {
    const username = localStorage.getItem("username");

    return (
        <div>
            <h1>FinanceTrack Dashboard</h1>

            <h2>Welcome, {username}</h2>

            <TransactionForm />
        </div>
    );
}

export default Dashboard;