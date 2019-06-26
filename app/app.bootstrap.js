import angular from 'angular';
const moduleName = 'rock-band';

const getProperties = () => {
    const module = angular.module(moduleName);
    module.constant('initProperties', {
        nom : "AngularJS Rock's"
    });
};

const initApplication = () => {
    angular.element(document).ready(() => {
        angular.bootstrap(document, [moduleName], { strictDi: true });
    });
};

getProperties();
initApplication();
