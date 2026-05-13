const express = require("express");

const app = express();
const PORT = 3000;

const viewRoutes = require('./routes/getHtmlViews');
app.use('/', viewRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});