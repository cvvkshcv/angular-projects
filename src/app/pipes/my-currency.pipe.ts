import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCurrency'
})
export class MyCurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    console.log(value);
    console.log(args);
    let currency = '';
    if (args[0] === 'INR') {
      currency  = 'Rs.'
    } else if (args[0] === 'USD') {
      currency = '$';
    }
    return value + ' ' + currency;
  }

}
