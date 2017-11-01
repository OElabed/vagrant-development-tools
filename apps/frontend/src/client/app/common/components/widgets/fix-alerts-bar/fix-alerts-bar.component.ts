import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'fix-alerts-bar',
  templateUrl: 'fix-alerts-bar.component.html'
})
export class FixAlertsComponent {

  alerts: any[] = [
    {
      type: 'success',
      msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!'
    }, {
      type: 'danger',
      msg: 'Found a bug? Create an issue with as many details as you can.'
    }
  ];

  addAlert() {
    this.alerts.push({
      msg: 'Another alert!'
    });
  }

  closeAlert(index: number) {
    this.alerts.splice(index, 1);
  }

}
