const root = "http://localhost:3010";
const clientConfig = {
    root: root,
    localLogin: root + '/auth/local',
    localSignup: root + '/auth/local/signup',
    googleClientId: "803486733304-v4dad0qdo2laaq5uaufna19qht9q4omv.apps.googleusercontent.com",
    googleClientSecret: "FB7UXp4AdG6tFdl4pR0R_iBV",
    googleLogin: root + "/auth/google",
    TWITTER_APIKEY: "5eNK6zHTeKwSkaRaTtEElI6iw",
    TWITTER_APIKEY_SECRET: "4BXegpxFThNyb5Yuhb4gdIu9693zgnCyMTqodW8zbbGEDYMwio",
    twitterLogin: root + "/auth/twitter",
    loginCallbackURL: root,
    logoutApi: root + "/auth/logout",
    usernameChange: root + "/api/user/property/set",
    TokenRefresh: root + "/api/token"
}

export default clientConfig;
