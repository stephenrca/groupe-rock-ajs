export default class PlayService {

    constructor() {
        this.selectedMembers = [];
    }

    selectMember(member) {
        this.selectedMembers.push(member);
    }

    unSelectMember(member) {
        this.selectedMembers = this.selectedMembers.filter(m => m !== member);
    }

    recordStudioSong(songName) {
        console.log(`The song ${songName} has been recorded by ${this.selectedMembers.join(', ')}`);
        alert(`The song ${songName} has been recorded by ${this.selectedMembers.join(', ')}`);
    }

    playConcert(place) {
        console.log(`${this.selectedMembers.join(', ')} play a concert in ${place}`);
        alert(`${this.selectedMembers.join(', ')} play a concert in ${place}`);
    }
}
