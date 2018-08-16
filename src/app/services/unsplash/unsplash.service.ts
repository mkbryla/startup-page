import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { DEVICE_ORIENTATION } from '../media/media.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  private readonly unsplashURL: string = 'https://api.unsplash.com/photos/random';

  constructor(private http: HttpClient) {
  }

  public getRandomPhoto(orientation: DEVICE_ORIENTATION, width: number, category?: string): Observable<any> {
    const queryParams = {
      client_id: environment.unsplashClientId,
      orientation: orientation.toString().toLowerCase(),
      w: width.toString(),
      query: category
    };
    return this.http.get(this.unsplashURL, {params: queryParams});
  }
}
