angular
    .module('workFlo', [
        // Here we define the modules dependencies and any "global" dependencies
        // Modules that this module depends on will inherit this modules dependencies

        // Global Dependencies
        'ui.router',
'workFlo.searchPage',
        // Features
        'workFlo.clickedImage',
       //  'workFlo.contactPage',
       'workFlo.filteredRequestPage',
       // 'workFlo.frontPage',
       // 'workFlo.loadingPage'
       // 'workFlo.logInHomePage',
       // 'workFlo.randomSearchPage',
       
       // 'workFlo.signIn',
       // 'workFlo.signUp',
       // 'workFlo.uploadPage'
        
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    // Here we configure the application

    // If the URL does not exist as a route, redirect to /
    $urlRouterProvider.otherwise('/');
}
