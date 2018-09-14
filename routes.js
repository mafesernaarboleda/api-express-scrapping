/**
 * @author Maria Fernanda Serna
 * Main application routes
 */

// Import Endpoints
const scrap = require('./src');

module.exports = (app) => {

  // Insert routes below
  app.use('/api/scrap', scrap);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.json({ api: 'V1.0', description: 'API SCRAP'});
    });
};