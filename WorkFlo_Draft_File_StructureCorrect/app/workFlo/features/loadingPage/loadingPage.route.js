angular
    .module('workFlo.loadingPage') // No array, as we are "extending" the module
    .config(loadingPageConfig);

function loadingPageConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
    // REMEMBER: AngularJS is a single-page application framework. This means we
    // don't have the concept of "pages" but instead we use the concepts of "states"
    $stateProvider.state({
        name: 'loadingPage', // name of the route
        url: '/loadingPage', // url endpoint for the route
        templateUrl: '/workFlo/features/loadingPage/loadingPage.html', // The url to the view template
        controller: 'LoadingPageCtrl', // The name of the controller to use for this route
        controllerAs: 'LoadingPageVM' // The namespace for the view to access the view model
    })
}
