import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent }           from './app.component';
import { ChartsModule }           from 'ng2-charts';
import { LineChartDemoComponent } from './line-chart-demo/line-chart-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    LineChartDemoComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
