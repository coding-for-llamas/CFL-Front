import { normalize, join } from 'path';
import express, { static } from 'express';
import { HTTPS } from 'express-sslify';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const app = express();
let port = Number(process.env.PORT);
if (process.env.NODE_ENV === 'test') port += 10;
/* istanbul ignore if */
if (process.env.NODE_ENV === 'production') app.use(HTTPS({ trustProtoHeader: true }));

app.use(static(normalize(join(__dirname, 'dist'))));
app.use('/', static(normalize(join(__dirname, 'dist'))));
app.get('/*', (request, response) => {
  response.sendFile(normalize(join(__dirname, 'dist/index.html')));
});
app.listen(port, () => {
  console.log(`Magic happens on port ${process.env.PORT}`); // eslint-disable-line no-console
});

export default app;
