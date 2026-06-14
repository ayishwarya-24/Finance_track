import { useState } from "react";

function BudgetGoal({ transactions }) {
    const [budget, setBudget] = useState(5000);

    const expenses = transactions
        .filter(t => t.type === "expense")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const remaining = budget - expenses;

    const changeBudget = () => {
        const newBudget = prompt(
            "Enter Monthly Budget",
            budget
        );

        if (newBudget) {
            setBudget(Number(newBudget));
        }
    };

    return (
        <div className="budget-section">
            <h2>Monthly Budget</h2>

            <div className="budget-grid">
                <div>
                    <span>Budget Goal</span>
                    <h3 className="budget-number">
                         AED {budget} 
                    </h3>
                </div>

                <div>
                    <span>Spent</span>
                    <h3 className="budget-number">
                        AED {expenses}
                    </h3>
                </div>

                <div>
                    <span>Remaining</span>
                    <h3 className="budget-number">
                        AED {remaining}
                    </h3>
                </div>
            </div>

            <button
                className="edit-btn"
                onClick={changeBudget}
            >
                Change Budget
            </button>
        </div>
    );
}

export default BudgetGoal;