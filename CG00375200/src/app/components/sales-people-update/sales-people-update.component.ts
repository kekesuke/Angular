import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { SalespeopleService } from '../../services/salespeople.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-sales-people-update',
  templateUrl: './sales-people-update.component.html',
  styleUrls: ['./sales-people-update.component.css']
})
export class SalesPeopleUpdateComponent implements OnInit {
  salesperson;
  formdata;
  message;

  constructor(private httpClient: HttpClient, private ds: DataService, private ss: SalespeopleService) {
    this.formdata = new FormGroup({
      spid: new FormControl(),
      name: new FormControl()
    });
  }

  ngOnInit() {
    var spid: String;
    spid = this.ds.getSpid();
    this.ss.getOneSalesPeople(spid).subscribe(
      (data) => {
        this.salesperson = data, this.formdata = new FormGroup({
          spid: new FormControl(this.salesperson.spid),
          name: new FormControl(this.salesperson.name),
          message: new FormControl(this.salesperson.name)
        });
      },
      (error) => { console.log(error) }
    )
  }

  onClickSubmit(data) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    const body = { name: data.name };
    return this.httpClient.put<any>('http://localhost:8080/api/salespeople/' + data.spid, body, { headers })
      .subscribe({
        next: data => {

        },
        error: error => {
          this.salesperson.message = error.error.message;
          console.error('There was an error!', error);
        }
      });
  }
}
