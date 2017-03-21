angular
    .module('workFlo.frontPage') // No array, as we are "extending" the module
    .config(frontPageConfig);

function frontPageConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
    // REMEMBER: AngularJS is a single-page application framework. This means we
    // don't have the concept of "pages" but instead we use the concepts of "states"
    $stateProvider.state({
        name: 'frontPage', // name of the route
        url: '/frontPage', // url endpoint for the route
        templateUrl: '/workFlo/features/frontPage/frontPage.html', // The url to the view template
        controller: 'FrontPageCtrl', // The name of the controller to use for this route
        controllerAs: 'FrontPageVM' // The namespace for the view to access the view model
    })
}
