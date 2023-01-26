import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../constants/settings.app';

@Injectable({
  providedIn: 'root'
})
export class FetchimageService {

  constructor(private http: HttpClient) { }

  fetchRandomImage(){
    return this.http.get(
      AppSettings.getRandomImageUrl + AppSettings.apiKey
    );
  }
}
