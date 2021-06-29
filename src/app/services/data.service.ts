import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { AppError } from '../common/error/app.error';
import { BadRequestError } from '../common/error/bad-request.error';
import { NotFoundError } from '../common/error/not-found.error';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // private resource: any[];
  constructor(private http: HttpClient, private url: string) {}

  get(resource, url) {
    console.log(url + resource);

    return this.http.get(url + resource).pipe(
      map((data) => data),
      catchError(this.errorHandler)
    );
  }

  getAll() {
    return this.http.get(this.url, { observe: 'body' }).pipe(
      map((resource) => resource as []),
      catchError(this.errorHandler)
    );
  }
  create(resource) {
    return this.http
      .post(this.url, JSON.stringify(resource), { observe: 'body' })
      .pipe(
        map((data) => data as object),
        catchError(this.errorHandler)
      );
  }

  update(resource) {
    return this.http
      .put(this.url + '/' + resource.id, JSON.stringify(resource))
      .pipe(catchError(this.errorHandler));
  }

  delete(resource) {
    return this.http
      .delete(this.url + '/' + resource.id)
      .pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: HttpResponse<any>) {
    if (error.status === 400) return throwError(new BadRequestError());
    if (error.status === 404) return throwError(new NotFoundError());
    return throwError(new AppError());
  }
}
