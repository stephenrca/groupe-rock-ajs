export default class busController {

    constructor($location) {
        'ngInject';
        this.$location = $location;
    }

    goToStudio() {
        this.$location.path('studio');
    }
}
