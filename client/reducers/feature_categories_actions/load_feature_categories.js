import { LOADING_FEATURE_CATEGORIES } from '../../actions/actions';

export default function loadingFeatureCategories(state = true, action) {
  switch (action.type) {
    case LOADING_FEATURE_CATEGORIES:
      return action.payload;
  }
  return state;
}
