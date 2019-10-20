import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Job } from './Job';
import { Jobs } from '../assets/jobs.json';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  jobs = Jobs;

  getJobs() {
    return this.jobs;
  }

  constructor(
    private http: HttpClient
  ) { }
}
