require('dotenv').config();
console.log('✅ JWT_SECRET carregado:', process.env.JWT_SECRET);

const JWT_SECRET = process.env.JWT_SECRET;
console.log('JWT_SECRET:', JWT_SECRET);

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Rotas
const authRoutes = require('./routes/auth.routes');
const pagarmeRoutes = require('./routes/pagarme.routes'); // <--- Nova rota

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Uso das rotas
app.use('/api/auth', authRoutes);
app.use('/api/pagarme', pagarmeRoutes); // 💳

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Backend rodando em http://localhost:${PORT}`);
});
