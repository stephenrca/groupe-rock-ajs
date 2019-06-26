export default ($routeProvider, $compileProvider, $locationProvider) => {
    'ngInject';
    $locationProvider.hashPrefix('');

    // Par defaut redirection vers home.html
    $routeProvider
        .when('/studio', {
            template: '<studio name="\'titan\'"></studio>'
        })
        .when('/festival', {
            template: '<festival name="\'DevFest 2019\'"></festival>'
        })
        .otherwise({
            redirectTo: '/'
        });

    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|javascript):/);
};
