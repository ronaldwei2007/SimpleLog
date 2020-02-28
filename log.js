const Log = {
  log: true,
  useBuiltin: true,
  init() {
    if(!this.log) {
      this.Debug = () => {};
    }else if(this.useBuiltin) {
      this.Debug = console.debug.bind(window.console);
    }else {
      this.Debug = this.DebugCustomize.bind(this); 
    }
    return true;
  },
  getCurMinSec() {
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    const msec = new Date().getMilliseconds();
    return `--${min}:${sec}:${msec}`;
  },
  DebugCustomize(msg) {
    if (this.log) {
      console.debug(`${this.getCurMinSec()} ${msg}`);
    }
  },
};
Log.init();
export default Log;
