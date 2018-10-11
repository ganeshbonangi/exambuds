/*eslint no-process-env:0*/

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
        useMongoClient: true,
        uri: process.env.MONGODB_URI || 'mongodb://localhost/examcolors',
    	debug:true
    },

    // Seed database on startup
    seedDB: true,
};
