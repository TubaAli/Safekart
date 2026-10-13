module.exports = {
  database: process.env.MONGODB_URI || 'mongodb://localhost:27017/ecommerce',
  port: process.env.PORT || 3000,
  secretKey: process.env.SESSION_SECRET || 'change-me',
};
