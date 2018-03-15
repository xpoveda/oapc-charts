import { Component } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
 
@Component({
  selector: 'line-chart-demo',
  templateUrl: './line-chart-demo.component.html'
})


export class LineChartDemoComponent {

  public dataURL: any;

  // lineChart
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  //https://valor-software.com/ng2-charts/
  //https://github.com/valor-software/ng2-charts/issues/832
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  //https://stackoverflow.com/questions/42850260/property-todataurl-does-not-exist-on-type-htmlelement
  //https://codebeautify.org/base64-to-image-converter
  public generate_base64()
  {
    let canvas = document.getElementById('michart') as HTMLCanvasElement;
    this.dataURL = canvas.toDataURL("image/png");

    console.log(canvas);    


    console.log(this.dataURL);
  }
 
  //https://stackoverflow.com/questions/45136111/angular2-how-to-use-pdfmake-library
  //http://pdfmake.org/#/gettingstarted
  public generate_pdf()
  {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    var docDefinition = { content: [
      
      { text: 'Bla bla bla bla'},
      { text: 'Ble ble ble ble'},
      { image: this.dataURL, width: 300, height: 300},
      { text: 'Bli bli bli bli'}

    ]};

    //open the PDF in a new window
    pdfMake.createPdf(docDefinition).open();

    //print the PDF
    //pdfMake.createPdf(docDefinition).print();
    //download the PDF
    //pdfMake.createPdf(docDefinition).download('optionalName.pdf');    
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}