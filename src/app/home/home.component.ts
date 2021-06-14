import {Component, OnInit} from '@angular/core';
import {from, fromEvent, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {mockData} from "../../helpers/mockData";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {

    of(mockData).subscribe(console.log);

    this.http.get('assets/mockData.json').subscribe(console.log)
    from(['name1', 'name2', 'name3']).subscribe(console.log);

    fromEvent(document,'click').subscribe(console.log)
  }

}
