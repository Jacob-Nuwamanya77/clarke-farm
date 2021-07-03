const express = require('express');

const fs = require('fs');

const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'src/assets')));

app.get('/api/:type', (req, res) => {
  fs.readFile(`./data/${req.params.type}.json`, (error, data) => {
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  });
});

app.listen(3000, () => console.log('Listening on port 3000'));
