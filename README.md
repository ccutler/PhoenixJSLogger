# PhoenixJSLogger
[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ccutler/PhoenixJSLogger.svg)](https://github.com/ccutler/PhoenixJSLogger)

Lightweight, extensible javascript logger that has risen from the ashes.  
Useable in both Node & the Browser (with color output), with the ability to add additional custom LogTargets.

## Basic Usage
1) Import the ILogger & Log packages, plus appropriate targets.  
2) Add targets to Log.  
3) Get logger (using 'this' as category)  
4) Log away!  
```typescript
import { ILogger, Log, BrowserConsoleTarget } from "@phoenixjs/logger";
Log.addTarget(new BrowserConsoleTarget());

const log: Ilogger = Log.getLogger(this);
log.debug("Debug Statement");
log.info("Info Statement");
log.error("Error Statement");
```

## Log Levels  
// TODO
## Log Filters  
// TODO
## Custom Targets
// TODO
