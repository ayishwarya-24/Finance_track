import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            localStorage.setItem("userId", data.userId);
            localStorage.setItem("username", data.username);

            navigate("/dashboard");

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">

                <h1 className="auth-title">
                    FinanceTrack
                </h1>

                <p className="auth-subtitle">
                    Sign in to your account
                </p>

                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <button
                        type="submit"
                        className="auth-btn"
                    >
                        Login
                    </button>

                </form>

            </div>
        </div>
    );
}

export default Login;