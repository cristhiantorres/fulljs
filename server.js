import config from './config';
import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import api from './api';

const server = express();


server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: 'Loading'
  });
});

server.use('/api', api);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});
