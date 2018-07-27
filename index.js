(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.animillusion = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (images) {
    var slitSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var c = document.createElement('canvas');
    var c2 = document.createElement('canvas');

    c.width = images[0].width;
    c.height = images[0].height;
    c2.width = images[0].width;
    c2.height = images[0].height;
    var ctx = c.getContext('2d');
    var ctx2 = c2.getContext('2d');
    ctx2.fillStyle = '#000';

    var _loop = function _loop(x) {
      images.forEach(function (img, i) {
        ctx.drawImage(img, x + i, 0, slitSize, c.height, x + i, 0, slitSize, c.height);
      });
      ctx2.fillRect(x, 0, images.length - slitSize, c.height);
    };

    for (var x = 0; x < c.width; x += images.length) {
      _loop(x);
    }
    return [c.toDataURL('image/png'), c2.toDataURL('image/png')];
  };
});

