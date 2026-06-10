const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();

const db = require("../config/db");

router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const sql =
            "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)";

        db.query(
            sql,
            [username, email, hashedPassword],
            (err, result) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({
                        message: "Registration failed"
                    });
                }

                res.status(201).json({
                    message: "User registered successfully"
                });
            }
        );
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server error"
        });
    }
});

module.exports = router;