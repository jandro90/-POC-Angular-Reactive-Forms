import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CitiesService {
    constructor(private http: HttpClient) {}

    getCities() {
      return this.http.get('http://localhost:3000/cities').map(response => {
        return response;
      });
    }
}
