var TwitterStrategy = require('passport-twitter').Strategy;

var twitter = new TwitterStrategy({
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: "http://127.0.0.1:1337/twitter/callback"
  },
  function(token, tokenSecret, userProfile, done) {
  	console.log(JSON.stringify(userProfile));
    done(null, token);
  });


module.exports = {
	twitter: twitter
}