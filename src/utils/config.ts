//const root = "https://mikuec2020.com"
const root = "http://localhost:3010"
const clientConfig = () => {

    let  url = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_URL : process.env.REACT_APP_PRODUCTION_URL;
    return {
        root: url,
        qr: root + "/qr.png",
        googleLogin: root + "/auth/google",
        twitterLogin: root + "/auth/twitter",
        zip: root + "/vll-live-app.zip",
        youtube: process.env.YOUTUBE_CHANNEL_URL,
        youtubeLive: process.env.YOUTUBE_LIVE_URL,
        count: process.env.LIVE_LIMIT,
    }

}

export const ClientConfig = clientConfig();
