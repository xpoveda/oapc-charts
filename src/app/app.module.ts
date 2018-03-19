import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { FormsModule }                from '@angular/forms';
 
import { AppComponent }               from './app.component';

import { ChartsModule }               from 'ng2-charts';
import { LineChartDemoComponent }     from './line-chart-demo/line-chart-demo.component';

import { HttpClientModule, HttpClient }                         from '@angular/common/http';
import { TranslateModule, TranslateLoader, TranslateService }   from '@ngx-translate/core';
import { TranslateHttpLoader }                                  from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LineChartDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})

export class AppModule {}