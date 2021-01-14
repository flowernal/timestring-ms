# timestring-ms
Converts the provided timestring to ms.

Usage:
```JavaScript
const ms = require("./timestring-ms/index");
ms(timestring, separator);
```

For example:
```JavaScript
ms("1m10s"); // 70000
ms("1m 10s", " "); // 70000
ms("1s-100", "-"); // 1100
```
