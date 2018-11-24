/**
 * @author Maria Fernanda Serna
 * Main application routes
 */

// Import Endpoints
const scrap = require('./src');

module.exports = (app) => {

  // Insert routes below
  app.use('/api/scrap', scrap);
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.json({ api: 'V1.0', description: 'API SCRAP'});
    });
};