import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormater'
})
export class NumberFormaterPipe implements PipeTransform {

  private letters = [
    "",
    "k",
    "m",
    "g",
    "t",
    "p",
    "e",
    "z",
    "y"
  ]

  transform(value: number, args?: any): string {
    
    const str = value.toString();
    const length = str.length;
    const divLength = length > 3 ? Math.floor((length - 1) / 3) : 0;

    return `${str.substring(0, length - (divLength * 3))}${this.letters[divLength]}`;
  }

}
