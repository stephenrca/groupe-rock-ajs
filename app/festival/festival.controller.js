export default class festivalController {
    constructor(playService) {
        'ngInject';
        this.playService = playService;
    }

    play() {
        this.playService.playConcert(this.name);
    }
}
