import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-sales-person',
  templateUrl: './add-sales-person.component.html',
  styleUrls: ['./add-sales-person.component.css']
})
export class AddSalesPersonComponent implements OnInit {
  formdata;

  constructor(private httpClient: HttpClient) {
    this.formdata = new FormGroup({
      spid: new FormControl(),
      name: new FormControl()
    });
  }

  ngOnInit() {


    this.formdata = new FormGroup({
      spid: new FormControl(),
      name: new FormControl(),
      message: new FormControl()
    });
  }

  onClickSubmit(data) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const body = { spid: data.spid, name: data.name };
    return this.httpClient.post('http://localhost:8080/api/salespeople/', body, { headers })
      .subscribe({
        next: data => {

        },
        error: error => {
          this.formdata.message = error.error.message;
          console.error('There was an error!', error);
        }
      });
  }
}
