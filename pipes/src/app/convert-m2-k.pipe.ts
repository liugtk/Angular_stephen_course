import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertM2K'
})
export class ConvertM2KPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    console.log(value)
    return value * 1.609;
  }

}
