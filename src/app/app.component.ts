import { Component }    from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { LineChartDemoComponent} from './line-chart-demo/line-chart-demo.component'

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';

  titulo: string;
  saludo: string;

  constructor(private translate: TranslateService) {

    translate.setDefaultLang('en');

    this.titulo = 'Title';
    this.saludo = 'HELLO';
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}