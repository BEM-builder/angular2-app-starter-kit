import {Component, AfterViewInit} from 'angular2/core'
import {Conversion} from './../../pipes/timepipe/timepipe.pipe'
import {HomeComponent} from './../homepage/homepage.component'

@Component({
    selector: 'firstpage',
    pipes: [Conversion],
    template:
        `
            <div class="playerContainer">о
                <home-component></home-component>
                <video id="player" src="http://1cdp.look1.ru/trailer/e9350309-194b-4e0d-b967-ccd4647baeb4.mp4" volume="0.3" width="800" height="450"></video>
                <div class="controls">
                    <button id="playpause" class="control btn btn-success" (click)="playbackToggle()">
                        Play
                    </button>
                    <div id="progressbar">
                        <div id="progressindicator" [style.width.%]="getCurrentPercentage()"></div>
                    </div>
                    <button id="fullscreen" class="control btn btn-success" (click)="requestFullScreen()">
                        Full
                    </button>
                    <span id="durationTime">{{getDuration() | convertToFullTime}}</span>
                    <span class="divider"> / </span>
                    <span id="currentTime">{{getCurrentTime() | convertToFullTime}}</span>
                </div>
            </div>
            <div id="log" class="playerlog" (click)="stopScrolling()">Click to stop scrolling!<br/></div>
        `
})

export class FirstPageComponent {
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
        var that = this;

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
            that.setDuration(that.getPlayer().duration)
        });

        this.getPlayer().addEventListener('durationchange', function () {
            that.appendToLog('Durationchange event fired, now '+that.getDuration().toString(), true);
            that.setDuration(that.getPlayer().duration);
        });

        this.getPlayer().addEventListener('timeupdate', function () {
            that.appendToLog('Timeupdate, current is '+that.getCurrentTime().toString());
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
         var log = this.controls.log;
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