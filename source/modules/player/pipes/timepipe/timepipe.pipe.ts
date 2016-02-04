import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'convertToFullTime'
})

export class Conversion implements PipeTransform {
    transform(value: number, args: string[]) : any {
        let secondsRouded : number = Math.floor(value);

        let hours : number   = Math.floor(secondsRouded / 3600);
        let minutes : number = Math.floor((secondsRouded - (hours * 3600)) / 60);
        let seconds : number = secondsRouded - (hours * 3600) - (minutes * 60);

        let hoursString : String = hours.toString();
        let minutesString : String = minutes.toString();
        let secondsString : String = seconds.toString();

        if (hours   < 10) { hoursString   = "0" + hours.toString(); }
        if (minutes < 10) { minutesString = "0" + minutes.toString(); }
        if (seconds < 10) { secondsString = "0" + seconds.toString(); }

        let timeString : String    = hoursString + ':' + minutesString + ':' + secondsString;
        return timeString;
    }
}