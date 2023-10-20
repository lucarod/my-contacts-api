const express = require('express');

const routes = require('./routes');

const app = express();

app.use(routes);

app.use((error, request, response, next) => {
  response.sendStatus(500);
});

// eslint-disable-next-line no-console
app.listen(3001, () => console.log('🔥 Server started at http://localhost:3001'));
