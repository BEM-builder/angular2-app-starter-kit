export class PlayerPageObject {
    public player = element(by.id('player'));
    public play = element(by.id('playpause'));
    public fullScreen = element(by.id('fullscreen'));
    public currentTime = element(by.id('currentTime'));
    public durationTime = element(by.id('durationTime'));
    public progressIndicator = element(by.id('progressindicator'));
    public progressBar = element(by.id('progressbar'));
}