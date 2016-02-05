import {Component, AfterViewInit} from 'angular2/core';
import {Router, RouteConfig, RouterLink, ROUTER_DIRECTIVES} from 'angular2/router';
import {Conversion} from './pipes/timepipe/timepipe.pipe';

@Component({
    selector: 'player',
    pipes: [Conversion],
    template: require('./player.html'),
    styles: [ require('./player.scss').toString()]
})

export class Player {
    private player  = null;
    private controls = null;
    private currentTime : number = 0;
    private duration : number = 0;
    private currentPercentage : number = 0;
    private clicked : Boolean = false;

    constructor() {

    }

    getPlayer() {
        return this.player;
    }

    setPlayer(htmlPlayerElement) {
        this.player = htmlPlayerElement;
    }

    getControls() {
        return this.controls;
    }

    setControls(controls) {
        this.controls = controls;
    }

    getDuration() {
        return this.duration;
    }

    setDuration(duration) {
        this.duration = duration;
    }

    getCurrentPercentage() {
        return this.currentPercentage;
    }

    setCurrentPercentage(currentPercentage) {
        this.currentPercentage = currentPercentage;
    }

    getCurrentTime() {
        return this.currentTime;
    }

    setCurrentTime(currentTime) {
        this.currentTime = currentTime;
    }

    setToDefault() {
        this.setDuration(0);
        this.setCurrentTime(0);
        this.setCurrentPercentage(0);
    }

    init(player: any, controls: any) {
        let that = this;

        this.setPlayer(player);
        this.setControls(controls);

        this.getPlayer().addEventListener('play', function () {
            that.appendToLog('Play event fired', true);
            that.controls.playpause.innerHTML = 'Pause';
        });
        this.getPlayer().addEventListener('pause', function () {
            that.appendToLog('Pause event fired', true);
            that.controls.playpause.innerHTML = 'Play';
        });

        this.getPlayer().addEventListener('canplay', function () {
            that.appendToLog('Canplay event fired, video ready', true);
            that.setDuration(that.getPlayer().duration);
        });

        this.getPlayer().addEventListener('durationchange', function () {
            that.appendToLog('Durationchange event fired, now ' + that.getDuration().toString(), true);
            that.setDuration(that.getPlayer().duration);
        });

        this.getPlayer().addEventListener('timeupdate', function () {
            that.appendToLog('Timeupdate, current is ' + that.getCurrentTime().toString());
            that.setCurrentTime(that.getPlayer().currentTime);
            that.setCurrentPercentage(parseInt((Math.floor(that.getCurrentTime()) / Math.floor(that.getDuration()) * 100).toFixed(0), 10));
        });

        this.getPlayer().addEventListener('ended', function () {
            that.appendToLog('Ended event fired', true);
            that.getPlayer().pause();
            that.controls.playpause.innerHTML = 'Play';
            that.setToDefault();
        });
    }

     appendToLog(string: String, special: Boolean = false) {
         let log = this.controls.log;
         if (special) {
             log.innerHTML = log.innerHTML + '-----------------------------------------------' + '<br/>';
         }
         log.innerHTML = log.innerHTML + string + '<br/>';
         if (special) {
             log.innerHTML = log.innerHTML + '-----------------------------------------------' + '<br/>';
         }
         if (!this.clicked) {
             log.scrollTop = log.scrollHeight;
         }
     }

    stopScrolling() {
        this.clicked = true;
    }

    ngAfterViewInit() {
        this.init(
            document.getElementById('player'),
            {
                playpause: document.getElementById('playpause'),
                log: document.getElementById('log')
            }
        );
    }

    playbackToggle() {
        (this.getPlayer().paused) ? this.getPlayer().play() : this.getPlayer().pause();
    }

    requestFullScreen() {
        this.appendToLog('Fullscreen requested', true);
        if (this.getPlayer().requestFullscreen) {
            this.getPlayer().requestFullscreen();
        } else if (this.getPlayer().mozRequestFullScreen) {
            this.getPlayer().mozRequestFullScreen();
        } else if (this.getPlayer().webkitRequestFullscreen) {
            this.getPlayer().webkitRequestFullscreen();
        }
    }
}