const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// ✅ temporary database
let users = [];
let complaints = [];

// test
app.get('/', (req, res) => {
  res.send("Server Running");
});

// register
app.post('/register', (req, res) => {
  users.push(req.body);
  console.log("Users:", users);
  res.send("User Registered");
});

// login
app.post('/login', (req, res) => {
  console.log("Login Data:", req.body);
  res.send("Login Success");
});

// complaint
app.post('/complaint', (req, res) => {
  complaints.push(req.body);
  console.log("Complaints:", complaints);
  res.send("Complaint Submitted");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});