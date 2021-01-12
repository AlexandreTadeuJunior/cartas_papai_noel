const app = require('./server/config/express');
const config = require('./server/config/env');

app.listen(config.portApi, () => {
  console.log(
    `API Server iniciada e lendo a porta ${config.portApi} (${config.env})`
  );
});

module.exports = app;