import { Component, OnInit } from '@angular/core';
import { SummaryService } from '../summary.service';
import { Summary } from '../summary';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  providers: [SummaryService]
})
export class ProgressComponent implements OnInit {

  summary: any = {};

  constructor(private summaryService: SummaryService) { }

  ngOnInit() {
    this.updateProgress();
  }

  updateProgress(){
    this.summaryService.getSummary().then(summary => {
      this.summary = summary
    });
  }

}
