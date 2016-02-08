import {PlayerPageObject} from './pageObjects/player.pageObject'

describe('Player page', function () {
    let playerObject = new PlayerPageObject();

    beforeEach(function () {
        browser.get('#/player');
    });

    it('should test player', () => {
        let isPlayerReady = () => {
            return browser.executeScript(function () {
                let player : HTMLVideoElement = <HTMLVideoElement>document.getElementById('player');
                return player.readyState == 4;
            });
        };

        let readyState = browser.driver.wait(isPlayerReady, 15000);

        expect(browser.getTitle()).toEqual('BEM Builder');

        expect(playerObject.player.isPresent()).toBe(true);

        expect(readyState).toEqual(true);

        expect(playerObject.currentTime.getText()).toEqual('00:00:00');
        expect(playerObject.durationTime.getText()).toEqual('00:02:25');
    });

    it('should check controls', () => {
        let play2Seconds = () => {
            return browser.executeScript(() => {
                let player : HTMLVideoElement = <HTMLVideoElement>document.getElementById('player');
                return player.currentTime > 2.5;
            })
        };

        let isPaused = () => {
            return browser.executeScript(() => {
                let player : HTMLVideoElement = <HTMLVideoElement>document.getElementById('player');
                return player.paused;
            });
        };

        expect(isPaused()).toBe(true);

        playerObject.play.click();

        expect(isPaused()).toBe(false);
        expect(playerObject.play.getText()).toEqual('Pause');

        browser.driver.wait(play2Seconds, 5000);

        expect(playerObject.currentTime.getText()).toEqual('00:00:02');

        let currentWidth = parseInt(playerObject.progressIndicator.getCssValue('width').toString(), 10);
        let onePercentToPx = Math.floor(parseInt(playerObject.progressBar.getCssValue('width').toString(), 10) / 100);

        expect(currentWidth).toEqual(onePercentToPx);
    });

    it('should set player to fullscreen mode', () => {
        let checkFullScreen = () => {
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