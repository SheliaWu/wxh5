function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}
function imgLoader(imgList, callback, timeout) {
  timeout = timeout || 5000
  imgList = isArray(imgList) && imgList || []
  callback = typeof(callback) === 'function' && callback

  var total = imgList.length,
      loaded = 0,
      images = [],
      _on = function () {
          loaded < total && (++loaded, callback && callback(loaded / total));
      };

  if (!total) {
      return callback && callback(1);
  }

  for (var i = 0; i < total; i++) {
      images[i] = new Image();
      images[i].onload = images[i].onerror = _on;
      images[i].src = imgList[i];
  }
  setTimeout(function () {
      loaded < total && (loaded = total, callback && callback(loaded / total));
  }, timeout * total);
}
export default{
  load:imgLoader
}