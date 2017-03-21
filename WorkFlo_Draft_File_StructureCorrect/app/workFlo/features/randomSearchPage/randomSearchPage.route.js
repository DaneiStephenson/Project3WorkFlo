angular
    .module('workFlo.randomSearchPage') // No array, as we are "extending" the module
    .config(randomSearchPageConfig);

function randomSearchPageConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
    // REMEMBER: AngularJS is a single-page application framework. This means we
    // don't have the concept of "pages" but instead we use the concepts of "states"
    $stateProvider.state({
        name: 'randomSearchPage', // name of the route
        url: '/randomSearchPage', // url endpoint for the route
        templateUrl: '/workFlo/features/randomSearchPage/randomSearchPage.html', // The url to the view template
        controller: 'RandomSearchPage', // The name of the controller to use for this route
        controllerAs: 'RandomSearchPage' // The namespace for the view to access the view model
    })
}
