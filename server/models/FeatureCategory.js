const keystone = require('keystone');
const Types = keystone.Field.Types;
const path = require('path');

const FeatureCategory = new keystone.List('Feature Category', {
  autokey: { path: 'slug', from: 'name', unique: true },
  defaultSort: '-createdAt',
});

const featureCategoryImgStorage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
     // required; path where the files should be stored
    path: keystone.expandPath('server/public/img'),
    generateFilename: function (file, index) {
      return file.originalname;
    },
    whenExists: 'error',
     // path where files will be served
    publicPath: '/public/img',
  },
});

FeatureCategory.add({
  name: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: false
  },
  category_page: {
    type: Types.Url,
    required: false
  },
  state: {
    type: Types.Select,
    options: 'active, inactive',
    default: 'inactive' },
  image: {
    type: Types.File,
    storage: featureCategoryImgStorage,
    mimetype: '.jpeg, .jpg, .gif, .svg, .png',
  },
});

// Setting the default order of the columns on the admin tab
FeatureCategory.defaultColumns = 'name, state|20%, caption';
FeatureCategory.register();
