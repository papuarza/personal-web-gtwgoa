import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  type = 'doughnut';
  options = {
  responsive: true,
  maintainAspectRatio: true,
  cutoutPercentage: 80,
  };
  data = { datasets: [{ data: [80, 20],
      backgroundColor: [ "#5c6bc0", "#e8eaf6",],}]};
  data2 = { datasets: [{ data: [86, 14],
      backgroundColor: [ "#5c6bc0", "#e8eaf6",],}]};
  data3 = { datasets: [{ data: [92, 8],
      backgroundColor: [ "#5c6bc0", "#e8eaf6",],}]};
  data4 = { datasets: [{ data: [75, 25],
      backgroundColor: [ "#5c6bc0", "#e8eaf6",],}]};
  data5 = { datasets: [{ data: [95, 5],
      backgroundColor: [ "#5c6bc0", "#e8eaf6",],}]};
  data6 = { datasets: [{ data: [82, 18],
      backgroundColor: [ "#5c6bc0", "#e8eaf6",],}]};

  constructor() { }

  ngOnInit() {

  }

}
