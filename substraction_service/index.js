const express = require('express');
const app = express();
const port = 4000;

app.use(express.json());

app.post('/subtract', (req, res) => {
  const { num1, num2 } = req.body;
  console.log(num1, num2)
  const result = num1 - num2;
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Layanan Pengurangan berjalan di http://localhost:${port}`);
});
