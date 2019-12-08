import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable()
export class TextRequestService {
  constructor(private http: HttpClient) { }

  getTextFile(filePath: string) {
    // now returns an Observable of Config
    return this.http.get(filePath, {responseType: 'text'})
      .pipe(
        tap( // Log the result or error
          data => this.log(filename, data),
          error => this.logError(filename, error)
        )
      );
  }
}
