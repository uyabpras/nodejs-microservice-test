const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  console.log(typeof(num1), typeof(num2))
  const result = parseInt(num1) + parseInt(num2);
  res.json({ result });
  console.log(result);
});

app.listen(port, () => {
  console.log(`Layanan Penambahan berjalan di http://localhost:${port}`);
});
