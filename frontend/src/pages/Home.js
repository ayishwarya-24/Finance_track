import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1 className="auth-title">
                    FinanceTrack
                </h1>

                <p className="auth-subtitle">
                    Manage your income, expenses,
                    and budget goals with ease.
                </p>

                <Link to="/login">
                    <button className="auth-btn home-login">
                        Login
                    </button>
                </Link>

                <Link to="/register">
                    <button className="auth-btn home-register"
                        className="auth-btn"
                        style={{ marginTop: "10px" }}
                    >
                        Register
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;