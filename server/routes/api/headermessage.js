var keystone = require('keystone');

/**
 * Get Header Message
 */

var HeaderMessage = keystone.list('Header Message');

// Creating the API end point
exports.list = function (req, res) {
  // Querying the data this works similarly to the Mongo db.collection.find() method
  HeaderMessage.model.find(function (err, items) {
    // Make sure we are handling errors
    if (err) return res.apiError('database error', err);
    res.apiResponse({
      // Filter featureCategory by
      headerMessages: items,
    });

  // Using express req.query we can limit the number of recipes returned by setting a limit property in the link
  }).limit(Number(req.query.limit));
};
