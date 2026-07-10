// buggy.js - deliberately broken code for testing CodeLens AI

const express = require('express')
const app = express()

// Bug 1: SQL Injection vulnerability
app.get('/user', (req, res) => {
  const query = "SELECT * FROM users WHERE id = " + req.query.id
  db.execute(query, (err, result) => {
    res.json(result)
  })
})

// Bug 2: Off-by-one error
function getLastItems(arr, count) {
  const items = []
  for (var i = arr.length; i > arr.length - count; i--) {
    items.push(arr[i])
  }
  return items
}

// Bug 3: Null reference
function getUserName(user) {
  return user.profile.name.toUpperCase()
}

// Bug 4: Memory leak
const cache = {}
app.get('/data/:id', (req, res) => {
  const id = req.params.id
  if (!cache[id]) {
    cache[id] = fetchExpensiveData(id)
  }
  res.json(cache[id])
})

// Bug 5: Exposed secret
const API_KEY = "sk-prod-abc123secretkey456"
const DB_PASSWORD = "admin123"

app.listen(3000)
