import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'convertToFullTime'
})

export class Conversion implements PipeTransform {
    transform(value: number, args: string[]) : any {
        var secondsRouded : number = Math.floor(value);

        var hours : number   = Math.floor(secondsRouded / 3600);
        var minutes : number = Math.floor((secondsRouded - (hours * 3600)) / 60);
        var seconds : number = secondsRouded - (hours * 3600) - (minutes * 60);

        var hoursString : String = hours.toString();
        var minutesString : String = minutes.toString();
        var secondsString : String = seconds.toString();

        if (hours   < 10) { hoursString   = "0" + hours.toString(); }
        if (minutes < 10) { minutesString = "0" + minutes.toString(); }
        if (seconds < 10) { secondsString = "0" + seconds.toString(); }

        var timeString : String    = hoursString + ':' + minutesString + ':' + secondsString;
        return timeString;
    }
}