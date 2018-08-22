const keystone = require('keystone');
const Types = keystone.Field.Types;
const path = require('path');

const HeaderMessage = new keystone.List('Header Message', {
  autokey: { path: 'slug', from: 'content', unique: true },
});

HeaderMessage.add({
  content: {
    type: Types.Html,
    wysiwyg: true
  },
  state: {
    type: Types.Select,
    options: 'active, inactive',
    default: 'inactive' },

});

// Setting the default order of the columns on the admin tab
HeaderMessage.defaultColumns = 'content';
HeaderMessage.register();
