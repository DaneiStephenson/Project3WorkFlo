angular
    .module('workFlo.clickedImage') // No array, as we are "extending" the module
    .config(clickedImageConfig);

function clickedImageConfig($stateProvider) {
    // $stateProvider is an Angular service exposed by the ui-router library
    // this service allows us to define the "states" for our application
    //
    // REMEMBER: AngularJS is a single-page application framework. This means we
    // don't have the concept of "pages" but instead we use the concepts of "states"
    $stateProvider.state({
        name: 'clickedImage', // name of the route
        url: '/clickedImage', // url endpoint for the route
        // templateUrl: '/workFlo/features/searchPage/searchPage.html', // The url to the view template
        templateUrl: '/workFlo/features/clickedImage/clickedImage.html',
        controller: 'ClickedImageCtrl', // The name of the controller to use for this route
        controllerAs: 'ClickedImageVM' // The namespace for the view to access the view model
    })
}
