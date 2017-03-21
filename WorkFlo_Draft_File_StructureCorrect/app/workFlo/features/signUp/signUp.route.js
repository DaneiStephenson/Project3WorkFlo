angular
    .module('workFlo.signUp') // No array, as we are "extending" the module
    .config(signUpConfig);

function signUpConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
    // REMEMBER: AngularJS is a single-page application framework. This means we
    // don't have the concept of "pages" but instead we use the concepts of "states"
    $stateProvider.state({
        name: 'signUp', // name of the route
        url: '/signUp', // url endpoint for the route
        templateUrl: '/workFlo/features/signUp/signUp.html', // The url to the view template
        controller: 'SignUpCtrl', // The name of the controller to use for this route
        controllerAs: 'SignUpVM' // The namespace for the view to access the view model
    })
}
