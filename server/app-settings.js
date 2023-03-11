const allowedOrigins = ['http://localhost:3080', '127.0.0.1:3080'];

module.exports = {
  cors: {
    origin: allowedOrigins,
    optionsSuccessStatus: 200,
  },
};
