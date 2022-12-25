import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper',
  pure: false
})
export class UpperPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log('Inside upper pipe --- > ' + value);
    return value.toUpperCase();
  }

}
