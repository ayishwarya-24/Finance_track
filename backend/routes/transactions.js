const express = require("express");

const router = express.Router();

const db = require("../config/db");

router.post("/", (req, res) => {
    const {
        userId,
        amount,
        type,
        category,
        description,
        transaction_date
    } = req.body;

    const sql = `
        INSERT INTO transactions
        (user_id, amount, type, category, description, transaction_date)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            userId,
            amount,
            type,
            category,
            description,
            transaction_date
        ],
        (err, result) => {
            if (err) {
                console.error(err);

                return res.status(500).json({
                    message: "Failed to add transaction"
                });
            }

            res.status(201).json({
                message: "Transaction added"
            });
        }
    );
});


router.get("/:userId", (req, res) => {
    const { userId } = req.params;

    const sql = `
        SELECT *
        FROM transactions
        WHERE user_id = ?
        ORDER BY transaction_date DESC
    `;

    db.query(sql, [userId], (err, results) => {
        if (err) {
            console.error(err);

            return res.status(500).json({
                message: "Failed to fetch transactions"
            });
        }

        res.json(results);
    });
});


module.exports = router;