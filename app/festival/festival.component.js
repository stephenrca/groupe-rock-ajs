import controller from './festival.controller';
import template from './festival.html';
import './festival.scss';

export default {
    controller,
    template,
    bindings: {
        name: '<'
    }
};
