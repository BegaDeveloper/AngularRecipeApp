import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  //Get recipes
  getRecipe() {
    return this.http.get('http://localhost:3000/posts').pipe(
      map((res) => {
        return res;
      })
    );
  }

  //Post recipes
  postRecipe(data: any) {
    return this.http.post('http://localhost:3000/posts', data).pipe(
      map((res) => {
        return res;
      })
    );
  }

  //Delete recipes
  deleteRecipe(id: number) {
    return this.http.delete('http://localhost:3000/posts/' + id).pipe(
      map((res) => {
        return res;
      })
    );
  }
}
