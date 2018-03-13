import { Component }    from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { LineChartDemoComponent} from './line-chart-demo/line-chart-demo.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}