import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

import routes from './routes';
import './database';
import uploadConfig from './config/upload';
import globalErrors from './errors/globalErrors';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use(globalErrors);

app.listen(process.env.PORT || 3333);
