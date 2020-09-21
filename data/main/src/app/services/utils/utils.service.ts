import { Injectable } from '@angular/core';
import { distinctUntilChanged, map } from 'rxjs/operators';

import { BackendQuery } from 'src/app/interfaces/backend-query';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public static readonly copyPipeFn = map(data => JSON.parse(JSON.stringify(data)));
  public static readonly distinctPipeFn = distinctUntilChanged((x, y) => JSON.stringify(x) === JSON.stringify(y));


  constructor() { }


  public static getHttpParams(subject: BackendQuery): { [name: string]: string | string[] } {
    const params: { [name: string]: string | string[] } = {};

    Object.keys(subject).forEach(key => {
      params[key] = subject[key] === undefined ? '' : subject[key].toString();
    });

    return params;
  }

}
