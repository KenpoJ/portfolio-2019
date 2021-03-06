import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.less']
})
export class WorkHistoryComponent implements OnInit {
  jobs;

  constructor(
    private historyService: HistoryService
  ) {
    // debugger;
    this.jobs = this.historyService.getJobs();
  }

  ngOnInit() {
  }

}
