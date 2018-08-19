import { combineReducers } from 'redux';
import getFeatureCategories from './feature_categories_actions/get_feature_categories.js';
import loadingFeatureCategories from './feature_categories_actions/load_feature_categories.js';

const reducers = combineReducers({
  featureCategories: getFeatureCategories,
  loadFeatureCategories: loadingFeatureCategories,
});

export default reducers;
