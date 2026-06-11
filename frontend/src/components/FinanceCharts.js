import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid
} from "recharts";

function FinanceCharts({ transactions }) {

    const COLORS = [
        "#10B981",
        "#EF4444"
    ];

    const income = transactions
        .filter(t => t.type === "income")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const expenses = transactions
        .filter(t => t.type === "expense")
        .reduce((sum, t) => sum + Number(t.amount), 0);

    const pieData = [
        {
            name: "Income",
            value: income
        },
        {
            name: "Expenses",
            value: expenses
        }
    ];

    const categoryData = {};

    transactions
        .filter(t => t.type === "expense")
        .forEach(t => {
            categoryData[t.category] =
                (categoryData[t.category] || 0) +
                Number(t.amount);
        });

    const barData = Object.keys(categoryData).map(category => ({
        category,
        amount: categoryData[category]
    }));

    return (
        <div className="card">
            <h2>Finance Charts</h2>

            <h3>Income vs Expenses</h3>

            <PieChart width={400} height={300}>
                <Pie
                    data={pieData}
                    dataKey="value"
                    outerRadius={100}
                    label
                >
                    {pieData.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[index]}
                        />
                    ))}
                </Pie>

                <Tooltip />
            </PieChart>

            <h3>Expenses by Category</h3>

            <BarChart
                width={500}
                height={300}
                data={barData}
            >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="category" />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="amount"
                  fill="#8B5CF6"
                />
            </BarChart>
        </div>
    );
}

export default FinanceCharts;