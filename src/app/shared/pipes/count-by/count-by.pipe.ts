import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countBy'
})
export class CountByPipe implements PipeTransform {

  transform(list: any[], key: string, match: any): number {
    return list.filter(item => item[key] === match).length;
  }

}
