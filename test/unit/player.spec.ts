import {Player} from '../../source/modules/player/player'

describe('player class tests', () => {
    class PlayerMock {
        public paused:boolean = true;
        public currentTime:number = 0;
        public duration:number = 0;
        public isMock:boolean = true;
        constructor() {

        }

        play() {
            this.paused = false;
        }

        pause() {
            this.paused = true;
        }

        addEventListener(string: string, callback: any) {
            switch(string) {
                case 'play':
                    callback();
                    expect(controls.playpause.innerHTML).toBe('Pause');
                    break;
                case 'pause':
                    callback();
                    expect(controls.playpause.innerHTML).toBe('Play');
                    break;
                case 'canplay':
                    playerMock.duration = 5;
                    callback();
                    expect(Player.getDuration()).toBe(5);
                    break;
                case 'timeupdate':
                    playerMock.currentTime = 1;
                    callback();
                    expect(Player.getCurrentTime()).toBe(1);
                    break;
                case 'ended':
                    callback();
                    expect(playerMock.paused).toBeTruthy();
                    expect(controls.playpause.innerHTML).toBe('Play');
                    expect(Player.getDuration()).toBe(0);
                    expect(Player.getCurrentTime()).toBe(0);
                    expect(Player.getCurrentPercentage()).toBe(0);
                    break;
            }
        }
    }

    var controls = {
        playpause: {
            innerHTML: 'Play'
        },
        log: {
            innerHTML: ''
        }
    };

    var Player = new Player();
    var playerMock = new PlayerMock();

    beforeEach(() => {

    });

    it('should test first page default variable values', () => {
        expect(Player.getPlayer()).toBe(null);
        expect(Player.getControls()).toEqual(null);
        expect(Player.getCurrentPercentage()).toBe(0);
        expect(Player.getDuration()).toBe(0);
        expect(Player.getCurrentTime()).toBe(0);
    });

    it('should test player and controls initialization after component init', () => {
        Player.init(playerMock, controls);
        expect(Player.getPlayer().paused).toBeTruthy();
    })
});