/**
 * Contrôleur de l'application
 */
export default class AppController {

    /**
     * Constructeur permettant l'injection de dépendances
     *
     * @param initProperties
     */
    constructor(initProperties) {
        'ngInject';

        Object.assign(this, {
            initProperties
        });
    }



}
