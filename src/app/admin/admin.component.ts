import { Component, OnInit } from '@angular/core';
import { getDonationListService } from '../getDonationList.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers: [getDonationListService]
})
export class AdminComponent implements OnInit {

  list: any = [];

  constructor(private getDonationListService: getDonationListService) { }

  ngOnInit() {
    this.getDonationListService.getList().then(list => {
      console.log(list)
      this.list = list
    });
  }

}
