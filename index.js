var keystone = require('keystone');

keystone.init({
  'cookie secret': '6D61822FBEAED8635A4A52241FEC3',
  'name': 'Formal Approach',
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
