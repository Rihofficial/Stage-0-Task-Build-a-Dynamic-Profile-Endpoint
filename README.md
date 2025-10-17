# 🐱 Profile API

A simple Node.js/Express API that returns profile data and a random cat fact.

## 🚀 Endpoint
GET /me

### Response Example
```json
{
  "status": "success",
  "user": {
    "email": "youremail@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T06:45:22.347Z",
  "fact": "Cats can rotate their ears 180 degrees."
}
🧰 Setup
bash
Copy code
git clone https://github.com/yourusername/profile-api.git
cd profile-api
npm install
