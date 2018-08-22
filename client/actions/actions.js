import axios from 'axios';

// Exporting our actions
export const LOADING_FEATURE_CATEGORIES = 'LOADING_FEATURE_CATEGORIES';
export const GET_FEATURE_CATEGORIES = 'GET_FEATURE_CATEGORIES';
export const LOADING_HEADER_MESSAGE = 'LOADING_HEADER_MESSAGE';
export const GET_HEADER_MESSAGE = 'GET_HEADER_MESSAGE';


//FEATURE CATEGORIES
export function loadingFeatureCategories(loading) {
  return {
    type: LOADING_FEATURE_CATEGORIES,
    payload: loading,
  };
}

export function fetchFeatureCategories(data) {
  return {
    type: GET_FEATURE_CATEGORIES,
    payload: data,
  };
}

export function featureCategoriesFetchData(url) {
  return (dispatch) => {
    const request = axios.get(url);
    request.then((response) => {
      dispatch(loadingFeatureCategories(false));
      dispatch(fetchFeatureCategories(response.data.featureCategories));
    });
  };
}

//HEADER MESSAGE
export function loadingHeaderMessage(loading) {
  return {
    type: LOADING_HEADER_MESSAGE,
    payload: loading,
  };
}

export function fetchHeaderMessage(data) {
  return {
    type: GET_HEADER_MESSAGE,
    payload: data,
  };
}

export function headerMessageFetchData(url) {
  return (dispatch) => {
    const request = axios.get(url);
    request.then((response) => {
      dispatch(loadingHeaderMessage(false));
      dispatch(fetchHeaderMessage(response.data.headerMessages));
    });
  };
}
