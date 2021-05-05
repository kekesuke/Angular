import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service'
import { SalespeopleService } from '../../services/salespeople.service';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sales-people-delete',
  templateUrl: './sales-people-delete.component.html',
  styleUrls: ['./sales-people-delete.component.css']
})
export class SalesPeopleDeleteComponent implements OnInit {
  salesperson;
  formdata;
  message;

  constructor(private router: Router, private httpClient: HttpClient, private ds: DataService, private ss: SalespeopleService) {
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
    return this.httpClient.delete<any>('http://localhost:8080/api/salespeople/' + data.spid,)
      .subscribe({
        next: data => {

        },
        error: error => {
          this.salesperson.message = error.error.message;
          console.error('There was an error!', error);
        }
      });
  }
  goBack(spid: String) {
    this.ds.setSalesSpid(spid);
    this.router.navigate(['salespeople'])
  }
}