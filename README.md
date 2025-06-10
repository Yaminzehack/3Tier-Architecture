
# 🏗️ 3-Tier Web Architecture Demo

This project demonstrates a simple **3-Tier Architecture**: Web Tier (Frontend), App Tier (Backend), and DB Tier (MySQL).

## 🎯 Features

- Web Tier: HTML + Tailwind UI with a button to trigger backend.
- App Tier: Node.js + Express server with logging.
- DB Tier: MySQL database for log storage.
- Fully functional local setup.

## 📸 Preview
**Web-tier**
![image](https://github.com/user-attachments/assets/7a72080f-22f1-4102-8b3d-90cc887d82a1)

**App-tier**
![2025-06-08_18-35](https://github.com/user-attachments/assets/2717ed57-a3c4-4d6d-97c2-fa00579b9e2c)

**DB-tier**
![2025-06-08_18-36](https://github.com/user-attachments/assets/da2e905f-0eca-41b8-9454-c4620ca0cf3b)



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

