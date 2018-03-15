import { NgModule, enableProdMode }   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';

import { AppComponent }               from './app.component';
import { ChartsModule }               from 'ng2-charts';

import { LineChartDemoComponent }     from './line-chart-demo/line-chart-demo.component';

enableProdMode();

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
export class AppModule {}
