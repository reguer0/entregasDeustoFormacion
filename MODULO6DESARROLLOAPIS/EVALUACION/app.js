const express = require("express");
const { specs, swaggerUi } = require('./swagger');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

const booksRouter = require('./routes/books');
app.use('/api/books', booksRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});