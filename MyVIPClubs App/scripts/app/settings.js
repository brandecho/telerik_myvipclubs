/**
 * Application Settings
 */

var appSettings = {

    everlive: {
        apiKey: 'LMt6rE1Cn4ZUajYr', // Put your Backend Services API key here
        scheme: 'http'
    },

    eqatec: {
        productKey: '$EQATEC_PRODUCT_KEY$',  // Put your EQATEC product key here
        version: '1.0.0.0' // Put your application version here
    },
    
    feedback: {
        apiKey: '$APPFEEDBACK_API_KEY$'  // Put your AppFeedback API key here
    },

    facebook: {
        appId: '124611314297295', // Put your Facebook App ID here
        redirectUri: 'https://myvipclubs.com' // Put your Facebook Redirect URI here
    },

    google: {
        clientId: '30879657255-lg5621a9rgdvtr3v27otnejrl5hmd21h.apps.googleusercontent.com', // Put your Google Client ID here
        redirectUri: 'http://www.myvipclubs.com/wp-content/plugins/Tevolution/tmplconnector/monetize/templatic-registration/hybridauth/?hauth.done=Google' // Put your Google Redirect URI here
    },

    liveId: {
        clientId: '000000004C10D1AF', // Put your LiveID Client ID here
        redirectUri: 'https://login.live.com/oauth20_desktop.srf' // Put your LiveID Redirect URI here
    },

    adfs: {
        adfsRealm: '$ADFS_REALM$', // Put your ADFS Realm here
        adfsEndpoint: '$ADFS_ENDPOINT$' // Put your ADFS Endpoint here
    },

    messages: {
        mistSimulatorAlert: 'The social login doesn\'t work in the In-Browser Client, you need to deploy the app to a device, or run it in the simulator of the Windows Client or Visual Studio.',
        removeActivityConfirm: 'Are you sure you want to delete this Activity?'
    }
};
