var keystone = require('keystone');

keystone.init({
  'cookie secret': 'secure string goes here',
  'name': 'my-project',
  'user model': 'User',
  'auto update': true,
  'auth': true,
  'static': [
    './server/public/js/',
    './server/public/img/',
  ],
  'views': 'src',
});

keystone.import('server/models');

keystone.set('routes', require('./server/routes'));

keystone.start();
