import {PlayerPageObject} from './pageObjects/player.pageObject'

describe('Player page', function () {
    var playerObject = new PlayerPageObject();

    beforeEach(function () {
        browser.get('#/firstpage');
    });

    it('should test player', () => {
        var isPlayerReady = () => {
            return browser.executeScript(function () {
                var player : HTMLVideoElement = <HTMLVideoElement>document.getElementById('player');
                return player.readyState == 4;
            });
        };

        var readyState = browser.driver.wait(isPlayerReady, 15000);

        expect(browser.getTitle()).toEqual('BEM Builder');

        expect(playerObject.player.isPresent()).toBe(true);

        expect(readyState).toEqual(true);

        expect(playerObject.currentTime.getText()).toEqual('00:00:00');
        expect(playerObject.durationTime.getText()).toEqual('00:02:25');
    });

    it('should check controls', () => {
        var play2Seconds = () => {
            return browser.executeScript(() => {
                var player : HTMLVideoElement = <HTMLVideoElement>document.getElementById('player');
                return player.currentTime > 2.5;
            })
        };

        var isPaused = () => {
            return browser.executeScript(() => {
                var player : HTMLVideoElement = <HTMLVideoElement>document.getElementById('player');
                return player.paused;
            });
        };

        expect(isPaused()).toBe(true);

        playerObject.play.click();

        expect(isPaused()).toBe(false);
        expect(playerObject.play.getText()).toEqual('Pause');

        browser.driver.wait(play2Seconds, 5000);

        expect(playerObject.currentTime.getText()).toEqual('00:00:02');

        var currentWidth = parseInt(playerObject.progressIndicator.getCssValue('width').toString(), 10);
        var onePercentToPx = Math.floor(parseInt(playerObject.progressBar.getCssValue('width').toString(), 10) / 100);

        expect(currentWidth).toEqual(onePercentToPx);
    });

    it('should set player to fullscreen mode', () => {
        var checkFullScreen = () => {
            return browser.executeScript(() => {
                return (<any>document).fullScreen || (<any>document).mozFullScreen || document.webkitIsFullScreen
            })
        };

        playerObject.fullScreen.click();
        expect(checkFullScreen()).toEqual(true);
        playerObject.player.sendKeys(protractor.Key.ESCAPE);
        expect(checkFullScreen()).toEqual(false);
    })
});