// Use local.env.js for environment variables that will be set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://localhost:9000',
  SESSION_SECRET:   'authcell-secret',

  FACEBOOK_ID:      '332119257548154',
  FACEBOOK_SECRET:  '851d1dd69074d5b658f1b9d62fd91370',

  TWITTER_ID:       'app-id',
  TWITTER_SECRET:   'secret',

  GOOGLE_ID:        '558634436009-urgac7k97a2fc1epcr5t6ms2d09neojk.apps.googleusercontent.com',
  GOOGLE_SECRET:    'OWoXE2ZGurtvCWC9t52UWnbo',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};