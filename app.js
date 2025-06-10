const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

// Add request logger middleware
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.use(cors());
app.use(express.json());

// MySQL connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'yaminze1234@#',
  database: 'yourdbname'
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// POST route to log data
app.post('/logs', (req, res) => {
  const { source, timestamp } = req.body;
  if (!source || !timestamp) {
    return res.status(400).send('Missing source or timestamp');
  }

  // Convert ISO string to MySQL DATETIME format
  const date = new Date(timestamp);
  const formatted = date.toISOString().slice(0, 19).replace('T', ' '); // YYYY-MM-DD HH:MM:SS

  const sql = 'INSERT INTO logs (source, timestamp) VALUES (?, ?)';
  db.query(sql, [source, formatted], (err, result) => {
    if (err) {
      console.error('Failed to insert log:', err);
      return res.status(500).send('Failed to insert log');
    }
    res.send('Log saved successfully');
  });
});


app.listen(port, () => {
  console.log(`Server running on http://127.0.0.1:${port}`);
});
