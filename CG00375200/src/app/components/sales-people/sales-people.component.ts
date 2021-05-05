import { Component, OnInit } from '@angular/core';
import { SalespeopleService } from '../../services/salespeople.service'
import { DataService } from '../../services/data.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-sales-people',
  templateUrl: './sales-people.component.html',
  styleUrls: ['./sales-people.component.css']
})
export class SalesPeopleComponent implements OnInit {

  salespeople;
  constructor(private ss: SalespeopleService, private router: Router, private ds: DataService) { }

  ngOnInit() {
    this.ss.getSalesPeople().subscribe(
      (data) => { this.salespeople = data },
      (error) => { console.log(error) }
    )
  }

  update(spid: String) {
    this.ds.setSalesSpid(spid);
    this.router.navigate(['updateSalesperson'])
  }

  delete(spid: String) {
    this.ds.setSalesSpid(spid);
    this.router.navigate(['deleteSalesperson'])
  }

}