import app from './app';
const dotenv = require('dotenv');

dotenv.config();

app.listen(process.env.PORT);

export default app;