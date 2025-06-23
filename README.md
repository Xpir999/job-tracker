# 🧾 Job Tracker

A full-stack application that allows users to track their job applications, statuses, and related notes — inspired by platforms like Huntr.co. Built with a Node.js/Express backend and a React frontend connected via a MySQL database.

---

## 🛠 Tech Stack

**Frontend**
- React.js
- JavaScript
- HTML/CSS (optionally styled with Tailwind or Bootstrap)

**Backend**
- Node.js
- Express.js
- Sequelize ORM
- MySQL

**Tools**
- Postman & Thunder Client (API testing)
- Visual Studio Code
- dotenv for environment management
- CORS for frontend-backend communication

---

## 🚀 Features

- Create, Read, Update, and Delete job applications
- Track key fields like company, position, application status, and notes
- Cleanly separated frontend and backend with organized MVC structure
- CORS-enabled for full frontend/backend integration
- Environment variable support for secure DB credentials
- API tested with Postman

---

## 📂 Project Structure

job-tracker/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── config/
│ ├── server.js
│ └── .env
├── frontend/
│ ├── components/
│ ├── App.js
│ └── ...

yaml
Copy
Edit

---

## ⚙️ Installation & Setup

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
Install dependencies:

bash
Copy
Edit
npm install
Create a .env file and configure:

ini
Copy
Edit
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=job_tracker_db
Sync database and start the server:

bash
Copy
Edit
node server.js
Frontend Setup
Navigate to the frontend folder:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Start the React app:

bash
Copy
Edit
npm start
✅ To-Do / Future Enhancements
Add authentication (JWT or Firebase)

Add filters and search functionality

Analytics dashboard (applications by status)

Mobile responsiveness and UI polish (Tailwind CSS or Bootstrap)

Deployment (Render for backend, Vercel/Netlify for frontend)

📸 Screenshots
<!-- Add image links here -->
Coming soon...

👤 Author
Douglas Mavarez
📧 douglasandres1997@hotmail.com
🔗 LinkedIn
💻 GitHub

📃 License
This project is licensed under the MIT License.
