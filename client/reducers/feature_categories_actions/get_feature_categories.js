import { GET_FEATURE_CATEGORIES } from '../../actions/actions';

export default function getFeatureCategories(state = {}, action) {
  switch (action.type) {
    case GET_FEATURE_CATEGORIES:
      return action.payload
  }
  return state;
}
