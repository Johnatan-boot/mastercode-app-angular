const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token)
    return res.status(403).json({ message: 'Token não fornecido' });

  const tokenLimpo = token.replace('Bearer ', '');

  jwt.verify(tokenLimpo, 'secreta123', (err, decoded) => {
    if (err)
      return res.status(401).json({ message: 'Token inválido ou expirado' });

    req.user = decoded;
    next();
  });
}

module.exports = verifyToken;
