import { Component }              from '@angular/core';

import { ChartsModule }           from 'ng2-charts';
import { LineChartDemoComponent}  from './line-chart-demo/line-chart-demo.component'

import { TranslateService }       from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'app';

  titulo: string;
  saludo: string;

  titulo_array: string[] = ['hola','que','tal'];
  
  ///////////////////////////////////////////////////

  constructor(private translate: TranslateService) {

    translate.setDefaultLang('en');

    this.titulo = 'Title';
    this.saludo = 'HELLO';
  }

  switchLanguage(language: string) {
    this.translate.use(language);    
    //debugger;
    //console chrome, source, locate app.component.ts and watch this object
  }

    ///////////////////////////////////////////////////

  selectedCombo1 : any;
  selectedCombo2 : any;
  miraCombo1     : any;
  miraCombo2     : any;
  
  datosCombos = [
    { clave1: 1, dato1: "HELLO1", relacion: [ { dato2: "A1" },  { dato2: "A2" }                     ] },
    { clave1: 2, dato1: "HELLO2", relacion: [ { dato2: "B1" },  { dato2: "B2" },   { dato2: "B3" }  ] },
    { clave1: 3, dato1: "HELLO3", relacion: [ { dato2: "C1" },  { dato2: "C2" }                     ] }
  ];


  actualiza_combo1()
  {  
    this.selectedCombo2 = {};

    this.miraCombo1     = this.selectedCombo1;
    this.miraCombo2     = this.selectedCombo2;
  }

  actualiza_combo2()
  {
    this.miraCombo2     = this.selectedCombo2;
  }

}