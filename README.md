# 🎣 Phisher – Suspicious Link & Email Scanner

Phisher is a web application that helps users detect potentially malicious URLs and email addresses. Built with **React + TypeScript** on the frontend and **Python (Flask/Django)** on the backend, it provides a simple interface to scan and assess threats in real time.

---

## 🌐 Live Demo

🔗 [Visit the live site on Netlify](https://phisherr.netlify.app)

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Vite (or CRA)
- **Backend:** Python (Flask/Django)
- **Hosting:** Netlify (Frontend), Render/Railway/etc. (Backend)

---

## 📁 Project Structure

phisher-frontend/
├── public/
├── src/
│ ├── components/ # UI components (e.g., ScanForm.tsx)
│ ├── pages/ # Page components
│ ├── utils/ # API functions
│ ├── App.tsx # Main app
│ ├── index.tsx # Entry point
├── .env # Environment variables (not committed)
├── package.json
├── tsconfig.json

yaml
Copy
Edit

---

## 🚀 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/marthaea/phisher-app.git
cd phisher-app
Install dependencies

bash
Copy
Edit
npm install
Run the development server

bash
Copy
Edit
npm run dev
If you're using Create React App, use npm start instead

🌍 Environment Variables
Create a .env file in the root of the project:

env
Copy
Edit
VITE_API_URL=https://phisher-api.onrender.com
In Netlify, add this under Site settings > Environment variables so the deployed frontend can access it.

🔗 Backend Integration (For Collaborators)
To Dos:
✅ Deploy the Python backend (e.g., to Render, Railway, or Heroku)

✅ Enable CORS so the frontend can access the API

✅ Share the base API URL (e.g., https://phisher-api.onrender.com)

✅ Add API functions in src/utils/api.ts

✅ Test API communication in relevant components (like ScanForm.tsx)

Example API usage:
ts
Copy
Edit
// src/utils/api.ts
export async function scanUrl(url: string) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/scan-url`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
  });
  return await response.json();
}
🤝 Contributing
Contributions are welcome!
Please open an issue or pull request for any bug fixes, improvements, or new features.

📄 License
MIT License.
Feel free to use and adapt this project for your own educational or non-commercial use.

👩🏾‍💻 Created by
 Martha Praise Katusiime, Princess Adaeze and Lishya Muchiri; a team of talented developers from Uganda, Kenya 🇰🇪 and Nigeria 🇳🇬.

GitHub Repo: github.com/marthaea/phisher-app
