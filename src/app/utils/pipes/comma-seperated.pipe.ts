// comma-separated.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaSeparated',
  standalone:true
})
export class CommaSeparatedPipe implements PipeTransform {
  transform(value: number | string): string {
    if (typeof value === 'number') {
      value = value.toString();
    }

    return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}
