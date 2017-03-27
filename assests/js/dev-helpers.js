var winston = require('winston');
var path    = require('path');

winston.level = (process.env.NODE_ENV !== 'production') ? 'debug' : 'info';

module.exports = function (filename) {
  this.msg = function (ln, msg) {
    var file = path.parse(filename);
    var p    = file.dir.split('/');

    return { title: `${path.join(p[p.length - 1], file.base)}[${ln}]`, msg: msg };
  };

  this.log = function () {
    Array.from(arguments).map((arg) => {
      // format : [timestamp] platform:pid (uptime) msg
      winston.log(winston.level, '[%s] (%s:%s [t: %s, m: (total: %s, used: %s)]) %s => %s',
        new Date(),
        process.platform,
        process.pid,
        process.uptime(),
        process.memoryUsage().heapTotal,
        process.memoryUsage().heapUsed,
        arg.title,
        arg.msg);
    });
  };
};
