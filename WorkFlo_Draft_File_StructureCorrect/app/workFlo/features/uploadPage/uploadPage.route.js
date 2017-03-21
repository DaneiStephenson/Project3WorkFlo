angular
    .module('workFlo.uploadPage') // No array, as we are "extending" the module
    .config(uploadPageConfig);

function uploadPageConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
    // REMEMBER: AngularJS is a single-page application framework. This means we
    // don't have the concept of "pages" but instead we use the concepts of "states"
    $stateProvider.state({
        name: 'uploadPage', // name of the route
        url: '/uploadPage', // url endpoint for the route
        templateUrl: '/workFlo/features/uploadPage/uploadPage.html', // The url to the view template
        controller: 'UploadPageCtrl', // The name of the controller to use for this route
        controllerAs: 'UploadPageVM' // The namespace for the view to access the view model
    })
}
