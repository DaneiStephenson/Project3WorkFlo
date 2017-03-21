angular
    .module('workFlo.loginHomePage') // No array, as we are "extending" the module
    .config(loginHomePageConfig);

function loginHomePageConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
    // REMEMBER: AngularJS is a single-page application framework. This means we
    // don't have the concept of "pages" but instead we use the concepts of "states"
    $stateProvider.state({
        name: 'loginHomePage', // name of the route
        url: '/loginHomePage', // url endpoint for the route
        templateUrl: '/workFlo/features/loginHomePage/loginHomePage.html', // The url to the view template
        controller: 'LoginHomePageCtrl', // The name of the controller to use for this route
        controllerAs: 'LoginHomePageVM' // The namespace for the view to access the view model
    })
}
