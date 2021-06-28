import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root',
})
export class PostsService extends DataService {
  constructor(http: HttpClient) {
    super(http, 'http://jsonplaceholder.typicode.com/posts')
  }

}

//   getAll() {
//     return this.http.get(this.url, { observe: 'body' }).pipe(
//       map((post) => post as Post[]),
//       catchError(this.errorHandler))
//     );
//   }
//   create(post: Post) {
//     return this.http
//       .post(this.url, JSON.stringify(post), { observe: 'body' })
//       .pipe(map((data) => data as Post),catchError(this.errorHandler));;
//   }
//   update(post: Post) {
//     return this.http
//       .put(this.url + '/' + post.id, JSON.stringify(post))
//       .pipe(catchError(this.errorHandler);
//   }
//   delete(post: Post) {
//     return this.http
//       .delete(this.url + '/' + post.id)
//       .pipe(catchError(this.errorHandler);
//   }
//   private errorHandler(error: HttpResponse<any>) {
//     if (error.status === 400) return throwError(new BadRequestError());
//     if (error.status === 404) return throwError(new NotFoundError());
//     return throwError(new AppError());
//   }
// }
