const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const USERS_FILE = path.join(__dirname, 'usuarios.json');

// 🔁 Carrega usuários do arquivo
function carregarUsuarios() {
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, '[]');
  }
  
  const data = fs.readFileSync(USERS_FILE, 'utf8');
  
  // Se o arquivo estiver vazio, retorna array vazio
  if (!data) return [];
  
  try {
    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao ler usuarios.json:', error);
    return [];
  }
}

// 💾 Salva usuários no arquivo
function salvarUsuarios(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

// ✅ REGISTRO
exports.register = (req, res) => {
  const { username, password } = req.body;
  const users = carregarUsuarios();

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: 'Usuário já existe' });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ username, password: hashedPassword });

  salvarUsuarios(users);

  res.status(201).json({ message: 'Usuário cadastrado com sucesso' });
};

// ✅ LOGIN
exports.login = (req, res) => {
  const { username, password } = req.body;
  const users = carregarUsuarios();
  const user = users.find(u => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }

  const token = jwt.sign({ username }, 'secreta123', { expiresIn: '1h' });

  res.json({ token });
};

// ✅ ROTA /me (protegida)
exports.me = (req, res) => {
  const users = carregarUsuarios();
  const user = users.find(u => u.username === req.user.username);

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  res.json({ username: user.username });
};
