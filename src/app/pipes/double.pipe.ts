import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class DoublePipe implements PipeTransform {

  transform(value: number, ...args: any[]): unknown {
    console.log('This is from pipe');
    const numberToMultiply: number = args[0] || 2;
    return value * numberToMultiply;
  }

}
