import angular from 'angular';

import appComponent from './app.component';
import membreComposant from './member/member.component';

import studioComposant from './studio/studio.component';
import festivalComposant from './festival/festival.component';
import busComposant from './bus/bus.component';

import appConfig from './app.config';

import playService from './core/play.service';


angular.module('rock-band',
    [
        'ngRoute'
    ])
    .config(appConfig)
    .component('app', appComponent)
    .component('member', membreComposant)
    .component('studio', studioComposant)
    .component('festival', festivalComposant)
    .component('bus', busComposant)
    .service('playService', playService);
