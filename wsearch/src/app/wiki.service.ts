import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from "rxjs/operators";

interface WikipediaResponse {
  query: {
    search: {
      pageid: number,
      snippet: string,
      title: string
    }[]
  }
}

interface Car {
  year: number;
  color: string;
  running: boolean;
}

const observable = new Observable<Car>((sub) => {
  sub.next({ year: 332, color: "red", running: true });
})
observable.subscribe((value) => {
  console.log(value)
})

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient) { }

  search(term: string) {
    return this.http.get<WikipediaResponse>("https://en.wikipedia.org/w/api.php?", {
      params: {
        action: "query",
        format: "json",
        list: "search",
        uft8: "1",
        srsearch: term,
        origin: "*"
      }
    }).pipe(
      pluck('query', 'search')
    )
  }
}
