

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
```
npm install ng2-charts --save
npm install chart.js --save
```

Añadimos la libreria a `src\.angular-cli.json`
```shell
"scripts": ["../node_modules/chart.js/src/chart.js"],
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


Uso de DOM para extraer el elemento <canvas>
---------------------------------------------

En el html del componente line-char-demo.component añadimos el ID para poder referenciar a <canvas>.
```typescript
<canvas baseChart id="michart" width="400" height="400"
```
