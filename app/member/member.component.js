import controller from './member.controller';
import template from './member.html';
import './member.scss';

export default {
    controller,
    template,
    bindings: {
        name: '<',
        isSelected: '=',
    }
};
