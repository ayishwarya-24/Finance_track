import { useState } from "react";

function TransactionForm({ onTransactionAdded }) {
    const [formData, setFormData] = useState({
        amount: "",
        type: "expense",
        category: "",
        description: "",
        transaction_date: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userId = localStorage.getItem("userId");

        try {
            const response = await fetch(
                "http://localhost:5000/api/transactions",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ...formData,
                        userId
                    })
                }
            );

            const data = await response.json();

            alert(data.message);

            onTransactionAdded();

            setFormData({
                amount: "",
                type: "expense",
                category: "",
                description: "",
                transaction_date: ""
            });

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Add Transaction</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={formData.amount}
                    onChange={handleChange}
                />

                <br /><br />

                <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                >
                    <option value="expense">Expense</option>
                    <option value="income">Income</option>
                </select>

                <br /><br />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                />

                <br /><br />

                <input
                    type="date"
                    name="transaction_date"
                    value={formData.transaction_date}
                    onChange={handleChange}
                />

                <br /><br />

                <button
                    type="submit"
                    className="add-btn"
                >
                    Add Transaction
                </button>
            </form>
        </div>
    );
}

export default TransactionForm;