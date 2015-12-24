require.context('.', true, /\.js$/).keys().forEach(function (file) {
  if(file !== './index.js') {
    var path = file.replace('.js', '');
    var name = path.replace('./', '').replace('/', '');
    module.exports[name] = require(path);
  }
});
