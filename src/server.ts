require('dotenv').config();
import cors from 'cors';
import express from 'express';
import { corsCustomOrigin } from 'recipes/cors-origin-validation-using-regexp';

const app = express();

app.use(
  cors({
    origin: corsCustomOrigin,
  })
);
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'server is working' });
});
app.post('/create', (req, res) => {
  res.json(req.body);
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
// below calls from frontend should work
/*
 fetch('http://localhost:8000/')
      .then((res) => res.json())
      .then((data) => {
        console.log('----------', data)
      })
    fetch('http://localhost:8000/create', {
      method: 'POST',
      body: JSON.stringify({
        name: 'Rahul Gupta',
        age: 23,
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('----------', data)
      })
*/
