import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UtilsService } from './utils/utils.service';
import { CropItem } from '../interfaces/crops';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(
    private httpClient: HttpClient,
  ) { }


  public getItemList(): Observable<CropItem[]> {
    const params = UtilsService.getHttpParams({ action: 'crops.getItems'});
    return this.httpClient.get<CropItem[]>('/api/v1/', { params });
  }
}
