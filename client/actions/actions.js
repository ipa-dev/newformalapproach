import axios from 'axios';

// Exporting our actions
export const LOADING_FEATURE_CATEGORIES = 'LOADING_FEATURE_CATEGORIES';
export const GET_FEATURE_CATEGORIES = 'GET_FEATURE_CATEGORIES';

// An action to check if the recipes are loaded accepts true or false
export function loadingFeatureCategories(loading) {
  return {
    type: LOADING_FEATURE_CATEGORIES,
    payload: loading,
  };
}

// This will get the recipes from the API
export function fetchFeatureCategories(data) {
  return {
    type: GET_FEATURE_CATEGORIES,
    payload: data,
  };
}

// This is a redux thunk that will fetch our model data
export function featureCategoriesFetchData(url) {
  return (dispatch) => {
    const request = axios.get(url);
    request.then((response) => {
      dispatch(loadingFeatureCategories(false));
      dispatch(fetchFeatureCategories(response.data.featureCategories));
    });
  };
}
