import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allUsers:any[], searchKey:string): any[] {
    const result:any = []

    //logic
    if (!allUsers || searchKey=="") {
      return allUsers
    } else {
      allUsers.forEach((item:any) => {
        if (item['name'].toLowerCase().includes(searchKey.toLowerCase())) {
          result.push(item)
        } 
      })
    }
    return result;
  }

}
