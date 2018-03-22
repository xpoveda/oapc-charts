

```
                                            .__                   __          
  _________  ______   ____             ____ |  |__ _____ ________/  |_  ______
 /  _ \__  \ \____ \_/ ___\   ______ _/ ___\|  |  \\__  \\_  __ \   __\/  ___/
(  <_> ) __ \|  |_> >  \___  /_____/ \  \___|   Y  \/ __ \|  | \/|  |  \___ \ 
 \____(____  /   __/ \___  >          \___  >___|  (____  /__|   |__| /____  >
           \/|__|        \/               \/     \/     \/                 \/ 
```
                                                                              
Instalar chart.js para angular
-----------------------------
Documentación de uso en https://valor-software.com/ng2-charts/ y http://www.chartjs.org/



Instalamos `ng2-charts` que es la versión angular de `chart.js`
```shell
npm install ng2-charts --save
npm install chart.js --save
```

Instalar pdfmake para angular
-----------------------------
Documentación de uso en http://pdfmake.org/#/gettingstarted

Instalamos `pdfmake`
```shell
npm install pdfmake --save
```

En `typings.d.ts` añadimos al final
```typescript
declare module 'pdfmake/build/pdfmake.js';
declare module 'pdfmake/build/vfs_fonts.js';
```

Y en el servicio o componente que queramos utilizar pdfmake añadimos por último
```
import * as pdfMake from 'pdfmake/build/pdfmake.js';
import * as pdfFonts from 'pdfmake/build/vfs_fonts.js';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
```
Despues utilizamos `pdfMake.xxx()` de la forma normal.


Uso de DOM para extraer el elemento `canvas` y generación de pdf con `pdfmake` y `html2canvas`
----------------------------------------------------------------------------------------------

En el html del componente line-char-demo.component añadimos el ID para poder referenciar aL canvas.
```typescript
<canvas baseChart id="michart" width="400" height="400">
```

De esta forma podemos referenciar ese `canvas` para, por ejemplo, generar una imagen en base64 que encapsulariamos en un string
```
  //https://stackoverflow.com/questions/42850260/property-todataurl-does-not-exist-on-type-htmlelement
  //https://codebeautify.org/base64-to-image-converter
  public generate_base64()
  {
    let canvas = document.getElementById('michart') as HTMLCanvasElement;
    this.dataURL = canvas.toDataURL("image/png");

    console.log(canvas);    


    console.log(this.dataURL);
  }
  ```

  Y que utilizariamos para añadirla en este formato base64 a un pdf que generariamos linea a linea con `pdfmake`
  ```
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
  ```

  Tambien otra opcion es generar una seccion de html con todos los elementos incrustados que queramos imprimir y con la libreria `html2canvas` generar un canvas sobre el que despues se puede generar de forma muy sencilla un pdf con `pdfmake`.

  https://stackoverflow.com/questions/41036900/html2canvas-and-pdfmake-create-blank-pdf

  Multilenguaje con `ngx-translate`
  ---------------------------------

  Instalamos la libreria `ngx-translate`

  * http://www.ngx-translate.com/
  * https://medium.com/letsboot/translate-angular-4-apps-with-ngx-translate-83302fb6c10d

  Añadiendo las librerias desde `npm`
  ```
  npm install @ngx-translate/core --save
  npm install @ngx-translate/http-loader
  ```
  
  Referenciamos los elementos debidamente en `app.module.ts`
  ```typescript
  import { HttpClientModule, HttpClient }                       from '@angular/common/http';
  import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
  import { TranslateHttpLoader }                                from '@ngx-translate/http-loader';
  
  ...

  export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
  }
  
  ...
  
  @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
  ```

Y en el componente donde queramos inyectar el servicio de traducción en la parte del modelo
```typescript
import { TranslateService } from '@ngx-translate/core';

...

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
```

Y en la parte de la vista
```html
<h1>{{ titulo | translate }}</h1>
<h2>{{ 'HOMEPAGE.' + saludo | translate }}</h2>

<button (click)="switchLanguage('en')">en</button>
<button (click)="switchLanguage('fr')">fr</button>
<hr>
```

No nos olvidemos de generar los ficheros de traduccion en `src\assets\i18n`

en.json
```json
{
    "Title": "Translation example",
    "Intro": "Hello I am Arthur, I am 42 years old.",

     "HOMEPAGE": {
        "HELLO": "Hello"
    }
}
```

fr.json
```json
{
    "Title": "Exemple de traduction",
    "Intro": "Bonjour je m'appelle Arthur, j'ai 42 ans.",

     "HOMEPAGE": {
        "HELLO": "Bonjour"
    }
}
```

Deploy angular and spring boot apps
------------------------------------
* https://stackoverflow.com/questions/37631098/how-to-bundle-an-angular-app-for-production
* http://www.devglan.com/spring-boot/spring-boot-angular-deployment
* https://angular.io/guide/deployment
* https://spring.io/guides/gs/rest-service-cors/
* https://enable-cors.org/server.html

