import Log from './log.js'
Log.Debug('builtin log');
Log.useBuiltin= false;
Log.init();
Log.Debug('customized log');
Log.Debug('log will be turn off');
Log.log = false;
Log.init();
Log.Debug('no log at all');
