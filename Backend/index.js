const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2/promise');  

const app = express();
app.use(bodyParser.json());

const port = 8000;

let conn;  

const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'webdb',
        port: 8700
    });
    console.log('Connected to MySQL database');
};

 
app.get('/users', async (req, res) => {
    const [rows] = await conn.query('SELECT * FROM users');
    res.json(rows);
});

 
app.post('/users', async (req, res) => {
    try {
        const user = req.body;
        const [result] = await conn.query(
            'INSERT INTO users SET ?', 
            user
        );

        res.json({
            message: 'User added successfully',
            insertId: result.insertId
        });

    } catch (err) {
        console.error('Error adding user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

 
app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const [rows] = await conn.query(
            'SELECT * FROM users WHERE id = ?', 
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(rows[0]);

    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

 
app.put('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = req.body;

        const [result] = await conn.query(
            'UPDATE users SET ? WHERE id = ?', 
            [user, id]
        );

        res.json({
            message: 'User updated successfully',
            affectedRows: result.affectedRows
        });

    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

 
app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const [result] = await conn.query(
            'DELETE FROM users WHERE id = ?', 
            [id]
        );

        res.json({
            message: 'User deleted successfully',
            affectedRows: result.affectedRows
        });

    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, async () => {
    await initMySQL();
    console.log(`Server is running on http://localhost:${port}`);
});