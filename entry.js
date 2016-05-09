var title = require('..');

document.getElementById('button').onclick = function () {
  title(Math.random().toString(25).substr(3, 8));
};
