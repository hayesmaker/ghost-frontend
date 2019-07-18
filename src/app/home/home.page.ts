import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  lastText = "";

  constructor(private http: HttpClient) {}
  onSubmit(form) {
    console.log('Home.page :: onSubmit :: someText=', form.value.someText);
    this.http.post('http://localhost:8080/api/some-text', {someText: form.value.someText}).subscribe((res:any) => {
      console.log('someText was posted successfully', res);
      this.lastText = res.lastText.text;
    });
  }
}
