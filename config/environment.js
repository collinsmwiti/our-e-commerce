/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'e-commerce',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },
    /*Adding firebase*/
    firebase: {
      apiKey: "AIzaSyBr9Rim3D1ewHwrTXyf-h0BgBR1fJpbbmo",
      authDomain: "e-commerce-82d65.firebaseapp.com",
      databaseURL: "https://e-commerce-82d65.firebaseio.com",
      projectId: "e-commerce-82d65",
      storageBucket: "e-commerce-82d65.appspot.com",
      messagingSenderId: "710736747117"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
