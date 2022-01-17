import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'berkantyazilim@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Berkant Cen',
    email: 'berkantcen@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'İpek Cen',
    email: 'cenberkant@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
