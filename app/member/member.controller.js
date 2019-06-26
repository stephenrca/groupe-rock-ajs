export default class memberController {
    constructor(playService) {
        'ngInject';
        this.playService = playService;
    }

    select() {
        if (this.isSelected) {
            this.playService.selectMember(this.name);
        } else {
            this.playService.unSelectMember(this.name);
        }
    }
}
