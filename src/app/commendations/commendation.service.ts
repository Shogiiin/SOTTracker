import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
// import { WishItem } from '../../shared/models/wishItem';

@Injectable({
  providedIn: 'root'
})
export class CommendationService {

  constructor(private http :HttpClient) { }

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  getCommendations() {
    let options = this.getStandardOptions();

    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    });

    // with json file
    // return this.http.get('assets/Commendations.json');
    
    // with server api
    return this.http.get('http://84.247.178.253:8080/commendations');
  }
}
