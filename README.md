
# 🏗️ 3-Tier Web Architecture Demo

This project demonstrates a simple **3-Tier Architecture**: Web Tier (Frontend), App Tier (Backend), and DB Tier (MySQL).

## 🎯 Features

- Web Tier: HTML + Tailwind UI with a button to trigger backend.
- App Tier: Node.js + Express server with logging.
- DB Tier: MySQL database for log storage.
- Fully functional local setup.

## 📸 Preview
![alt text](image.png)


## 📁 Folder Structure

```
3tier-architecture/
│
├── web-tier/         # Frontend files (HTML + Tailwind)
│   └── iis-site/
│       └── index.html
│
├── app-tier/         # Node.js backend
│   └── backend/
│       ├── app.js
│       └── .env
│
└── db-tier/          # MySQL scripts
    └── schema.sql
```

## 🚀 Usage

### Start Backend (App Tier)

```bash
cd app-tier/backend
node app.js
```

### Start Frontend (Web Tier)

Open `web-tier/iis-site/index.html` in a browser or serve using Live Server.

### MySQL Setup

```sql
CREATE DATABASE logsdb;
USE logsdb;

CREATE TABLE logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    source VARCHAR(255),
    timestamp DATETIME
);
```

## 📬 API Endpoint

```http
POST /logs
Content-Type: application/json

{
  "source": "Web-Tier",
  "timestamp": "2025-06-08T12:59:36.287Z"
}
```

## 🛠️ Fixes Applied

- ✅ Timestamp format corrected for MySQL.
- ✅ Tailwind UI integrated.
- ✅ Correct error handling.

---

Made with ❤️ for demo and learning purposes.
Made by Prabhat Upadhyay
Linkedin : https://www.linkedin.com/in/prabhat-upadhyay-/

