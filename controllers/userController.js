const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    name: 'Andi Laksana',
    username: 'andiganteng',
    password: bcrypt.hashSync('sembarang123', 10),
    createdAt: new Date('2025-01-01T10:00:00Z'),
    updatedAt: new Date('2025-01-01T10:00:00Z')
  },
  {
    id: 2,
    name: 'Laksana Andi',
    username: 'andikeren',
    password: bcrypt.hashSync('karepmu456', 10),
    createdAt: new Date('2025-02-01T12:00:00Z'),
    updatedAt: new Date('2025-02-01T12:00:00Z')
  }
];

exports.getUsers = (req, res) => {
  try {
    // Return users without passwords for security
    const safeUsers = users.map(({ password, ...user }) => user);
    res.status(200).json(safeUsers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};