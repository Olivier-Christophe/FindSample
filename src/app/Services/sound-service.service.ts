import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoundDetailsModel } from '../models/sound-details.model';
import { SoundModel } from '../models/sound.model';



@Injectable({
  providedIn: 'root'
})
export class SoundServicesService {

  constructor(private _httpClient: HttpClient) { }

getOne(id: number): Observable<SoundDetailsModel> {
  return this._httpClient.get<SoundDetailsModel>('https://freesound.org/apiv2/sounds/' + id);
}


getAll(keyWord:string):Observable<SoundModel>{
  let params = new HttpParams();
  params = params.append('query', keyWord);
  return this._httpClient.get<SoundModel>('https://freesound.org/apiv2/search/text', {params})
}

getUrl(url:string):Observable<SoundModel>{
  return this._httpClient.get<SoundModel>(url);
}

}
// export class SoundServiceService {

//   baseUrl: string = 'https://freesound.org/apiv2/search/text/';
// token: string = 'EsbqvN54olXomou41vj2dyLCa0yryDGFFotz5QOw';

//   getAll(url: string) {
//     throw new Error('Method not implemented.');
//   }





