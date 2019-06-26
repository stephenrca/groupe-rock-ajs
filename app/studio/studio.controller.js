export default class studioController {

    constructor(playService) {
        'ngInject';
        this.playService = playService;
        this.songName = "";
    }

    record() {
        this.playService.recordStudioSong(this.songName);
    }
}
