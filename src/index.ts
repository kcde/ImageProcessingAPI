import express from 'express';
import api from './routes';

const app = express();

const PORT = 3300;

app.use('/api', api);

app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}/`);
});

export default app;
