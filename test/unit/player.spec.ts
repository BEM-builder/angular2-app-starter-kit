import {FirstPageComponent} from '../../source/components/firstpage/firstpage.component'

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
                    expect(firstPageComponent.getDuration()).toBe(5);
                    break;
                case 'timeupdate':
                    playerMock.currentTime = 1;
                    callback();
                    expect(firstPageComponent.getCurrentTime()).toBe(1);
                    break;
                case 'ended':
                    callback();
                    expect(playerMock.paused).toBeTruthy();
                    expect(controls.playpause.innerHTML).toBe('Play');
                    expect(firstPageComponent.getDuration()).toBe(0);
                    expect(firstPageComponent.getCurrentTime()).toBe(0);
                    expect(firstPageComponent.getCurrentPercentage()).toBe(0);
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

    var firstPageComponent = new FirstPageComponent();
    var playerMock = new PlayerMock();

    beforeEach(() => {

    });

    it('should test first page default variable values', () => {
        expect(firstPageComponent.getPlayer()).toBe(null);
        expect(firstPageComponent.getControls()).toEqual(null);
        expect(firstPageComponent.getCurrentPercentage()).toBe(0);
        expect(firstPageComponent.getDuration()).toBe(0);
        expect(firstPageComponent.getCurrentTime()).toBe(0);
    });

    it('should test player and controls initialization after component init', () => {
        firstPageComponent.init(playerMock, controls);
        expect(firstPageComponent.getPlayer().paused).toBeTruthy();
    })
});