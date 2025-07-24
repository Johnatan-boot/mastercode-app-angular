const jwt = require('jsonwebtoken');

const JWT_SECRET = 'minha_chave_super_secreta_123'; // mesmo que está no seu .env
const payload = { username: 'Ronaldinho' };

const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

console.log('Token gerado:\n', token);
