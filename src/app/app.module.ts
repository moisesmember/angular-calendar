import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScheduleModule, View } from '@syncfusion/ej2-angular-schedule';
import { WeekService, MonthService} from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule
  ],
  providers: [WeekService, MonthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
