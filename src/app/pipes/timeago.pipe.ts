import { Pipe, PipeTransform } from '@angular/core';
import { format, TDate } from 'timeago.js';

@Pipe({
  name: 'timeago'
})
export class TimeagoPipe implements PipeTransform {

  transform(timeStamp: any, ...args: unknown[]): unknown {
    return format(Date.now() - timeStamp);
  }

}
