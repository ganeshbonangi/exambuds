/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
        useMongoClient: true,
        uri: process.env.MONGODB_URI || 'mongodb://localhost/exambuds-dev',
        options:{
        	useNewUrlParser: true
        }
    },

    // Seed database on startup
    seedDB: true
};
