const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    info: {
      title: 'API Docs for Cosmetic Web Application',
      version: '1.0.0',
      description: 'Your API Description',
    },
    basePath: '/',
  },
  apis: ['./routes/authRoute.js', './routes/productRoute.js'],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
