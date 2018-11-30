# PhoenixJSLogger
Lightweight, extensible javascript logger that has risen from the ashes.  
Useable in both Node & the Browser (with color output), with the ability to add additional custom LogTargets.

## Basic Usage
1) Import the ILogger & Log packages, plus appropriate targets.
2) Add targets to Log.
3) Get logger (using 'this' as category)
4) Log away!
```javascript
import { ILogger, Log, BrowserConsoleTarget } from "@phoenixjs/logger";
Log.addTarget(new BrowserConsoleTarget());

const log: Ilogger = Log.getLogger(this);
log.debug("Debug Statement");
log.info("Info Statement");
log.error("Error Statement");
```

## Log Levels  
## Log Filters  
## Custom Targets
