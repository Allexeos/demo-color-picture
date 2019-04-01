# demo npm package [color-picture](https://www.npmjs.com/package/color-picture)

install
```
yarn add color-picture
```

// or

```
npm i --save color-picture
```

use
```javascript
import { getAverageRGBA } from 'color-picture';
 
 
const img = document.querySelector('img');
const backgr = getAverageRGBA(img);
document.body.style.backgroundColor = backgr;
```