angular
    .module('workFlo.filteredRequestPage') // No array, as we are "extending" the module
    .config(filteredRequestPageConfig);

function filteredRequestPageConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
    // REMEMBER: AngularJS is a single-page application framework. This means we
    // don't have the concept of "pages" but instead we use the concepts of "states"
    $stateProvider.state({
        name: 'filteredRequestPage', // name of the route
        url: '/filteredRequestPage', // url endpoint for the route
        templateUrl: '/workFlo/features/filteredRequestPage/filteredRequestPage.html', // The url to the view template
        controller: 'FilteredRequestPageCtrl', // The name of the controller to use for this route
        controllerAs: 'FilteredRequestPageVM' // The namespace for the view to access the view model
    })
}
