import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  apiKey = 'a417e8c3954a408c834666e6f9bf5324';
  apiURL = 'https://newsapi.org/v2/';

  constructor(private client: HttpClient) { }

  initSources(){
    return this.client.get(this.apiURL + 'sources?leanguage=en&apiKey=' + this.apiKey)
  }

  initArticles(){
    return this.client.get(this.apiURL + 'top-headlines?sources=techcrunch&apiKey=' + this.apiKey);
  }

  getArticlesById(source: string){
    return this.client.get(this.apiURL + 'top-headlines?sources=' + source + '&apiKey=' + this.apiKey)
  }
}
