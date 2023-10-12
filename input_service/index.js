// const express = require('express');
// const axios = require('axios');
// const app = express();
// const port = 5000;

// app.use(express.json());

// app.post('/calculate', async (req, res) => {
//   const { num1, num2 } = req.body;
//     console.log(num1, num2);
//   try {
//     // Kirim permintaan ke Layanan Penambahan
//     const additionResponse = await axios.post('http://localhost:3000/add', { num1, num2 });

//     // Kirim permintaan ke Layanan Pengurangan
//     const subtractionResponse = await axios.post('http://localhost:4000/subtract', { num1, num2 });

//     res.json({
//       additionResult: additionResponse.data.result,
//       subtractionResult: subtractionResponse.data.result,
//     });
//   } catch (error) {
//     res.status(500).json({ error: 'Gagal melakukan perhitungan' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Layanan Input berjalan di http://localhost:${port}`);
// });

//============= Form-data ==============
// const express = require('express');
// const axios = require('axios');
// const multer = require('multer');
// const app = express();
// const port = 5000;

// const upload = multer();

// app.use(express.json());
// app.use(upload.none()); // Menggunakan multer untuk mengurai form-data

// app.post('/calculate', async (req, res) => {
//   const num1 = req.body.num1;
//   const num2 = req.body.num2;
//   console.log(num1, num2);

//   try {
//     // Kirim permintaan ke Layanan Penambahan
//     const additionResponse = await axios.post('http://localhost:3000/add', { num1, num2 });

//     // Kirim permintaan ke Layanan Pengurangan
//     const subtractionResponse = await axios.post('http://localhost:4000/subtract', { num1, num2 });

//     res.json({
//       additionResult: additionResponse.data.result,
//       subtractionResult: subtractionResponse.data.result,
//     });
//   } catch (error) {
//     res.status(500).json({ error: 'Gagal melakukan perhitungan' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Layanan Input berjalan di http://localhost:${port}`);
// });


// ================ Params =================
// const express = require('express');
// const axios = require('axios');
// const app = express();
// const port = 5000;

// app.use(express.json());

// app.get('/calculate', async (req, res) => {
//   const num1 = req.query.num1; // Mengambil nilai parameter num1 dari URL
//   const num2 = req.query.num2; // Mengambil nilai parameter num2 dari URL
//   console.log(num1, num2);

//   try {
//     // Kirim permintaan ke Layanan Penambahan
//     const additionResponse = await axios.post('http://localhost:3000/add', { num1, num2 });

//     // Kirim permintaan ke Layanan Pengurangan
//     const subtractionResponse = await axios.post('http://localhost:4000/subtract', { num1, num2 });

//     res.json({
//       additionResult: additionResponse.data.result,
//       subtractionResult: subtractionResponse.data.result,
//     });
//   } catch (error) {
//     res.status(500).json({ error: 'Gagal melakukan perhitungan' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Layanan Input berjalan di http://localhost:${port}`);
// });

const express = require('express');
const axios = require('axios');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const app = express();
const port = 5000;

// Definisikan konfigurasi Swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Calculator API',
      description: 'API untuk melakukan perhitungan dengan layanan penambahan dan pengurangan',
      version: '1.0.0',
    },
  },
  apis: ['index.js'],
};

// Inisialisasi Swagger
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Menambahkan endpoint Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /calculate:
 *   get:
 *     description: Melakukan perhitungan dengan layanan penambahan dan pengurangan
 *     parameters:
 *       - name: num1
 *         in: query
 *         description: Angka pertama
 *         required: true
 *         type: integer
 *       - name: num2
 *         in: query
 *         description: Angka kedua
 *         required: true
 *         type: integer
 *     responses:
 *       '200':
 *         description: Hasil perhitungan
 */
app.get('/calculate', async (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;
    console.log(num1, num2);
  
    try {
      // Kirim permintaan ke Layanan Penambahan
      const additionResponse = await axios.post('http://localhost:3000/add', { num1, num2 });
  
      // Kirim permintaan ke Layanan Pengurangan
      const subtractionResponse = await axios.post('http://localhost:4000/subtract', { num1, num2 });
  
      res.json({
        additionResult: additionResponse.data.result,
        subtractionResult: subtractionResponse.data.result,
      });
    } catch (error) {
      res.status(500).json({ error: 'Gagal melakukan perhitungan' });
    }
  });
  
  app.listen(port, () => {
  console.log(`Layanan Input berjalan di http://localhost:${port}`);
})