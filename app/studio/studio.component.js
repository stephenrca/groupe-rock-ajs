import controller from './studio.controller';
import template from './studio.html';
import './studio.scss';

export default {
    controller,
    template,
    bindings: {
        name: '<'
    }
};
