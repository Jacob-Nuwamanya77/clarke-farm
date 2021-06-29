const express = require('express');

const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/src/assets/')));
app.use(express.json());

app.get('/api', (req, res) => {
  res.send('proxy is set up - Bauer');
});
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
