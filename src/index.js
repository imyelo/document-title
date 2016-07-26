function isWechat () {
  return /\sMicroMessenger/.test(window.navigator.userAgent);
}

function isQQ () {
  return /\sQQ/.test(window.navigator.userAgent);
}

function isMQQBrowser () {
  return !isWechat() && !isQQ() && /\sMQQBrowser/.test(window.navigator.userAgent);
}

function isIOS () {
  return /iPhone|iPad|iPod/i.test(window.navigator.userAgent);
}

var options = {
  src: 'favicon.ico'
};

var title = function (name) {
  var body, iframe;

  document.title = name;

  if ((isWechat() || isQQ() || isMQQBrowser()) && isIOS()) {
    body = document.getElementsByTagName('body')[0];
    iframe = document.createElement('iframe');
    iframe.src = options.src;
    iframe.style.display = 'none';
    iframe.onload = function () {
      setTimeout(function () {
        body.removeChild(iframe);
        iframe = null;
      }, 0);
    };
    body.appendChild(iframe);
  }
}

title.source = function (src) {
  options.src = src;
};

module.exports = title;
