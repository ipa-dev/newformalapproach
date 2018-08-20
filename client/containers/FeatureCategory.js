import React, { Component } from 'react';
import { connect } from 'react-redux';
// Remember our thunk this is where we will need to make use of it
import { featureCategoryFetchData } from '../actions/actions.js';
// We gonna use lodash to map over our recipe object
import _ from 'lodash';

class FeatureCategory extends Component {
  constructor(props) {
    super(props);
    // Bind our render recipe to function so we can use it in the render method
    this.renderFeatureCategory = this.renderFeatureCategory.bind(this)
  }

  // Fetch recipes when component is mounted
  componentDidMount() {
    const API_URL = 'http://localhost:3000/api/featurecategory/?list';
    this.props.fetchFeatureCategories(API_URL);
  }
// Function to render our recipe
  renderFeatureCategory() {
    return _.map(this.props.featureCategories, featureCategory => {
      // Check if there is an image to be displayed
      const img = featureCategory.image ? featureCategory.image.filename : '';

      // Make sure we show only published recipes
      if (featureCategory.state = "published") {
      return (
        <div>
          <h3>{featureCategory.name}</h3>
          <img style={{ width: '300px', height: '300px' }} src={img} />
          <p>{featureCategory.caption}</p>
        </div>
      );
    }
    });
  }
  render() {
    // If data is still loading
    if (this.props.loading) {
      return (
        <div>
          <h1>LOADING...</h1>
        </div>
      );
    }
    // Show feature category once data is loaded
      return (
        <div>
        {this.renderFeatureCategory()}
        </div>
      );
};
};

function mapStateToProps(state, ownProps) {
  // Things return here are showing in props for Recepie
  return {
    featureCategories: state.featureCategories,
    loading: state.loadFeatureCategories,
  };
}

// anything returned from here will end up in the props
const mapDispatchToProps = dispatch => ({
  // Our thunk will be mapped to this.props.fetchRecipe
  fetchRecipe: (url) => dispatch(recipesFetchData(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FeatureCategory);
