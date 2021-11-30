import { Component } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, EventSettingsModel  } from '@syncfusion/ej2-angular-schedule';
import { defaultData } from './datasource';
@Component({
  selector: 'app-root',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings"><e-views> <e-view option="Week" startHour="07:00" endHour="15:00"></e-view>
  <e-view option="WorkWeek" startHour="10:00" endHour="18:00"></e-view> <e-view option="Month" [showWeekend]="showWeekend"></e-view></e-views></ejs-schedule>`
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-calendar';
  public selectedDate: Date = new Date(2018, 1, 15);
  public showWeekend: boolean = false;
  public eventSettings: EventSettingsModel = { dataSource: defaultData };
}
